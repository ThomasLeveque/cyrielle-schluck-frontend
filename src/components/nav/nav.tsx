import React from 'react';

import NavLink from '@components/nav-link/nav-link';

import { NavStyles } from './nav.styles';

const Nav: React.FC = () => {
  return (
    <NavStyles>
      <NavLink href="/">PROJETS</NavLink>
      <NavLink href="/about-me">+ SUR MOI</NavLink>
    </NavStyles>
  );
};

export default Nav;
