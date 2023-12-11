import Tabs from '@/app/_components/community/Tabs';
import Header from '@/app/ui/common/Header';

function layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-white">
      <Header title="게시판" isBack />
      <Tabs />
      {children}
    </div>
  );
}

export default layout;
