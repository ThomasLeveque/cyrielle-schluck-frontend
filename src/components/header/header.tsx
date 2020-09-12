import React from 'react';
import Link from 'next/link';

import { HeaderStyles } from './header.styles';

const Header: React.FC = () => {
  return (
    <HeaderStyles>
      <Link href="/">
        <a>PROJECTS</a>
      </Link>
      <Link href="/">
        <a>+ SUR MOI</a>
      </Link>
    </HeaderStyles>
  );
};

export default Header;
