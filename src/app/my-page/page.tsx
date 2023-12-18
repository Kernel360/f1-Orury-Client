import React from 'react';
import mypage from '@/lib/myPage.json';
import Header from '@/app/_components/ui/common/Header';
import HEADER from '@/constants/ui/common/header';
import Signout from '@/app/_components/ui/buttons/Signout';
import {
  Profile,
  Privacy,
  Activity,
  Withdrawal,
} from '@/app/_components/my-page';

function page() {
  const { data } = mypage;
  return (
    <div>
      <Header title={HEADER.myPage} isBack />
      <Profile {...data} />
      <Privacy
        email={data.email}
        birthday={data.birthday}
        gender={data.gender}
      />
      <Activity />
      <section className="bg-white mt-4 p-4 shadow-xl">
        <Signout />
        <Withdrawal />
      </section>
    </div>
  );
}

export default page;
