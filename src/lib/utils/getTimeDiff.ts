import {
  TIME_DIFF,
  TIME_THRESHOLD,
  MILLI_SECONDS,
  DAYS,
} from '@/constants/utils/getTimeDiff';

function getTimeDiff(time: string) {
  const currentTime = new Date().getTime(); // 현재 시각
  const publishedTime = new Date(time).getTime(); // 글 게시 시각
  const timeDiff = currentTime - publishedTime; // 밀리초 단위의 차이

  // 밀리초를 분, 시간, 일로 변환
  const diffInMinutes = Math.floor(timeDiff / MILLI_SECONDS.byMinute);
  const diffInHours = Math.floor(timeDiff / MILLI_SECONDS.byHour);
  const diffInDays = Math.floor(timeDiff / MILLI_SECONDS.byDay);

  switch (true) {
    case diffInMinutes < TIME_THRESHOLD.minute:
      return TIME_DIFF.now;
    case diffInMinutes < TIME_THRESHOLD.hour:
      return `${diffInMinutes}${TIME_DIFF.minute}`;
    case diffInHours < TIME_THRESHOLD.day:
      return `${diffInHours}${TIME_DIFF.hour}`;
    case diffInDays < TIME_THRESHOLD.month:
      return `${diffInDays}${TIME_DIFF.day}`;
    case diffInDays < TIME_THRESHOLD.year:
      return `${Math.floor(diffInDays / DAYS.byMonth)}${TIME_DIFF.month}`;
    default:
      return `${Math.floor(diffInDays / DAYS.byYear)}${TIME_DIFF.year}`;
  }
}

export default getTimeDiff;
