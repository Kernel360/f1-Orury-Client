import type { ReviewProps } from '@/types/map/ReviewProps';

/**
 * @description 지도 위에 띄위기 위해서 Modal로 구현을 합니다.
 * @param onCloseModal 해당 Modal을 닫기 위한 함수입니다.
 * @param isOpen 해당 Modal의 열림 여부를 나타냅니다.
 */
function ReviewModal({ onCloseModal, isOpen }: ReviewProps) {
  return <button type="button" onClick={onCloseModal}>{isOpen}</button>;
}

export default ReviewModal;
