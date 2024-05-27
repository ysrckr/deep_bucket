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
                <label htmlFor={field.name}>First Name:</label>
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
        <button type="submit">Submit</button>
      </form>
    </section>
  );
}
