import ImageCarousel from '@/app/_components/common/ImageCarousel';
import { X } from 'lucide-react';
import { COLOR } from '@/styles/color';
import type { ImageSliderModalProps } from '@/types/ui/modal/ImageModal';

function ImageSliderModal({
  isOpen,
  images,
  onCloseModal,
}: ImageSliderModalProps) {
  if (!isOpen) return;

  return (
    <div className="z-[9999] flex items-center justify-center absolute w-full h-screen">
      {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
      <button
        type="button"
        className="absolute w-full h-full bg-[rgba(0,0,0,80%)]"
        onClick={onCloseModal}
      />
      <X
        stroke={COLOR.gray}
        onClick={onCloseModal}
        size="52"
        className="cursor-pointer absolute z-[102] top-3 right-3"
      />
      <ImageCarousel images={images} />
    </div>
  );
}

export default ImageSliderModal;
