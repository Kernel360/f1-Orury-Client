'use client';

import Button from '@/app/_components/buttons/Button';
import TextInput from '@/app/_components/common/TextInput';
import useCommentStore from '@/store/community/commentStore';
import { useEffect, useState } from 'react';

function Content({ id, content }: { id: number; content: string }) {
  const { triggerModify, setCommentId, commentId } = useCommentStore();
  const [contentValue, setContentValue] = useState(content);
  const [isToggled, setIsToggled] = useState(false);
  const [isTriggered, setIsTriggered] = useState(triggerModify);
  const beforeValue = content;

  useEffect(() => {
    if (id === commentId) {
      setIsTriggered(isTriggered => !isTriggered);
    }
  }, [triggerModify, isToggled, id, commentId]);

  const inputHandler = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContentValue(event.target.value);
  };

  const cancelHandler = () => {
    setContentValue(beforeValue);
    setIsToggled(isToggled => !isToggled);
    setCommentId(id);
  };

  const clickHandler = () => {
    setIsToggled(isToggled => !isToggled);
    setCommentId(id);
  };

  return (
    <div>
      {isTriggered && (
        <div className="flex w-full relative justify-between gap-4 ">
          <TextInput
            placeholder={content}
            onChange={inputHandler}
            width="w-full"
          />

          <div className="flex gap-2 w-40">
            <Button
              content="취소"
              onClick={cancelHandler}
              color="black"
              outline
            />
            <Button content="변경" onClick={clickHandler} color="primary" />
          </div>
        </div>
      )}

      {!isTriggered && (
        <span
          className={`${isTriggered ? 'hidden' : 'block'}  flex items-center`}
        >
          {contentValue}
        </span>
      )}
    </div>
  );
}

export default Content;
