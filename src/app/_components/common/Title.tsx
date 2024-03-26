import TEAM from '@/constants/team';
import { rock } from '@/styles/fonts';

function Title({ primary }: { primary?: boolean }) {
  return (
    <span
      className={`${rock.className} text-2xl ${primary ? 'text-primary' : 'text-white'} px-auto drop-shadow-xl my-4 sm:text-[2rem] text-center sm:h-16 h-10 flex justify-center items-center text-bold`}
    >
      {TEAM.title}
    </span>
  );
}

export default Title;
