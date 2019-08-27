import { gql } from "apollo-server-express";

const typeDefs = gql`
  type returnStatus {
    status: String!
  }
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
    poster: String!
    producer: Producer
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
    singleActor(id: ID!): Actor
    singleMovie(id: ID!): Movie
    singleProducer(id: ID!): Producer
  }

  type Mutation {
    createActor(
      name: String!
      sex: String!
      dob: String!
      biodata: String!
      addmovie: [ID]
    ): Actor
    updateActor(
      id: ID!
      name: String
      sex: String
      dob: String
      biodata: String
    ): Actor
    deleteActor(id: ID!): [Actor]
    createMovie(
      name: String!
      year_of_release: String!
      plot: String!
      poster: String!
      producer_id: ID!
      addactor:[ID]
    ): Movie
    updateMovie(
      id: ID!
      name: String
      year_of_release: String
      plot: String
      poster: String
      producer_id: ID
    ): Movie
    deleteMovie(id: ID!): [Movie]
    createProducer(
      name: String!
      sex: String!
      dob: String!
      biodata: String!
    ): Producer
    updateProducer(
      id: ID!
      name: String
      sex: String
      dob: String
      biodata: String
    ): Producer
    deleteProducer(id: ID!): [Producer]
    createActorMovie(actor_id: ID!, movie_id: ID!): returnStatus
    deleteActorMovie(actor_id: ID!, movie_id: ID!): returnStatus
  }
`;

export default typeDefs;
