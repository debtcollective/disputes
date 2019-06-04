import express from "express";
import { ApolloServer, gql } from "apollo-server-express";
import typeDefs from "./schema";
import { Model } from "objection";
import knexConfig from "./knexfile";
import Knex from "knex";

// Setup Objection with Knex
const knex = Knex(knexConfig);
Model.knex(knex);

const books = [
  {
    title: "Harry Potter and the Chamber of Secrets",
    author: "J.K. Rowling"
  },
  {
    title: "Jurassic Park",
    author: "Michael Crichton"
  }
];

const resolvers = {
  Query: {
    books: () => books
  }
};

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
