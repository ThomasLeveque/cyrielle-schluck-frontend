import React from 'react';

import NavLink from '@components/nav-link/nav-link';

import { HeaderStyles } from './header.styles';

const Header: React.FC = () => {
  return (
    <HeaderStyles>
      <NavLink href="/">PROJETS</NavLink>
      <NavLink href="/about-me">+ SUR MOI</NavLink>
    </HeaderStyles>
  );
};

export default Header;
