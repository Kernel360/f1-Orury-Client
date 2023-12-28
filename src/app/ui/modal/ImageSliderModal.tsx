import ImageCarousel from '@/app/ui/common/ImageCarousel';
import { ImageSliderModalProps } from '@/types/ui/modal/ImageSliderModal';

function ImageSliderModal({ images, onCloseModal }: ImageSliderModalProps) {
  return (
    <div className="z-[100] flex items-center justify-center absolute w-full h-screen">
      {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
      <button
        type="button"
        className="absolute w-full h-full bg-[rgba(0,0,0,80%)]"
        onClick={onCloseModal}
      />
      <ImageCarousel images={images} />
    </div>
  );
}

export default ImageSliderModal;
