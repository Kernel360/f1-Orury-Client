import Image from 'next/image';
import { camera, add } from '$/write';

function PhotoBoothButton({
  id,
  onClick,
}: {
  id: string;
  onClick: () => void;
}) {
  return (
    <div className="w-full flex justify-end">
      <label
        htmlFor={id}
        className="w-16 h-16 bg-grey-100 border-dashed border-2 rounded-lg flex justify-center items-center bg-camera cursor-pointer"
      >
        <Image src={id === 'photo' ? camera : add} alt={`add ${id}`} />
      </label>
      <input
        type="file"
        id={id}
        multiple
        accept="image/*"
        capture={id === 'photo' ? 'environment' : undefined}
        onClick={onClick}
        className="hidden"
      />
    </div>
  );
}

export default PhotoBoothButton;
