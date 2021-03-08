const localServerUrl = process.env.NEXT_PUBLIC_LOCAL_SERVER_URL || 'http://localhost:1337';

export const fixEnvUrl = (url: string): string =>
  process.env.NODE_ENV === 'development'
    ? `${localServerUrl}${url}`
    : `${process.env.NEXT_PUBLIC_API_URL}${url}`;

export const fixImgUrl = (url: string): string =>
  process.env.NODE_ENV === 'development' ? `${localServerUrl}${url}` : url;
