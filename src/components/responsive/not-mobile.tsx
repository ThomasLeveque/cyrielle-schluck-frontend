import React, { useContext } from 'react';
import { useMediaQuery } from 'react-responsive';
import { ThemeContext } from 'styled-components';

const NotMobile: React.FC<any> = ({ children }) => {
  const theme = useContext(ThemeContext);

  const isNotMobile = useMediaQuery({ minWidth: theme.breakpoints.tablet });
  return isNotMobile ? children : null;
};

export default NotMobile;
