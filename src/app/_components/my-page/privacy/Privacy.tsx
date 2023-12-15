import { randomUUID } from 'crypto';
import Heading from '@/app/_components/my-page/Heading';
import Content from '@/app/_components/my-page/privacy/Content';
import { PrivacyProps } from '@/types/my-page/privacy';
import { GENDER, HEADLING_TITLE } from '@/constants/my-page/privacy';

function Privacy({ email, birthday, gender }: PrivacyProps) {
  const content = new Map();

  const getGender = (gender: number) => {
    if (gender === GENDER.man[0]) return GENDER.man[1];
    if (gender === GENDER.woman[0]) return GENDER.woman[1];

    return GENDER.none;
  };

  [email, birthday, getGender(gender)].forEach((list, idx) => {
    content.set(list, Object.values(HEADLING_TITLE)[idx]);
  });

  return (
    <section className="bg-white mt-4 shadow-xl">
      <Heading content="개인정보" />
      <ul className="flex flex-col gap-4 py-4">
        {Array.from(content.entries()).map(([content, title]) => (
          <Content key={randomUUID()} content={content} title={title} />
        ))}
      </ul>
    </section>
  );
}

export default Privacy;
