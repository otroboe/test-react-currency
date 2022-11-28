const convertFloat = (value: string): number => {
  let newValue = parseFloat(value);
  newValue = Number.isNaN(newValue) ? 0 : newValue;

  return newValue;
};

export { convertFloat };
