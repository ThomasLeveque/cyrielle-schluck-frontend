export const fixhyphens = (text: string): string => {
  return text.replace(/(\S+)-(\S+)/g, '$1&#8288;-&#8288;$2');
};
