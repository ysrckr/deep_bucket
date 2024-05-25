import { Button } from '@/components/ui/Button';
import { get } from '@/lib/axios';

export const Login = () => {
  return (
    <div>
      <Button onClick={() => get('test')}>click</Button>
    </div>
  );
};
