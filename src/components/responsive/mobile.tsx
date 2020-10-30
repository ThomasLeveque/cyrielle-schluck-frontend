import React, { useContext } from 'react';
import { MediaQueryAllQueryable, useMediaQuery } from 'react-responsive';
import { ThemeContext, DefaultTheme } from 'styled-components';

export const generateIsMobileMediaQuery = (
  theme: DefaultTheme
): Partial<
  MediaQueryAllQueryable & {
    query?: string | undefined;
  }
> => ({ maxWidth: +theme.breakpoints.tablet.replace('px', '') - 1 });

const Mobile: React.FC<any> = ({ children }) => {
  const theme = useContext(ThemeContext);

  const isMobile = useMediaQuery(generateIsMobileMediaQuery(theme));
  return isMobile ? children : null;
};

export default Mobile;
