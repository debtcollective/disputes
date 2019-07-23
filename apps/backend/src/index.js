import express from "express";
import knex from "./knex";
import { ApolloServer } from "apollo-server-express";
import { Model } from "@debtcollective/models";
import { resolvers, typeDefs } from "./schema";

// setup Objection.js
Model.knex(knex);

// init ApolloServer
const server = new ApolloServer({
  introspection: true,
  playground: true,
  resolvers,
  typeDefs,
});

const app = express();
const port = process.env.PORT || 4000;

server.applyMiddleware({ app, path: "/graphql" });

app.listen({ port }, () => {
  console.log(
    `🚀  Server ready at http://localhost:${port}${server.graphqlPath}`
  );
});
