import Link from 'next/link';
import Image from 'next/image';
import Heading from '@/app/_components/my-page/Heading';
import { right } from '$/my-page';
import { ACTIVITY_TITLE, ACTIVITY_LIST } from '@/constants/my-page/activity';
import { randomUUID } from 'crypto';

function Activity() {
  return (
    <section className="mt-4 bg-white shadow-xl">
      <Heading content={ACTIVITY_TITLE} />
      <div className="flex flex-col pb-4 pt-2 mx-4">
        {Object.values(ACTIVITY_LIST).map(value => (
          <Link
            key={randomUUID()}
            className="flex justify-between py-4"
            href={value.href}
          >
            {value.content}
            <Image src={right} alt="바로가기" />
          </Link>
        ))}
      </div>
    </section>
  );
}

export default Activity;
