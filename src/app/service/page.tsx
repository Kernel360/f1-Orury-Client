import Link from 'next/link';
import CALLBACK_URL from '@/constants/url';
import Title from '@/app/_components/common/Title';
import Navbar from '@/app/_components/common/Navbar';
import Notice from '@/app/service/_components/Notice';
import NAVIGATE_BLOCKS from '@/constants/ui/navigateBlock';
import NavigateBlock from '@/app/service/_components/NavigateBlock';

import { Bell } from 'lucide-react';

function Page() {
  return (
    <main className="flex flex-col justify-between pb-16 bg-white">
      <section className="flex justify-between items-center px-4">
        <Title primary />
        <Link href={CALLBACK_URL.notification}>
          <Bell strokeWidth={2.5} />
        </Link>
      </section>
      <Notice />
      <div className="flex flex-wrap justify-between gap-4 mx-4">
        {Object.values(NAVIGATE_BLOCKS).map(value => (
          <NavigateBlock key={value.title} {...value} />
        ))}
      </div>
      <Navbar />
    </main>
  );
}

export default Page;
