import React from 'react';
import { AppProps } from 'next/app';
import Head from 'next/head';
import { AnimatePresence } from 'framer-motion';
import { ApolloProvider } from '@apollo/client';

import { ThemeProvider } from 'styled-components';
import { myTheme } from '../theme/my-theme';

import { useApollo } from '@lib/apolloClient';
import Header from '@components/header/header';
import { GlobalStyles } from '@styles/global.styles';

const handleExitComplete = () => {
  if (typeof window !== 'undefined') {
    window.scrollTo({ top: 0 });
  }
};

const MyApp = ({ Component, pageProps, router }: AppProps): JSX.Element => {
  const apolloClient = useApollo(pageProps.initialApolloState);

  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css?family=Montserrat:400,700&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ThemeProvider theme={myTheme}>
        <GlobalStyles />
        <ApolloProvider client={apolloClient}>
          <Header />
          <AnimatePresence exitBeforeEnter onExitComplete={handleExitComplete}>
            <Component {...pageProps} key={router.route} />
          </AnimatePresence>
        </ApolloProvider>
      </ThemeProvider>
    </>
  );
};

export default MyApp;
