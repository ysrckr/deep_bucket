import { FieldInfo } from '@/components/form/fieldInfo';
import { cn } from '@/lib/utils';
import { createLazyFileRoute } from '@tanstack/react-router';
import { useForm } from '@tanstack/react-form';
import { z } from 'zod';
import { zodValidator } from '@tanstack/zod-form-adapter';

export const Route = createLazyFileRoute('/_public/signup')({
  component: Signup,
});

export interface SignUpForm {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
}

function Signup() {
  const { Field, handleSubmit } = useForm<SignUpForm, typeof zodValidator>({
    defaultValues: {
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
      <form
        onSubmit={e => {
          e.preventDefault();
          e.stopPropagation();
          handleSubmit();
        }}
        className={cn('flex flex-col gap-4 p-4')}
      >
        <div>
          <Field
            name="firstName"
            validators={{
              onChange: z.string().min(1, {
                message: 'First name is required',
              }),
            }}
            children={field => (
              <div className={cn('flex flex-col gap-2')}>
                <label htmlFor={field.name}>
                  First Name<span className="text-red-500">*</span>:
                </label>
                <input
                  id={field.name}
                  name={field.name}
                  value={field.state.value}
                  onBlur={field.handleBlur}
                  onChange={e => field.handleChange(e.target.value)}
                  className={cn('')}
                />
                <FieldInfo field={field} />
              </div>
            )}
          />

          <div>
            <Field
              name="email"
              validators={{
                onChange: z.string().email({
                  message: 'Invalid email address',
                }),
              }}
              children={field => (
                <>
                  <label htmlFor={field.name}>
                    Email<span className="text-red-500">*</span>:
                  </label>
                  <input
                    id={field.name}
                    name={field.name}
                    value={field.state.value}
                    onBlur={field.handleBlur}
                    onChange={e => field.handleChange(e.target.value)}
                  />
                  <FieldInfo field={field} />
                </>
              )}
            />
          </div>
          <div>
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
                <>
                  <label htmlFor={field.name}>
                    Password<span className="text-red-500">*</span>:
                  </label>
                  <input
                    id={field.name}
                    type="password"
                    name={field.name}
                    value={field.state.value}
                    onBlur={field.handleBlur}
                    onChange={e => field.handleChange(e.target.value)}
                  />
                  <FieldInfo field={field} />
                </>
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
                <>
                  <label htmlFor={field.name}>
                    Confirm Password<span className="text-red-500">*</span>:
                  </label>
                  <input
                    id={field.name}
                    type="password"
                    name={field.name}
                    value={field.state.value}
                    onBlur={field.handleBlur}
                    onChange={e => field.handleChange(e.target.value)}
                  />
                  <FieldInfo field={field} />
                </>
              )}
            />
          </div>
        </div>
        <button type="submit">Submit</button>
      </form>
    </section>
  );
}
