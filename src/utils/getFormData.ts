import type { GetFormDataProps } from '@/constants/utils/getFormData';

/**
 * FormData 생성을 위한 유틸리티 함수
 *
 * @param options.jsonData - JSON 데이터를 담은 BlobPart
 * @param options.images - 이미지 파일을 담은 배열
 * @returns 생성된 FormData 객체
 */
export const getFormData = ({ jsonData, images }: GetFormDataProps) => {
  const formData = new FormData();

  formData.append(
    'request',
    new Blob([jsonData], { type: 'application/json' }),
  );

  images.forEach(image => formData.append('image', image));

  return formData;
};
