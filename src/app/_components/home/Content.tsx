import TEAM from '@/constants/team';
import { giants } from '@/styles/fonts';

function Content() {
  const { content, sub1, sub2 } = TEAM;

  return (
    <span
      className={`${giants.className} mx-auto text-2xl text-white drop-shadow-xl text-left leading-10`}
    >
      {content}
      <br />
      {sub1}
      <br />
      {sub2}
    </span>
  );
}

export default Content;
