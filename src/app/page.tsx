import Title from '@/app/ui/common/Title';
import NavigateBlock from '@/app/ui/NavigateBlock';
import NAVIGATE_BLOCKS from '@/constants/ui/navigateBlock';
import Navbar from '@/app/ui/common/Navbar';
import Notice from '@/app/_components/Notice';

function Home() {
  return (
    <main className="flex flex-col justify-between pb-16 bg-white">
      <div>
        <Title />
        <Notice />
        <div className="flex flex-wrap justify-between gap-4 mx-4">
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
