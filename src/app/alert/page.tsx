import Card from '@/app/alert/_components/Card';
import Header from '@/app/_components/common/Header';

import { v4 } from 'uuid';
import { alertMock } from '@/__mock__/data/alert.mock';

function page() {
  return (
    <section>
      <Header title="알림" isBack />
      <div className="bg-grey-50 h-[calc(100vh-48px)] pt-2">
        {Object.values(alertMock).map(value => (
          <Card key={v4()} {...value} />
        ))}
      </div>
    </section>
  );
}

export default page;
