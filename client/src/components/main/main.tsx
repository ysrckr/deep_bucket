import React, { FC } from 'react';

import { cn } from '@/lib/utils';

type MainProps = {
  children: React.ReactNode;
};

export const Main: FC<MainProps> = ({ children }) => {
  return <main className={cn('container my-0 mx-auto')}>{children}</main>;
};
