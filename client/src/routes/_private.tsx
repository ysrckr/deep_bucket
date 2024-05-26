import { Outlet, createFileRoute } from '@tanstack/react-router';

import { Main } from '@/components/main/main';

export const Route = createFileRoute('/_private')({
  component: () => (
    <Main>
      Private <Outlet />
    </Main>
  ),
});
