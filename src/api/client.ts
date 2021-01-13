import { ApolloClient, InMemoryCache } from '@apollo/client';
const { REACT_APP_BASE_URL } = process.env;
const client = new ApolloClient({
  uri: `${REACT_APP_BASE_URL}/graphql`,
  cache: new InMemoryCache()
});

export default client