import { Input, InputProps } from './input';

import { FC } from 'react';
import { Label } from '@radix-ui/react-label';

interface InputWithLabelProps extends InputProps {
  htmlFor?: string;
  label: string;
  isRequired?: boolean;
}

export const InputWithLabel: FC<InputWithLabelProps> = ({
  htmlFor,
  id,
  name,
  label,
  type,
  placeholder,
  isRequired = false,
  className,
  ...props
}) => {
  return (
    <div>
      <Label htmlFor={htmlFor ? htmlFor : id}>
        {label}
        {isRequired && <span className="text-red-500">*</span>}
      </Label>
      <Input
        id={htmlFor ? htmlFor : id}
        name={name ? name : htmlFor ? htmlFor : id}
        type={type}
        placeholder={placeholder ? placeholder : label}
        className={className}
        {...props}
      />
    </div>
  );
};
