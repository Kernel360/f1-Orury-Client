import { write } from '$/community';
import Image from 'next/image';
import Link from 'next/link';

function Floating() {
  return (
    <Link
      href="/write"
      className="flex justify-center items-center sticky bottom-[64px] float-right mr-4 w-12 h-12 bg-primary rounded-full"
    >
      <Image src={write} alt="작성" />
    </Link>
  );
}

export default Floating;
