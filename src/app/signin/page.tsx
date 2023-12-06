import TEAM from '@/constants/team';
import Kakao from '../ui/buttons/Kakao';

function page() {
  return (
    <div className="flex pt-[4rem] flex-col justify-between h-screen">
      <div className="flex flex-col gap-8 max-w-[480px] mx-auto">
        <span className="font-rock text-[3rem] mx-auto drop-shadow-xl ">
          {TEAM.title}
        </span>
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

export default page;
