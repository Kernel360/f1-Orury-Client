import TEAM from '@/constants/team';
import Kakao from '@/app/_components/buttons/Kakao';
import Title from '@/app/_components/common/Title';

async function Page() {
  return (
    <div className="flex pt-[8rem] flex-col justify-between h-screen bg-white">
      <div className="flex flex-col max-w-[480px] mx-auto">
        <Title />
        <span className="mx-auto text-xl font-semibold font-pretendard drop-shadow-xl">
          {TEAM.content}
        </span>
      </div>
      <div className="flex justify-center pb-[8rem] mx-4">
        <Kakao />
      </div>
    </div>
  );
}

export default Page;
