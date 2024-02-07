import Image from 'next/image';
import { X } from 'lucide-react';
import { COLOR } from '@/styles/color';
import { useImageStore } from '@/store/modal/imageModalStore';

function ImageModal() {
  let width = 0;

  if (typeof window !== 'undefined') {
    width = window.outerWidth;
  }
  const { image, isOpen, setModalClose } = useImageStore(state => state);

  if (!isOpen || typeof image !== 'string') return;

  return (
    <div className="z-[9999] flex items-center justify-center absolute w-full h-screen">
      {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
      <button
        type="button"
        className="absolute w-full h-full bg-[rgba(0,0,0,80%)]"
        onClick={() => setModalClose()}
      />
      <X
        stroke={COLOR.gray}
        onClick={() => setModalClose()}
        size="52"
        className="cursor-pointer absolute z-[102] top-3 right-3"
      />
      <Image
        className="z-[101]"
        src={image as string}
        alt={image as string}
        width={width}
        height={width}
      />
    </div>
  );
}

export default ImageModal;
