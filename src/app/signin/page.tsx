import TEAM from '@/constants/team';
import Kakao from '@/app/_components/ui/buttons/Kakao';
import Title from '@/app/_components/ui/common/Title';

function Page() {
  return (
    <div className="flex pt-[4rem] flex-col justify-between h-screen">
      <div className="flex flex-col max-w-[480px] mx-auto">
        <Title />
        <span className="font-pretendard text-xl mx-auto drop-shadow-xl font-semibold">
          {TEAM.content}
        </span>
      </div>
      <div className="flex justify-center pb-[2rem] mx-4">
        <Kakao />
      </div>
    </div>
  );
}

export default Page;
