import { gql } from "apollo-server-express";

const typeDefs = gql`
  type Actor {
    id: ID!
    name: String!
    sex: String!
    dob: String!
    biodata: String!
    movie: [Movie]
  }

  type Movie {
    id: ID!
    name: String!
    year_of_release: Int!
    plot: String!
    producer: [Producer]
    actor: [Actor]
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
    createActor(name: String!, sex: String!, dob: String!, biodata: String!): Actor
    updateActor(
      id: Int!
      name: String
      sex: String
      dob: String
      biodata: String
    ): Actor
    deleteActor(id: Int!): [Actor]
    createMovie(name: String!, year_of_release: Int!, plot: String!): Movie
    updateMovie(
      id: Int!
      name: String
      year_of_release: String
      plot: String
    ): Movie
    deleteMovie(id: Int!): [Movie]
    createProducer(
      name: String!
      sex: String!
      dob: String!
      biodata: String!
    ): Producer
    updateProducer(
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
