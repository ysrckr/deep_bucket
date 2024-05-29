import { Button } from '@/components/ui/Button';
import { FieldInfo } from '@/components/form/fieldInfo';
import { Input } from '@/components/ui/Input';
import { TitleForEntranceForm } from '@/components/TitleForEntranceForm';
import { cn } from '@/lib/utils';
import { createLazyFileRoute } from '@tanstack/react-router';
import { useForm } from '@tanstack/react-form';
import { z } from 'zod';
import { zodValidator } from '@tanstack/zod-form-adapter';

export const Route = createLazyFileRoute('/_public/signup')({
  component: Signup,
});

export interface SignUpForm {
  username: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
}

function Signup() {
  const { Field, handleSubmit } = useForm<SignUpForm, typeof zodValidator>({
    defaultValues: {
      username: '',
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      confirmPassword: '',
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
          'flex justify-center items-center flex-col gap-4 mt-8 bg-white rounded-lg shadow-lg w-full max-w-2xl  p-4 lg:max-w-4xl lg:p-8',
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
          <div className={cn('grid gap-4 grid-cols-1 w-full lg:grid-cols-2')}>
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
              name="firstName"
              validators={{
                onChange: z.string().min(1, {
                  message: 'First name is required',
                }),
              }}
              children={field => (
                <div className={cn('flex flex-col gap-2')}>
                  <Input
                    type="text"
                    label="First Name"
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
              name="lastName"
              validators={{
                onChange: z.string().min(1, {
                  message: 'Last name is required',
                }),
              }}
              children={field => (
                <div className={cn('flex flex-col gap-2')}>
                  <Input
                    type="text"
                    label="Last Name"
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
              name="email"
              validators={{
                onChange: z.string().email({
                  message: 'Invalid email address',
                }),
              }}
              children={field => (
                <div className={cn('flex flex-col gap-2')}>
                  <Input
                    type="email"
                    label="Email"
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
            <Field
              name="confirmPassword"
              validators={{
                onChangeListenTo: ['password'],
                onChange: ({ value, fieldApi }) => {
                  if (value !== fieldApi.form.getFieldValue('password')) {
                    return 'Passwords do not match';
                  }
                },
              }}
              children={field => (
                <div className={cn('flex flex-col gap-2')}>
                  <Input
                    type="password"
                    label="Confirm Password"
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
