'use client';

import Banner from '@/app/sign-up/_components/Banner';
import SignUpForm from '@/app/sign-up/_components/SignUpForm';
import TosModal from '@/app/sign-up/_components/TosModal';

import { useState } from 'react';

function Page() {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenModal = () => setIsOpen(isOpen => !isOpen);

  return (
    <section className="flex flex-col justify-between bg-white h-full mb-safe">
      <Banner />
      <SignUpForm handleOpenModal={handleOpenModal} />
      {isOpen && <TosModal handleOpenModal={handleOpenModal} />}
    </section>
  );
}

export default Page;
