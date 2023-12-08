import React from 'react';

function Layout({ children }: { children: React.ReactNode }) {
  return <div className="h-screen bg-white px-4">{children}</div>;
}

export default Layout;
