import React, { FC } from 'react';

import { cn } from '@/lib/utils';

type MainProps = {
  children: React.ReactNode;
};

export const Main: FC<MainProps> = ({ children }) => {
  return <main className={cn('max-w-7xl my-0 mx-auto')}>{children}</main>;
};
