import CryptoJS from 'crypto-js';

const secretKey = process.env.NEXT_PUBLIC_CRYPTO_KEY;

export const encrypt = (payload: string) => {
  if (!secretKey) return null;

  // payload를 UTF-8 형식으로 인코딩
  const utf8Payload = CryptoJS.enc.Utf8.parse(payload);

  // AES 알고리즘을 사용하여 UTF-8 형식으로 인코딩된 payload 암호화
  const encrypted = CryptoJS.AES.encrypt(
    utf8Payload,
    secretKey as string,
  ).toString();

  return encrypted;
};

export const decrypt = (ciphertext?: string) => {
  if (!secretKey || !ciphertext) return null;

  try {
    // secretKey를 기반으로 복호화
    const decrypted_bytes = CryptoJS.AES.decrypt(
      ciphertext,
      secretKey as string,
    );

    // 복호화된 바이트를 UTF-8 형식의 문자열로 디코딩
    const decrypted = decrypted_bytes.toString(CryptoJS.enc.Utf8);
    return decrypted;
  } catch (error) {
    throw new Error(`Error decrypting data : ${error}`);
  }
};
