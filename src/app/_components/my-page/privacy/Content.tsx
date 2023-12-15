import { ContentProps } from '@/types/my-page/privacy';

function Content({ ...props }: ContentProps) {
  return (
    <li className="flex mx-4">
      <span className="sm:min-w-[6rem] min-w-[4rem] font-extralight">
        {props.title}
      </span>
      <span>{props.content}</span>
    </li>
  );
}

export default Content;
