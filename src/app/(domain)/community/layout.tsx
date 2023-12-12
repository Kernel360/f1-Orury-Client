import SearchBar from '@/app/_components/community/SearchBar';
import Tabs from '@/app/_components/community/Tabs';
import Header from '@/app/_components/ui/common/Header';

function layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-white">
      <Header title="게시판" isBack />
      <Tabs />
      <SearchBar />
      {children}
    </div>
  );
}

export default layout;
