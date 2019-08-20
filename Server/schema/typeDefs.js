import { gql } from "apollo-server-express";

const typeDefs = gql`
  type Actor {
    id: ID!
    name: String!
    sex: String!
    dob: String!
    biodata: String!
  }

  type Movie {
    id: ID!
    name: String!
    year_of_release: Int!
    plot: String!
    producer: [Producer]
  }

  type Producer {
    id: ID!
    name: String!
    sex: String!
    dob: String!
    biodata: String!
    movie: [Movie]
  }

  type Poster {
    id: ID!
    name: String!
    file: String!
    path: String!
  }

  type Query {
    allActors: [Actor]
    allMovies: [Movie]
    allProducers: [Producer]
    singleActor(id: Int!): Actor
    singleMovie(id: Int!): Movie
    singleProducer(id: Int!): Producer
  }

  type Mutation {
    addActor(name: String!, sex: String!, dob: String!, biodata: String!): Actor
    editActor(
      id: Int!
      name: String
      sex: String
      dob: String
      biodata: String
    ): Actor
    deleteActor(id: Int!): [Actor]
    addMovie(name: String!, year_of_release: Int!, plot: String!): Movie
    editMovie(
      id: Int!
      name: String
      year_of_release: String
      plot: String
    ): Movie
    deleteMovie(id: Int!): [Movie]
    addProducer(
      name: String!
      sex: String!
      dob: String!
      biodata: String!
    ): Producer
    editProducer(
      id: Int!
      name: String
      sex: String
      dob: String
      biodata: String
    ): Producer
    deleteProducer(id: Int!): [Producer]
  }
`;

export default typeDefs;
