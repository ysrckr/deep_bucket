import { Input, InputProps } from './input';

import { FC } from 'react';
import { Label } from '@radix-ui/react-label';

interface InputWithLabelProps extends InputProps {
  htmlFor: string;
  label: string;
}

export const InputWithLabel: FC<InputWithLabelProps> = ({
  htmlFor,
  label,
  type,
  placeholder,
}) => {
  return (
    <div>
      <Label htmlFor={htmlFor}>{label}</Label>
      <Input
        id={htmlFor}
        name={htmlFor}
        type={type}
        placeholder={placeholder ? placeholder : label}
      />
    </div>
  );
};
