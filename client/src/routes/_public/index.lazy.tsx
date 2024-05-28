import { cn } from '@/lib/utils';
import { createLazyFileRoute } from '@tanstack/react-router';

export const Route = createLazyFileRoute('/_public/')({
  component: Home,
});

function Home() {
  return <section className={cn('bg-red-300 p-4')}>Home</section>;
}
