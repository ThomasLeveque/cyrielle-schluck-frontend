import React from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';

import Header from '@components/header/header';
import Footer from '@components/footer/footer';

import { LayoutStyles } from './layout.styles';

interface LayoutProps {
  title: string;
}

const Layout: React.FC<LayoutProps> = ({ title, children }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <Header />
      <LayoutStyles
        as={motion.main}
        exit={{ opacity: 0 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        {children}
      </LayoutStyles>
      <Footer />
    </>
  );
};

export default Layout;
