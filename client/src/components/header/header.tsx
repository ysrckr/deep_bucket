import { FC } from 'react';

type HeaderProps = {
  isAuthenticated: boolean;
};

export const Header: FC<HeaderProps> = ({ isAuthenticated }) => {
  return (
    <header>
      <h1>Header</h1>
      {isAuthenticated ? (
        <button>Logout</button>
      ) : (
        <>
          <button>Sign In</button>
          <button>Sign Up</button>
        </>
      )}
    </header>
  );
};
