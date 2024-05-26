import { Outlet, createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/_private')({
  component: () => (
    <div>
      Private <Outlet />
    </div>
  ),
});
