import React from 'react';
import Head from 'next/head';

import { LayoutStyles } from './layout.styles';

interface LayoutProps {
  title: string;
}

const Layout: React.FC<LayoutProps> = ({ title, children }) => {
  return (
    <LayoutStyles>
      <Head>
        <title>{title}</title>
      </Head>
      {children}
    </LayoutStyles>
  );
};

export default Layout;
