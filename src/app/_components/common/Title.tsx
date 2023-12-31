import TEAM from '@/constants/team';
import { rock } from '@/styles/fonts';

function Title() {
  return (
    <span
      className={`${rock.className} text-[20px] px-auto drop-shadow-xl my-4 sm:text-[2rem] text-center sm:h-16 h-10 flex justify-center items-center `}
    >
      {TEAM.title}
    </span>
  );
}

export default Title;
