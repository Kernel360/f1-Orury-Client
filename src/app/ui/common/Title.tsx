import TEAM from '@/constants/team';
import { rock } from '@/app/ui/fonts';

function Title() {
  return (
    <span
      className={`${rock.className} text-[20px] px-auto drop-shadow-xl mb-4 sm:text-[2rem] text-white bg-purple-800 text-center sm:h-12 h-8 flex justify-center items-center shadow-2xl`}
    >
      {TEAM.title}
    </span>
  );
}

export default Title;
