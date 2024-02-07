'use client';

import Loading from '@/app/service/loading';
import Header from '@/app/_components/common/Header';
import SignOut from '@/app/_components/buttons/SignOut';
import UserPostsModal from '@/app/service/user/_components/UserPostsModal';
import UserCommentsModal from '@/app/service/user/_components/UserCommentsModal';
import ReviewModalContainer from '@/app/_components/review/review-modal/ReviewModalContainer';

import { useEffect, useState } from 'react';
import { getUserData } from '@/app/service/user/api/getUserData';
import { UserProps } from '@/types/user';
import {
  Profile,
  Privacy,
  Activity,
  Withdrawal,
} from '@/app/service/user/_components/index';
import { ACTIVITY_LIST } from '@/constants/my-page/activity';

function Page() {
  const { post, comment, review } = ACTIVITY_LIST;
  const [userData, setUserData] = useState<UserProps>();
  const [state, setState] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      await getUserData().then(response => setUserData(response));
    };

    fetchData();
  }, []);

  const handleExit = () => setState('');

  const getHeaderTitle = (state: string) => {
    if (state === 'post') return post;
    if (state === 'comment') return comment;
    return review;
  };

  if (!userData) return <Loading />;

  return (
    <div className="relative">
      {state && (
        <Header title={getHeaderTitle(state)} isExit exitHandler={handleExit} />
      )}
      <Profile {...userData} />
      <Privacy
        email={userData.email}
        birthday={userData.birthday}
        gender={userData.gender}
      />
      <Activity setState={setState} />
      <section className="bg-white mt-4 p-4 shadow-xl">
        <SignOut />
        <Withdrawal />
      </section>
      <section>
        {state === 'post' && (
          <UserPostsModal
            user_profile_image={userData.profile_image}
            user_nickname={userData.nickname}
            user_id={userData.id}
          />
        )}
        {state === 'comment' && (
          <UserCommentsModal
            user_profile_image={userData.profile_image}
            user_nickname={userData.nickname}
            user_id={userData.id}
          />
        )}
        <ReviewModalContainer
          isMyPage={state === 'review'}
          openPosition="right"
        />
      </section>
    </div>
  );
}

export default Page;
