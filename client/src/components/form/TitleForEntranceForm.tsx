import { appName } from '@/lib/constants';
import { cn } from '@/lib/utils';

export const TitleForEntranceForm = () => {
  const pageName = document.title.split(' | ').pop() || '';
  return (
    <div className={cn('flex flex-col gap-4 items-center justify-center mb-6')}>
      {' '}
      <img
        src="/bucket.svg"
        alt="logo"
        width={80}
        className={cn('inline-block')}
      />
      <h2
        className={cn('text-lg text-center font-semibold')}
      >{`${pageName} To ${appName}`}</h2>
    </div>
  );
};
