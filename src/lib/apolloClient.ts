import { useMemo } from 'react';
import { ApolloClient, HttpLink, InMemoryCache, NormalizedCacheObject } from '@apollo/client';
import { fixEnvUrl } from '@utils/env-url.util';

let apolloClient: ApolloClient<NormalizedCacheObject> | undefined;

const createApolloClient = () =>
  new ApolloClient({
    ssrMode: typeof window === 'undefined',
    link: new HttpLink({
      uri: fixEnvUrl('/graphql'),
      credentials: 'same-origin',
    }),
    cache: new InMemoryCache(),
  });

export const initializeApollo = (
  initialState: NormalizedCacheObject | null = null
): ApolloClient<NormalizedCacheObject> => {
  const _apolloClient = apolloClient ?? createApolloClient();

  // If your page has Next.js data fetching methods that use Apollo Client, the initial state
  // gets hydrated here
  if (initialState) {
    // Get existing cache, loaded during client side data fetching
    const existingCache = _apolloClient.extract();
    // Restore the cache using the data passed from getStaticProps/getServerSideProps
    // combined with the existing cached data
    _apolloClient.cache.restore({ ...existingCache, ...initialState });
  }
  // For SSG and SSR always create a new Apollo Client
  if (typeof window === 'undefined') return _apolloClient;
  // Create the Apollo Client once in the client
  if (!apolloClient) apolloClient = _apolloClient;

  return _apolloClient;
};

export const useApollo = (
  initialState: NormalizedCacheObject
): ApolloClient<NormalizedCacheObject> => {
  const store = useMemo(() => initializeApollo(initialState), [initialState]);
  return store;
};
