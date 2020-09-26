import React from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';

import { transition } from '@animations/global.animation';

import { LayoutStyles } from './layout.styles';

interface LayoutProps {
  title: string;
}

const Layout: React.FC<LayoutProps> = ({ title, children }) => {
  return (
    <LayoutStyles as={motion.main} exit={{ opacity: 0, transition }}>
      <Head>
        <title>{title}</title>
      </Head>
      {children}
    </LayoutStyles>
  );
};

export default Layout;
