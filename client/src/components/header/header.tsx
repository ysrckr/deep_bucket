import { FC } from 'react';
import { Link } from '@tanstack/react-router';

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
          <button>
            <Link to="/signup">Sign Up</Link>
          </button>
        </>
      )}
    </header>
  );
};
