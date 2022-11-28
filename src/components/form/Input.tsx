import TextField from '@mui/material/TextField';
import React, { ChangeEvent, useEffect, useState } from 'react';

type InputProps = {
  defaultValue?: string;
  id: string;
  label?: string;
  onChange?: (value: string) => void;
  type?: string;
};

const Input = ({
  defaultValue = '',
  id,
  label,
  onChange = () => {},
  type = 'text',
}: InputProps): JSX.Element => {
  const [value, setValue] = useState(defaultValue);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;

    onChange(newValue);
    setValue(newValue);
  };

  useEffect(() => {
    setValue(defaultValue);
  }, [defaultValue]);

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
