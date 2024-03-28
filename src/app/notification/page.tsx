'use client';

import Header from '@/app/_components/common/Header';
import Card from '@/app/notification/_components/Card';
import useIntersect from '@/hooks/common/useIntersection';
import useNotificationListApi from '@/hooks/notification/useNotificationList';

function Page() {
  const { data, size, setSize, isValidating } =
    useNotificationListApi.useGetNotificationList();

  const notificationList = data
    ? data.flatMap(page => page.data.data.content)
    : [];

  const bottomRef = useIntersect(() => {
    if (!isValidating && data && !data[data.length - 1]?.data.data.last) {
      setSize(size + 1);
    }
  });

  return (
    <section>
      <Header title="알림" isBack />
      <div className="bg-grey-50 h-[calc(100vh-48px)] pt-2">
        {Object.values(notificationList).map(value => (
          <Card key={value.id} {...value} />
        ))}
      </div>
      <div ref={bottomRef} />
    </section>
  );
}

export default Page;
