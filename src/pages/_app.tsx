import React from 'react';
import { AppProps } from 'next/app';
import { ApolloProvider } from '@apollo/client';
import { AnimatePresence } from 'framer-motion';

import { ThemeProvider } from 'styled-components';
import { myTheme } from '../theme/my-theme';

import { useApollo } from '@lib/apolloClient';
import Header from '@components/header/header';
import Footer from '@components/footer/footer';

import { GlobalStyles } from '@styles/global.styles';

const handleExitComplete = () => {
  if (typeof window !== 'undefined') {
    window.scrollTo({ top: 0 });
  }
};

const MyApp = ({ Component, pageProps, router }: AppProps): JSX.Element => {
  const apolloClient = useApollo(pageProps.initialApolloState);

  return (
    <ThemeProvider theme={myTheme}>
      <GlobalStyles />
      <ApolloProvider client={apolloClient}>
        <Header />
        <AnimatePresence exitBeforeEnter onExitComplete={handleExitComplete}>
          <Component key={router.route} {...pageProps} />
        </AnimatePresence>
        <Footer isProjectPage={router.route.includes('projects')} />
      </ApolloProvider>
    </ThemeProvider>
  );
};

export default MyApp;
