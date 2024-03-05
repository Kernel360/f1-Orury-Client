import CryptoJS from 'crypto-js';

const secretKey = process.env.NEXT_PUBLIC_CRYPTO_KEY;

export const encrypt = (payload: string) => {
  if (!secretKey) return null;

  //  AES 알고리즘을 사용하여 payload 암호화
  const encrypted = CryptoJS.AES.encrypt(
    payload,
    JSON.stringify({ secretKey }),
  ).toString();

  return encrypted;
};

export const decrypt = (ciphertext?: string) => {
  let decrypted_bytes;
  if (!secretKey) return null;

  // secretKey를 기반으로 복호화
  if (ciphertext) {
    decrypted_bytes = CryptoJS.AES.decrypt(ciphertext, secretKey as string);
  }

  // 얻은 복호화된 바이트를 UTF-8 형식의 문자열로 디코딩
  const decrypted = decrypted_bytes?.toString(CryptoJS.enc.Utf8);

  return decrypted;
};
