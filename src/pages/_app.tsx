import React from 'react';
import { AppProps } from 'next/app';
import { ApolloProvider } from '@apollo/client';
import { AnimatePresence } from 'framer-motion';

import { DefaultSeo } from 'next-seo';
import SEO from '../../next-seo.config';

import { ThemeProvider } from 'styled-components';
import { myTheme } from '../theme/my-theme';

import { useApollo } from '@lib/apolloClient';
import Nav from '@components/nav/nav';
import Footer from '@components/footer/footer';

import { GlobalStyles } from '@styles/global.styles';
import { textsColorType } from '@interfaces/project.interface';

const handleExitComplete = (): void => {
  if (typeof window !== 'undefined') {
    window.scrollTo({ top: 0 });
  }
};

const MyApp = ({ Component, pageProps, router }: AppProps): JSX.Element => {
  const apolloClient = useApollo(pageProps.initialApolloState);
  const textsColor: textsColorType = pageProps?.textsColor ?? 'myBlack';

  return (
    <ThemeProvider theme={myTheme}>
      <GlobalStyles />
      <DefaultSeo {...SEO} />
      <ApolloProvider client={apolloClient}>
        <Nav textsColor={textsColor} />
        <AnimatePresence exitBeforeEnter onExitComplete={handleExitComplete}>
          <Component key={router.asPath} {...pageProps} />
        </AnimatePresence>
        <Footer />
      </ApolloProvider>
    </ThemeProvider>
  );
};

export default MyApp;
