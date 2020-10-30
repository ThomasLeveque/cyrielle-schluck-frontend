import React from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';

import { transition } from '@animations/global.animation';

import { LayoutStyles } from './layout.styles';

const Layout: React.FC = ({ children }) => {
  return (
    <LayoutStyles as={motion.main} exit={{ opacity: 0, transition }}>
      {children}
    </LayoutStyles>
  );
};

export default Layout;
