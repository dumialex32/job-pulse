export const getSelectOptions = <T extends Record<string, string>>(data: T) => {
  return Object.entries(data).map(([key, value]) => ({
    label: key,
    value,
  }));
};
