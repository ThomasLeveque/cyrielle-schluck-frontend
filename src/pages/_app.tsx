import React from 'react';
import { AppProps } from 'next/app';
import { ApolloProvider } from '@apollo/client';

import { ThemeProvider } from 'styled-components';
import { myTheme } from '../theme/my-theme';

import { useApollo } from '@lib/apolloClient';
import Header from '@components/header/header';
import Footer from '@components/footer/footer';

import { GlobalStyles } from '@styles/global.styles';

const MyApp = ({ Component, pageProps, router }: AppProps): JSX.Element => {
  const apolloClient = useApollo(pageProps.initialApolloState);

  return (
    <ThemeProvider theme={myTheme}>
      <GlobalStyles />
      <ApolloProvider client={apolloClient}>
        <Header />
        <Component key={router.route} {...pageProps} />
        <Footer isProjectPage={router.route.includes('projects')} />
      </ApolloProvider>
    </ThemeProvider>
  );
};

export default MyApp;
