import { Outlet, createFileRoute } from '@tanstack/react-router';

import { Main } from '@/components/main/main';

export const Route = createFileRoute('/_public')({
  component: () => (
    <Main>
      Hello /_public! <Outlet />
    </Main>
  ),
});
