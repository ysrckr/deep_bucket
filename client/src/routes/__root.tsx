import { Outlet, createRootRoute } from '@tanstack/react-router';
import { cn, setPageTitle } from '@/lib/utils';

import { Header } from '@/components/header';
import { TanStackRouterDevtools } from '@tanstack/router-devtools';

export const Route = createRootRoute({
  component: Root,
});

function Root() {
  const path =
    window.location.pathname.split('/').pop()?.split('-').join(' ') || 'Home';

  setPageTitle(path);
  return (
    <div className={cn('my-0, mx-auto w-full')}>
      <Header isAuthenticated={false} />
      <Outlet />
      <TanStackRouterDevtools />
    </div>
  );
}
