/**
 * @param url File 객체로 변환할 imageUrl을 받아옵니다.
 * @returns File 객체를 반환합니다.
 */
export const convertURLtoFile = async (url: string) => {
  const response = await fetch(url);
  const data = await response.blob();
  const ext = url.split('.').pop();
  const filename = url.split('/').pop();
  const metadata = { type: `image/${ext}` };
  const file = new File([data], filename!, metadata);
  return file;
};
