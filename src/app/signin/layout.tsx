import React from 'react';
import { rock_salt } from '../fonts';

function layout({ children }: { children: React.ReactNode }) {
  return <div className={rock_salt.variable}>{children}</div>;
}

export default layout;
