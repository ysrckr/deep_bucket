import React, { FC } from 'react';

type MainProps = {
  children: React.ReactNode;
};

export const Main: FC<MainProps> = ({ children }) => {
  return <main>{children}</main>;
};
