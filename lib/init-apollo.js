import fetch from "isomorphic-unfetch";
import { ApolloClient, HttpLink, InMemoryCache } from "apollo-boost";

let apolloClient = null;

// Polyfill fetch() on the server (used by apollo-client)
if (!process.browser) {
  global.fetch = fetch;
}

function create(initialState) {
  return new ApolloClient({
    cache: new InMemoryCache().restore(initialState || {}),
    connectToDevTools: process.browser,
    link: new HttpLink({
      credentials: "same-origin", // Additional fetch() options like `credentials` or `headers`
      uri: process.env.API_URL, // Server URL (must be absolute)
    }),
    ssrMode: !process.browser, // Disables forceFetch on the server (so queries are only run once)
  });
}

export default function initApollo(initialState) {
  // Make sure to create a new client for every server-side request so that data
  // isn't shared between connections (which would be bad)
  if (!process.browser) {
    return create(initialState);
  }

  // Reuse client on the client-side
  if (!apolloClient) {
    apolloClient = create(initialState);
  }

  return apolloClient;
}
