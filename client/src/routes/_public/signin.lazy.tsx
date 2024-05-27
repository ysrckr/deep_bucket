import { createLazyFileRoute } from '@tanstack/react-router';

export const Route = createLazyFileRoute('/_public/signin')({
  component: Signin,
});

function Signin() {
  return (
    <section>
      <form>
        <div>
          <label htmlFor="email">
            Email<span className="text-red-500">*</span>:
          </label>
          <input id="email" name="email" type="email" />
        </div>
        <div>
          <label htmlFor="password">
            Password<span className="text-red-500">*</span>:
          </label>
          <input id="password" name="password" type="password" />
        </div>
        <button type="submit">Sign In</button>
      </form>
    </section>
  );
}
