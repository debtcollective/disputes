import { gql } from "apollo-server-express";

export const typeDef = gql`
  scalar JSON

  type Dispute {
    id: Int
    tool_id: String
    tool_version: String
    user_id: Int
    data: JSON
    draft: Boolean
  }

  extend type Query {
    Dispute(id: Int!): Dispute
    Disputes: [Dispute]
  }
`;

export const resolvers = {
  Dispute: {}
};
