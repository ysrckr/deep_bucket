import { createLazyFileRoute } from '@tanstack/react-router';

export const Route = createLazyFileRoute('/_public/')({
  component: () => <div>Hello /!</div>,
});
