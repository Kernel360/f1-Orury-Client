import React from 'react';
import Header from '@/app/_components/common/Header';
import HEADER from '@/constants/ui/common/header';
import {
  Profile,
  Privacy,
  Activity,
  Withdrawal,
} from '@/app/service/my-page/_components';
import { profileMock } from '@/__mock__/data/profile.mock';
import SignOut from '@/app/_components/buttons/SignOut';

function page() {
  const data = profileMock;

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
        <SignOut />
        <Withdrawal />
      </section>
    </div>
  );
}

export default page;
