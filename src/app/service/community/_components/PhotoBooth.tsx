'use client';

import { v4 } from 'uuid';
import { useMemo, useState } from 'react';
import { Plus, XCircle } from 'lucide-react';
import { PhotoBoothProps } from '@/types/community/photoBooth';
import { useToast } from '@/app/_components/ui/use-toast';

import Image from 'next/image';

function PhotoBooth({ ...props }: PhotoBoothProps) {
  const [isImageLengthFull, setIsImageLengthFull] = useState(false);
  const { images, setImages } = props;
  const { toast } = useToast();

  const handleRemoveImage = (index: number) => {
    const newImages = [...images];

    newImages.splice(index, 1);
    setImages(newImages);
  };

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { files } = event.target;

    if (files && files.length <= 5) {
      const newImages = Array.from(files);

      setImages(prevImages => [...prevImages, ...newImages]);
    } else {
      toast({
        title: '이미지 초과',
        description: '이미지는 최대 5장까지 업로드할 수 있습니다.',
      });
    }
  };

  useMemo(() => {
    if (images.length > 5) {
      setImages(prevImages => prevImages.splice(0, 5));
      toast({
        title: '이미지 초과',
        description: '이미지는 최대 5장까지 업로드할 수 있습니다.',
      });
    }
    if (images.length === 5) setIsImageLengthFull(true);
    else setIsImageLengthFull(false);
  }, [images.length, setImages, toast]);

  return (
    <div className="w-full flex justify-between ml-auto">
      <ul className="flex gap-5">
        {images.map((image, index) => (
          <li key={v4()} className="w-16 h-16 sm:w-32 sm:h-32 relative">
            <Image
              src={URL.createObjectURL(image)}
              alt={`selected-image-${index}`}
              className="rounded-lg"
              fill
            />
            <button
              type="button"
              onClick={() => handleRemoveImage(index)}
              className="absolute right-[-8px] top-[-8px]"
            >
              <XCircle size={20} color="#ffffff" fill="000" />
            </button>
          </li>
        ))}
      </ul>
      {!isImageLengthFull && (
        <div className="flex justify-end ml-auto">
          <label
            htmlFor="photo"
            className="w-16 h-16 sm:w-32 sm:h-32 bg-grey-100 border-dashed border-2 rounded-lg flex justify-center items-center bg-camera cursor-pointer"
          >
            <Plus />
          </label>
          <input
            type="file"
            id="photo"
            multiple
            accept="image/*"
            onChange={handleImageChange}
            className="hidden"
          />
        </div>
      )}
    </div>
  );
}

export default PhotoBooth;
