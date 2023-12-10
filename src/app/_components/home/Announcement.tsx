import { announce, bar } from '$/index';
import Image from 'next/image';

function Announcement() {
  return (
    <div className="flex h-8 mx-4 mb-4 shadow-main rounded-lg items-center px-2 gap-3 text-xs">
      <Image src={announce} alt={announce} />
      <Image src={bar} alt={bar} />
      <span className="text-ellipsis whitespace-nowrap overflow-hidden">
        서버에서 받아온 공지사항 타이틀이 길어지면 ellipsis 처리가 됩니다.
      </span>
    </div>
  );
}

export default Announcement;
