'use client';

import { signOut } from 'next-auth/react';

function Signout() {
  return (
    <button type="button" onClick={() => signOut()}>
      로그아웃
    </button>
  );
}

export default Signout;
