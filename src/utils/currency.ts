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

export type { Currency };
export { currencyList };
