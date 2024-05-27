import { FieldInfo } from '@/components/form/fieldInfo';
import { createLazyFileRoute } from '@tanstack/react-router';
import { useForm } from '@tanstack/react-form';
import { z } from 'zod';
import { zodValidator } from '@tanstack/zod-form-adapter';

export const Route = createLazyFileRoute('/_public/signup')({
  component: Signup,
});

function Signup() {
  const form = useForm({
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
    validatorAdapter: zodValidator,
    onSubmit: async ({ value }) => {
      // Do something with form data
      console.log(value);
    },
  });

  return (
    <section>
      <form
        onSubmit={e => {
          e.preventDefault();
          e.stopPropagation();
          form.handleSubmit();
        }}
      >
        <div>
          <form.Field
            name="firstName"
            validators={{
              onChange: z.string().min(1, {
                message: 'First name is required',
              }),
            }}
            children={field => (
              <>
                <label htmlFor={field.name}>
                  First Name<span className="text-red-500">*</span>:
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
          <div>
            <form.Field
              name="lastName"
              validators={{
                onChange: z.string().min(1, {
                  message: 'Last name is required',
                }),
              }}
              children={field => (
                <>
                  <label htmlFor={field.name}>
                    Last Name<span className="text-red-500">*</span>:
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
            <form.Field
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
            <form.Field
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
            <form.Field
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
