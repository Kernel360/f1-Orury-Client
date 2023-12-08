import React from 'react';
import Navbar from '@/app/ui/common/Navbar';

function layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div>{children}</div>
      <Navbar />
    </>
  );
}

export default layout;
