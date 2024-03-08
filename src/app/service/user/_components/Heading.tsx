import { HeadingProps } from '@/types/user/privacy';

function Heading({ content }: HeadingProps) {
  return (
    <h2 className="border-b-2 border-purple-200 font-bold py-4 mx-4">
      {content}
    </h2>
  );
}

export default Heading;
