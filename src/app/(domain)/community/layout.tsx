import Header from '@/app/_components/ui/common/Header';
import HEADER from '@/constants/ui/common/header';

function layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-white">
      <Header title={HEADER.community} isBack />
      {children}
    </div>
  );
}

export default layout;
