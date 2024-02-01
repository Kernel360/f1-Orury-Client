import jwt from 'jsonwebtoken';

export const getEmail = (token?: string) => {
  if (process.env.NEXT_PUBLIC_CRYPTO_KEY && token) {
    const decodedToken = jwt.decode(token, { complete: true });

    return decodedToken?.payload.sub;
  }
};
