'use client';

import { TosProps } from '@/types/sign-up';

function TosSummary({ handleOpenModal }: TosProps) {
  return (
    <div className="text-center text-xs sm:text-sm leading-5">
      <span>회원 가입 버튼을 누르면 </span>
      <button type="button" onClick={handleOpenModal} className="underline">
        이용 약관 및 개인정보 수집 및 이용
      </button>
      <span>에 동의하신 것으로 간주합니다.</span>
    </div>
  );
}

export default TosSummary;
