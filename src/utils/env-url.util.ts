export const fixEnvUrl = (url: string): string => {
  return process.env.NODE_ENV !== 'development' ? url : `${process.env.NEXT_PUBLIC_API_URL}${url}`;
};
