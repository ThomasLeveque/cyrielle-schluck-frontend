import React, { useContext } from 'react';
import { useMediaQuery } from 'react-responsive';
import { ThemeContext } from 'styled-components';

const Desktop: React.FC = ({ children }) => {
  const theme = useContext(ThemeContext);

  const isDesktop = useMediaQuery({ minWidth: theme.breakpoints.desktop });
  return isDesktop ? <>{children}</> : null;
};

export default Desktop;
