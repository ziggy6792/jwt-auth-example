import React from 'react';
import { ApolloProvider } from '@apollo/react-hooks';
import { withApollo } from '../lib/apollo';

const MyApp = (props: any) => {
  const { Component, pageProps, apolloClient } = props;
  return (
    <ApolloProvider client={apolloClient}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
};

export default withApollo(MyApp);
