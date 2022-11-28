import rawData from '../../data/cad.json';

// Use fields we only need
type Currency = {
  code: string;
  inverseRate: number;
  name: string;
  rate: number;
};

/**
 * Build an array and sort the currency by codes
 */
const computeCurrencyList = (data: Record<string, any>): Currency[] =>
  Object.keys(data)
    .map((key) => {
      const { code, inverseRate, name, rate } = data[key];

      return {
        code,
        inverseRate,
        name,
        rate,
      };
    })
    .sort((a, b) => a.code.localeCompare(b.code));

// Compute once
const currencyList = computeCurrencyList(rawData);

/**
 * Convert CAD to selected currency
 */
const convertCadToCurrency = (
  cad: number,
  currencyCode: string,
): number | null => {
  const foundCurrency = currencyList.find(({ code }) => code === currencyCode);

  if (!foundCurrency) {
    return null;
  }

  return parseFloat((cad * foundCurrency.rate).toFixed(3));
};

/**
 * Convert CAD to selected currency
 */
const convertCurrencyToCad = (
  currencyValue: number,
  currencyCode: string,
): number | null => {
  const foundCurrency = currencyList.find(({ code }) => code === currencyCode);

  if (!foundCurrency) {
    return null;
  }

  return parseFloat((currencyValue * foundCurrency.inverseRate).toFixed(3));
};

export type { Currency };
export { currencyList, convertCadToCurrency, convertCurrencyToCad };
