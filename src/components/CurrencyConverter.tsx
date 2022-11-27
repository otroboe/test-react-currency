import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import React, { useMemo } from 'react';

import { Input, Select } from '@/components/form';
import { currencyList } from '@/utils/currency';

const CurrencyConverter = (): JSX.Element => {
  const currencyChoices = useMemo(
    () =>
      currencyList.map(({ code, name }) => ({
        label: `${code} - ${name}`,
        value: code,
      })),
    [],
  );

  return (
    <Box component="form" noValidate autoComplete="off">
      <Stack direction="column" spacing={2}>
        <Stack direction="row" spacing={2}>
          <Input defaultValue="1" id="cad-value" label="CAD" type="number" />
          <Input id="currency-value" label="Other currency" type="number" />
        </Stack>
        <Select
          choices={currencyChoices}
          defaultValue="USD"
          id="currency-choice"
        />
      </Stack>
    </Box>
  );
};

export default CurrencyConverter;
