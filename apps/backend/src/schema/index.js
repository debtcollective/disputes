import { gql } from "apollo-server-express";
import GraphQLJSON from "graphql-type-json";
import { makeExecutableSchema } from "graphql-tools";
import _ from "lodash";
import { typeDef as Dispute, resolvers as disputeResolvers } from "./dispute";

const Root = gql`
  type Query {
    _: Boolean
  }

  type Mutation {
    _: Boolean
  }
`;

const rootResolvers = {
  JSON: GraphQLJSON,
  Query: {},
  Mutation: {}
};

export const typeDefs = [Root, Dispute];
export const resolvers = _.merge(rootResolvers, disputeResolvers);
