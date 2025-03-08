export const capitalize = (string: string) => {
  return string.slice(0, 1).toUpperCase().concat(string.slice(1));
};

console.log(capitalize("abcd"));
