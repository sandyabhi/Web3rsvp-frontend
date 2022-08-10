import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://api.thegraph.com/subgraphs/name/sandyabhi/web3rsvp",
  cache: new InMemoryCache(),
});

export default client;
