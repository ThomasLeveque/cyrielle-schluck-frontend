import React, { useContext } from 'react';
import { useMediaQuery } from 'react-responsive';
import { ThemeContext } from 'styled-components';

const NotDesktop: React.FC = ({ children }) => {
  const theme = useContext(ThemeContext);

  const isNotDesktop = useMediaQuery({
    maxWidth: +theme.breakpoints.desktop.replace('px', '') - 1,
  });
  return isNotDesktop ? <>{children}</> : null;
};

export default NotDesktop;
