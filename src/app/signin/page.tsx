import TEAM from '@/constants/team';
import Kakao from '@/app/ui/buttons/Kakao';
import Title from '@/app/ui/common/Title';

async function Page() {
  return (
    <div className="flex pt-[4rem] flex-col justify-between h-screen">
      <div className="flex flex-col max-w-[480px] mx-auto">
        <Title />
        <span className="mx-auto text-xl font-semibold font-pretendard drop-shadow-xl">
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
