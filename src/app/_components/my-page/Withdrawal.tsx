'use client';

import { useState } from 'react';
import { WITHDRAWAL_MODAL } from '@/constants/my-page/withdrawal';
import Modal from '@/app/_components/ui/common/Modal';
import { signOut } from 'next-auth/react';

function Withdrawal() {
  const [isClicked, setIsClicked] = useState(false);

  const clickHandler = () => {
    setIsClicked(isClicked => !isClicked);
  };

  return (
    <div className="mt-4 text-red font-semibold pb-16 sm:pb-0">
      <button type="button" onClick={clickHandler}>
        회원 탈퇴
      </button>
      {isClicked && (
        <Modal
          title={WITHDRAWAL_MODAL.title}
          content={WITHDRAWAL_MODAL.content}
          cancelHandler={clickHandler}
          okHandler={() => signOut({ callbackUrl: '/' })}
        />
      )}
    </div>
  );
}

export default Withdrawal;
