import React from 'react';

import NavLink from '@components/nav-link/nav-link';
import { textsColorType } from '@interfaces/project.interface';

import { NavStyles } from './nav.styles';

interface NavProps {
  textsColor: textsColorType;
}

const Nav: React.FC<NavProps> = ({ textsColor }) => {
  return (
    <NavStyles textsColor={textsColor}>
      <NavLink href="/">PROJETS</NavLink>
      <NavLink href="/plus-sur-moi">+ SUR MOI</NavLink>
    </NavStyles>
  );
};

export default Nav;
