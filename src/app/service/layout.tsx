import Navbar from '@/app/ui/common/Navbar';
import React from 'react';

function layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <Navbar />
    </>
  );
}

export default layout;
