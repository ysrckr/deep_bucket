import { FC } from 'react';
/* eslint-disable @typescript-eslint/no-explicit-any */
import type { FieldApi } from '@tanstack/react-form';

type FieldInfoProps = {
  field: FieldApi<any, any, any, any>;
};

export const FieldInfo: FC<FieldInfoProps> = ({ field }) => {
  return (
    <>
      {field.state.meta.touchedErrors ? (
        <em>{field.state.meta.touchedErrors}</em>
      ) : null}
      {field.state.meta.isValidating ? 'Validating...' : null}
    </>
  );
};
