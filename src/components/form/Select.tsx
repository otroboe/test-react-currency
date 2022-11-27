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
  label?: string;
};

const Select = ({
  choices,
  defaultValue,
  id,
  label,
}: SelectProps): JSX.Element => {
  const [value, setValue] = useState(defaultValue);

  const handleChange = (event: SelectChangeEvent) => {
    setValue(event.target.value as string);
  };

  return (
    <FormControl fullWidth>
      <InputLabel id={id}>{label}</InputLabel>
      <MUISelect
        label={label}
        labelId={id}
        onChange={handleChange}
        value={value}
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
