import Header from '@/app/ui/common/Header';
import HEADER from '@/constants/ui/common/header';

function layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-white h-screen">
      <Header title={HEADER.community} isBack />
      {children}
    </div>
  );
}

export default layout;
