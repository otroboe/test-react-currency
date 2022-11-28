import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import MUISelect, { SelectChangeEvent } from '@mui/material/Select';
import React, { useState } from 'react';

type SelectChoice = {
  label: string;
  value: string;
};

type SelectProps = {
  choices: SelectChoice[];
  defaultValue?: string;
  id: string;
  onChange?: (value: string) => void;
  label?: string;
};

const Select = ({
  choices,
  defaultValue,
  id,
  onChange = () => {},
  label,
}: SelectProps): JSX.Element => {
  const [value, setValue] = useState(defaultValue);

  const handleChange = (event: SelectChangeEvent) => {
    const newValue = event.target.value;

    onChange(newValue);
    setValue(newValue);
  };

  return (
    <FormControl fullWidth>
      <InputLabel id={id}>{label}</InputLabel>
      <MUISelect
        label={label}
        labelId={id}
        onChange={handleChange}
        value={value}
        MenuProps={{
          style: {
            maxHeight: 400,
          },
        }}
      >
        {choices.map((choice, idx) => (
          <MenuItem key={`${id}-${idx}`} value={choice.value}>
            {choice.label}
          </MenuItem>
        ))}
      </MUISelect>
    </FormControl>
  );
};

export default Select;
