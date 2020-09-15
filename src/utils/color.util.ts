export const fixHexaColor = (color: string): string => {
  if (color.includes('#')) {
    return color;
  }
  return `#${color}`;
};
