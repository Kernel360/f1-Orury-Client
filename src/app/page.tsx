import Title from '@/app/_components/ui/common/Title';
import NavigateBlock from '@/app/_components/ui/NavigateBlock';
import NAVIGATE_BLOCKS from '@/constants/ui/navigateBlock';
import Navbar from '@/app/_components/ui/common/Navbar';
import Announcement from '@/app/_components/home/Announcement';

function Home() {
  return (
    <main className="flex flex-col bg-white justify-between pb-16">
      <div>
        <Title />
        <Announcement />
        <div className="flex flex-wrap mx-4 gap-4 justify-between">
          {Object.values(NAVIGATE_BLOCKS).map(value => (
            <NavigateBlock key={value.title} blockProps={value} />
          ))}
        </div>
      </div>
      <Navbar />
    </main>
  );
}

export default Home;
