import React, { useContext } from 'react';
import { useMediaQuery } from 'react-responsive';
import { ThemeContext } from 'styled-components';

const Mobile: React.FC<any> = ({ children }) => {
  const theme = useContext(ThemeContext);

  const isMobile = useMediaQuery({ maxWidth: +theme.breakpoints.tablet.replace('px', '') - 1 });
  return isMobile ? children : null;
};

export default Mobile;
