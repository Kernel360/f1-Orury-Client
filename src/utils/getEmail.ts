import jwt from 'jsonwebtoken';
import { decrypt } from './crypto';

export const getEmail = (token?: string | null) => {
  if (process.env.NEXT_PUBLIC_CRYPTO_KEY && token) {
    let decodedToken;
    const decryptedToken = decrypt(token);

    if (typeof decryptedToken === 'string') {
      decodedToken = jwt.decode(decryptedToken, { complete: true });
    }

    return decodedToken?.payload.sub;
  }
};
