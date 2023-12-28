import type { ImageModalProps } from '@/types/ui/modal/ImageModal';
import Image from 'next/image';

function ImageModal({ image, onCloseModal }: ImageModalProps) {
  const width = window.outerWidth;
  return (
    <div className="z-[100] flex items-center justify-center absolute w-full h-screen">
      {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
      <button
        type="button"
        className="absolute w-full h-full bg-[rgba(0,0,0,80%)]"
        onClick={onCloseModal}
      />
      <Image
        className="z-[101]"
        src={image}
        alt={image}
        width={width}
        height={width}
      />
    </div>
  );
}

export default ImageModal;
