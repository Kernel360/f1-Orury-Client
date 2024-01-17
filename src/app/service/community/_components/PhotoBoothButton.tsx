import Image from 'next/image';

import { useState } from 'react';
import { v4 } from 'uuid';
import { Plus } from 'lucide-react';
import type { PhotoBoothButtonProps } from '@/types/community/photoBooth';

function PhotoBoothButton({ ...props }: PhotoBoothButtonProps) {
  const { id, onClick } = props;
  const [selectedImages, setSelectedImages] = useState<string[]>([]);

  const renderImages = () => {
    return selectedImages.map((image, index) => (
      <div key={v4()} className="w-16 h-16 sm:w-32 sm:h-32 mr-2 relative">
        <Image
          src={image}
          alt={`selected-image-${index}`}
          className="rounded-lg"
          fill
        />
      </div>
    ));
  };

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { files } = event.target;

    if (files) {
      const newImages = Array.from(files, file => {
        return URL.createObjectURL(file);
      });
      setSelectedImages(prevImages => [...prevImages, ...newImages]);
    }
  };

  return (
    <div className="w-full flex justify-end">
      {renderImages()}
      <label
        htmlFor={id}
        className="w-16 h-16 sm:w-32 sm:h-32 bg-grey-100 border-dashed border-2 rounded-lg flex justify-center items-center bg-camera cursor-pointer"
      >
        <Plus />
      </label>
      <input
        type="file"
        id={id}
        multiple
        accept="image/*"
        capture={id === 'photo' ? 'environment' : undefined}
        onClick={onClick}
        onChange={handleImageChange}
        className="hidden"
      />
    </div>
  );
}

export default PhotoBoothButton;
