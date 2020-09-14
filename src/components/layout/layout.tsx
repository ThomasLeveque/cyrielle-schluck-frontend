import React from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';

import { LayoutStyles } from './layout.styles';

interface LayoutProps {
  title: string;
}

const Layout: React.FC<LayoutProps> = ({ title, children }) => {
  return (
    <LayoutStyles
      as={motion.main}
      exit={{ opacity: 0 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <Head>
        <title>{title}</title>
      </Head>
      {children}
    </LayoutStyles>
  );
};

export default Layout;
