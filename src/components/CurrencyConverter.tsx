import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import React, { useEffect, useMemo, useState } from 'react';

import { Input, Select } from '@/components/form';
import {
  convertCadToCurrency,
  convertCurrencyToCad,
  currencyList,
} from '@/utils/currency';
import { convertFloat } from '@/utils/format';

type CurrencyConverterProps = {
  defaultCadValue?: number;
  defaultCurrency?: string;
};

const CurrencyConverter = ({
  defaultCadValue = 1,
  defaultCurrency = 'USD',
}: CurrencyConverterProps): JSX.Element => {
  const [cadValue, setCadValue] = useState<number>(defaultCadValue);
  const [currencyChoice, setCurrencyChoice] = useState(defaultCurrency);
  const [currencyValue, setCurrencyValue] = useState<number>(
    convertCurrencyToCad(defaultCadValue, defaultCurrency) ?? 0,
  );

  const currencyChoices = useMemo(
    () =>
      currencyList.map(({ code, name }) => ({
        label: `${code} - ${name}`,
        value: code,
      })),
    [],
  );

  const handleChangeCAD = (value: string) => {
    const newValue = convertFloat(value);

    setCadValue(newValue);
    computeCadToCurrency(newValue, currencyChoice);
  };

  const handleChangeCurrencyValue = (value: string) => {
    const newValue = convertFloat(value);

    setCurrencyValue(newValue);
    computeCurrencyToCad(newValue, currencyChoice);
  };

  const handleChangeCurrencyChoice = (value: string) => {
    setCurrencyChoice(value);
    computeCadToCurrency(cadValue, value);
  };

  const computeCadToCurrency = (cad: number, currencyCode: string) => {
    const newCurrencyValue = convertCadToCurrency(cad, currencyCode);

    if (newCurrencyValue === null) {
      throw new Error(
        `Can't find matching currency value - ${cad} | ${currencyCode}`,
      );
    }

    setCurrencyValue(newCurrencyValue);
  };

  const computeCurrencyToCad = (
    currencyValue: number,
    currencyCode: string,
  ) => {
    const newCadValue = convertCurrencyToCad(currencyValue, currencyCode);

    if (newCadValue === null) {
      throw new Error(
        `Can't find matching cad value - ${currencyValue} | ${currencyCode}`,
      );
    }

    setCadValue(newCadValue);
  };

  return (
    <Box component="form" noValidate autoComplete="off">
      <Stack direction="column" spacing={2}>
        <Stack direction="row" spacing={2}>
          <Input
            defaultValue={cadValue.toString()}
            id="cad-value"
            label="CAD"
            onChange={handleChangeCAD}
            type="number"
          />
          <Input
            defaultValue={currencyValue.toString()}
            id="currency-value"
            label="Other currency"
            type="number"
            onChange={handleChangeCurrencyValue}
          />
        </Stack>
        <Select
          choices={currencyChoices}
          defaultValue={currencyChoice}
          id="currency-choice"
          onChange={handleChangeCurrencyChoice}
        />
      </Stack>
    </Box>
  );
};

export default CurrencyConverter;
