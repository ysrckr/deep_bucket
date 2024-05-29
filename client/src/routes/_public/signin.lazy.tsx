import { Button } from '@/components/ui/Button';
import { FieldInfo } from '@/components/form/fieldInfo';
import { Input } from '@/components/ui/Input';
import { TitleForEntranceForm } from '@/components/form/TitleForEntranceForm';
import { cn } from '@/lib/utils';
import { createLazyFileRoute } from '@tanstack/react-router';
import { useForm } from '@tanstack/react-form';
import { z } from 'zod';
import { zodValidator } from '@tanstack/zod-form-adapter';

export const Route = createLazyFileRoute('/_public/signin')({
  component: Signin,
});

export interface SignInForm {
  username: string;
  password: string;
}

function Signin() {
  const { Field, handleSubmit } = useForm<SignInForm, typeof zodValidator>({
    defaultValues: {
      username: '',
      password: '',
    },
    validatorAdapter: zodValidator,
    onSubmit: async ({ value }) => {
      console.log(value);
    },
  });
  return (
    <section className={cn('flex justify-center items-center')}>
      <div
        className={cn(
          'flex justify-center items-center flex-col gap-4 mt-8 bg-white rounded-lg shadow-lg w-full max-w-lg  p-4 lg:max-w-2xl lg:p-8',
        )}
      >
        <TitleForEntranceForm />
        <form
          onSubmit={e => {
            e.preventDefault();
            e.stopPropagation();
            handleSubmit();
          }}
          className={cn('flex flex-col gap-4  w-full')}
        >
          <div className={cn('grid gap-4 grid-cols-1 w-full')}>
            <Field
              name="username"
              validators={{
                onChange: z.string().min(3, {
                  message: 'Username must be at least 3 characters',
                }),
              }}
              children={field => (
                <div className={cn('flex flex-col gap-2')}>
                  <Input
                    type="text"
                    label="Username"
                    id={field.name}
                    name={field.name}
                    value={field.state.value}
                    onBlur={field.handleBlur}
                    onChange={e => field.handleChange(e.target.value)}
                    isRequired
                  />
                  <FieldInfo field={field} />
                </div>
              )}
            />

            <Field
              name="password"
              validators={{
                onChange: z
                  .string()
                  .min(8, {
                    message: 'Password must be at least 8 characters',
                  })
                  .max(100, {
                    message: 'Password must be at most 100 characters',
                  })
                  .refine(value => {
                    return /[A-Z]/.test(value) &&
                      /[a-z]/.test(value) &&
                      /\d/.test(value) &&
                      /\W/.test(value)
                      ? true
                      : 'Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character';
                  }),
              }}
              children={field => (
                <div className={cn('flex flex-col gap-2')}>
                  <Input
                    type="password"
                    label="Password"
                    id={field.name}
                    name={field.name}
                    value={field.state.value}
                    onBlur={field.handleBlur}
                    onChange={e => field.handleChange(e.target.value)}
                    isRequired
                  />
                  <FieldInfo field={field} />
                </div>
              )}
            />
          </div>

          <Button type="submit">Submit</Button>
        </form>
      </div>
    </section>
  );
}
