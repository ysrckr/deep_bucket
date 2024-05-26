import { createLazyFileRoute } from '@tanstack/react-router';

export const Route = createLazyFileRoute('/_public/signup')({
  component: Signup,
});

function Signup() {
  return <section>
    <form action=""></form>
  </section>;
}

