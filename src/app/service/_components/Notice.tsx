import { Megaphone, Tally1 } from 'lucide-react';

function Notice() {
  return (
    <div className="flex items-center h-8 gap-3 px-2 mx-4 mb-4 text-xs rounded-lg shadow-main">
      <Megaphone color="#855AFF" />
      <Tally1 color="#96A2AC" strokeWidth={0.5} />
      <span className="ellipsis">
        서버에서 받아온 공지사항 타이틀이 길어지면 ellipsis 처리가 됩니다.
      </span>
    </div>
  );
}

export default Notice;
