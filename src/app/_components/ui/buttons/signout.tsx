'use client';

import { signOut } from 'next-auth/react';

function Signout() {
  return (
    <button type="button" onClick={() => signOut()}>
      <span className="text-red font-semibold">로그아웃</span>
    </button>
  );
}

export default Signout;
