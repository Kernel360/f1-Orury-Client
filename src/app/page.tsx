import Title from '@/app/ui/common/Title';
import NavigateBlock from '@/app/ui/NavigateBlock';
import NAVIGATE_BLOCKS from '@/constants/ui/navigateBlock';
import Navbar from '@/app/ui/common/Navbar';

function Home() {
  return (
    <main className="flex flex-col h-screen bg-white justify-between">
      <div>
        <Title />
        <div className="flex flex-wrap mx-4 gap-4 justify-between">
          {Object.values(NAVIGATE_BLOCKS).map((value, index) => (
            <NavigateBlock key={index} props={value} />
          ))}
        </div>
        <Navbar />
      </div>
    </main>
  );
}

export default Home;
