import { notice, bar } from '$/index';
import Image from 'next/image';

function Notice() {
  return (
    <div className="flex items-center h-8 gap-3 px-2 mx-4 mb-4 text-xs rounded-lg shadow-main">
      <Image src={notice} alt={notice} />
      <Image src={bar} alt={bar} />
      <span className="ellipsis">
        서버에서 받아온 공지사항 타이틀이 길어지면 ellipsis 처리가 됩니다.
      </span>
    </div>
  );
}

export default Notice;
