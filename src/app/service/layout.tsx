import Navbar from '@/app/ui/common/Navbar';
import React from 'react';

function layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      {children}
      <Navbar />
    </div>
  );
}

export default layout;
