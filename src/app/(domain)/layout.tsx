import React from 'react';
import Navbar from '@/app/ui/common/Navbar';

function layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <Navbar />
    </>
  );
}

export default layout;
