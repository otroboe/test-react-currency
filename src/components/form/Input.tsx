import TextField from '@mui/material/TextField';
import React, { ChangeEvent, useState } from 'react';

type InputProps = {
  defaultValue?: string;
  id: string;
  label?: string;
  type?: string;
};

const Input = ({
  defaultValue = '',
  id,
  label,
  type = 'text',
}: InputProps): JSX.Element => {
  const [value, setValue] = useState(defaultValue);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return (
    <TextField
      id={id}
      label={label}
      onChange={handleChange}
      type={type}
      value={value}
    />
  );
};

export default Input;
