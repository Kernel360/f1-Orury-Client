import React from 'react';
import {
  Profile,
  Privacy,
  Activity,
  Withdrawal,
} from '@/app/service/my-page/_components/index';
import { profileMock } from '@/__mock__/data/profile.mock';
import SignOut from '@/app/_components/buttons/SignOut';

function page() {
  const data = profileMock;

  return (
    <div>
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
