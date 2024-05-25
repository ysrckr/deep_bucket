import { Button } from '@/components/ui/Button';
import { get } from '@/lib/axios';
import { useState } from 'react';

export const Login = () => {
  const [message, setMessage] = useState<string>('');
  return (
    <div>
      <Button
        onClick={async () => {
          const res = await get('hello/test');
          const message = res?.data?.message;
          setMessage(message);
        }}
      >
        click
      </Button>
      <p>{message}</p>
    </div>
  );
};
