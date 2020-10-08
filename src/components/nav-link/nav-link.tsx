import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { NavLinkAStyles } from './nav-link.styles';

interface NavLinkProps {
  href: string;
  as?: string;
}

const NavLink: React.FC<NavLinkProps> = ({ href, as, children }) => {
  const router = useRouter();

  let className = '';
  if (router.pathname === href) {
    className = 'active';
  }

  return (
    <Link href={href} as={as} scroll={false}>
      <NavLinkAStyles className={className}>
        {children}
        <span />
      </NavLinkAStyles>
    </Link>
  );
};

export default NavLink;
