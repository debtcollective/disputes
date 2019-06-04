import express from "express";
import { ApolloServer, gql } from "apollo-server-express";
import { Model } from "objection";
import Knex from "knex";
import knexConfig from "../knexfile";
import { typeDefs, resolvers } from "./schema";

// setup Objection.js with Knex
const knex = Knex(knexConfig);
Model.knex(knex);

// init ApolloServer
const server = new ApolloServer({
  typeDefs,
  resolvers,
  introspection: true,
  playground: true
});

const app = express();
const port = process.env.PORT || 4000;

server.applyMiddleware({ app, path: "/graphql" });

app.listen({ port }, () => {
  console.log(
    `🚀  Server ready at http://localhost:${port}${server.graphqlPath}`
  );
});
