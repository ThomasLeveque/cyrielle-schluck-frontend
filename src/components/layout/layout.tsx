import React from 'react';
import Head from 'next/head';
import { motion, AnimatePresence } from 'framer-motion';

import Header from '@components/header/header';
import Footer from '@components/footer/footer';

import { LayoutStyles } from './layout.styles';

const handleExitComplete = () => {
  if (typeof window !== 'undefined') {
    window.scrollTo({ top: 0 });
  }
};

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
      <AnimatePresence exitBeforeEnter onExitComplete={handleExitComplete}>
        <LayoutStyles
          as={motion.main}
          exit={{ opacity: 0 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          {children}
        </LayoutStyles>
      </AnimatePresence>
      <Footer />
    </>
  );
};

export default Layout;
