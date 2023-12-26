import { BIRTHDAY_INPUT } from '@/constants/signup';
import Image from 'next/image';

function Check({ isChecked }: { isChecked?: boolean }) {
  const { checked, unChecked, alt } = BIRTHDAY_INPUT;

  return (
    <Image
      src={isChecked ? checked : unChecked}
      sizes="20"
      alt={alt}
      priority
    />
  );
}

export default Check;
