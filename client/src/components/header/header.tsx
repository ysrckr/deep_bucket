import { Button } from '../ui/Button';
import { FC } from 'react';
import { Link } from '@tanstack/react-router';
import { cn } from '@/lib/utils';

type HeaderProps = {
  isAuthenticated: boolean;
};

export const Header: FC<HeaderProps> = ({ isAuthenticated }) => {
  const linkStyle = cn('text-inherit', 'hover:text-gray-200');
  return (
    <header
      className={cn(
        'flex justify-between items-center px-8 py-8 mb-6 bg-blue-200 ',
      )}
    >
      <h1>
        <Link to="/" className={linkStyle}>
          Deep Bucket
        </Link>
      </h1>
      <menu className={cn('flex gap-4')}>
        {isAuthenticated ? (
          <Button>Logout</Button>
        ) : (
          <>
            <Button>
              <Link to="/signin" className={linkStyle}>
                Sign In
              </Link>
            </Button>
            <Button>
              <Link to="/signup" className={linkStyle}>
                Sign Up
              </Link>
            </Button>
          </>
        )}
      </menu>
    </header>
  );
};
