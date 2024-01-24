import { ACTIVITY_TITLE, ACTIVITY_LIST } from '@/constants/my-page/activity';
import { randomUUID } from 'crypto';
import { ChevronRight } from 'lucide-react';

import Link from 'next/link';
import Heading from '@/app/service/my-page/_components/Heading';

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
            <ChevronRight color="#96A2AC" strokeWidth={1.5} />
          </Link>
        ))}
      </div>
    </section>
  );
}

export default Activity;
