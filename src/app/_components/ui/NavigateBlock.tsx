import clsx from 'clsx';
import Link from 'next/link';
import Image from 'next/image';
import { NavigateBlockProps } from '@/types/ui/navigateBlock';
import { giants } from '@/app/_components/ui/fonts';

function NavigateBlock({ blockProps }: { blockProps: NavigateBlockProps }) {
  const { href, src, sub, title, index } = blockProps;

  return (
    <Link href={href} className={clsx(index ? 'w-[calc(50%-8px)]' : 'w-full')}>
      <div
        className={clsx(
          `flex relative shadow-main rounded-2xl p-4 ${
            index ? 'h-[18rem] sm:h-[24rem]' : 'h-[13rem] sm:h-[18rem]'
          }`,
          {
            'bg-primary': index === 0,
            'bg-red': index === 1,
            'bg-green': index === 2,
          },
        )}
      >
        <Image src={src} alt={title} className="absolute right-0 bottom-4" />
        <div className={`${giants.className} flex flex-col justify-start`}>
          <span className="text-xl sm:text-2xl text-grey-200">{sub}</span>
          <span className="text-2xl sm:text-3xl text-white">{title}</span>
        </div>
      </div>
    </Link>
  );
}

export default NavigateBlock;
