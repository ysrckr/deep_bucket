import { Outlet, createRootRoute } from '@tanstack/react-router';

import { Header } from '@/components/header';
import { TanStackRouterDevtools } from '@tanstack/router-devtools';
import { cn } from '@/lib/utils';

export const Route = createRootRoute({
  component: () => (
    <div className={cn('my-0, mx-auto w-full')}>
      <Header isAuthenticated={false} />
      <Outlet />
      <TanStackRouterDevtools />
    </div>
  ),
});
