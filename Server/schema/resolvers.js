import { UserInputError, ValidationError } from "apollo-server-express";

import { error } from "../helper/error-messages";
import models from "../models/index";

const resolvers = {
  Query: {
    allActors: async (parent, args, context) => {
      return await models.Actor.findAll();
    },
    allMovies: async (parent, args, context) => {
      return await models.Movie.findAll();
    },
    allProducers: async (parent, args, context) => {
      return await models.Producer.findAll();
    },
    singleActor: async (parent, args, context) => {
      return await models.Actor.findOne({
        where: {
          id: args.id
        }
      });
    },
    singleMovie: async (parent, args, context) => {
      return await models.Movie.findOne({
        where: {
          id: args.id
        }
      });
    },
    singleProducer: async (parent, args, context) => {
      return await models.Producer.findOne({
        where: {
          id: args.id
        }
      });
    }
  },
  Mutation: {
    addActor: async (parent, args) => {
      if (!args.name) throw new UserInputError(error.noName);
      if (!args.sex) throw new UserInputError(error.noSex);
      if (!args.dob) throw new UserInputError(error.noDOB);
      if (!args.biodata) throw new UserInputError(error.noBiodata);
      if (args.sex != "Male" && args.sex != "Female")
        throw new UserInputError(error.invalidBiodata);
      return await models.Actor.create({
        name: args.name,
        sex: args.sex,
        dob: args.dob,
        biodata: args.biodata
      });
    },
    editActor: async (parent, args) => {
      if (!args.id) throw new UserInputError(error.noID);
      if (args.sex && args.sex != "Male" && args.sex != "Female")
        throw new UserInputError(error.invalidBiodata);
      await Actor.update(
        {
          args
        },
        {
          where: {
            id: args.id
          }
        }
      );
      return await models.Actor.findOne({
        where: {
          id: args.id
        }
      });
    },
    deleteActor: async (parent, args) => {
      if (!args.id) throw new UserInputError(error.noID);
      await models.Actor.destroy({
        where: {
          id: args.id
        }
      });
      return await models.Actor.findAll();
    },
    addMovie: async (parent, args) => {
      if (!args.name) throw new UserInputError(error.noName);
      if (!args.year_of_release) throw new UserInputError(error.noYear);
      if (!args.plot) throw new UserInputError(error.noPlot);
      if (!args.year_of_release > 0)
        throw new UserInputError(error.invalidYear);
      return await models.Movie.create({
        name: args.name,
        year_of_release: args.year_of_release,
        plot: args.plot
      });
    },
    editMovie: async (parent, args) => {
      if (!args.id) throw new UserInputError(error.noID);
      if (args.year_of_release && !args.year_of_release > 0)
        throw new UserInputError(error.invalidYear);
      await Movie.update(
        {
          args
        },
        {
          where: {
            id: args.id
          }
        }
      );
      return await models.Movie.findOne({
        where: {
          id: args.id
        }
      });
    },
    deleteMovie: async (parent, args) => {
      if (!args.id) throw new UserInputError(error.noID);
      await models.Movie.destroy({
        where: {
          id: args.id
        }
      });
      return await models.Movie.findAll();
    },
    addProducer: async (parent, args) => {
      if (!args.name) throw new UserInputError(error.noName);
      if (!args.sex) throw new UserInputError(error.noSex);
      if (!args.dob) throw new UserInputError(error.noDOB);
      if (!args.biodata) throw new UserInputError(error.noBiodata);
      if (args.sex != "Male" && args.sex != "Female")
        throw new UserInputError(error.invalidBiodata);
      return await models.Producer.create({
        name: args.name,
        sex: args.sex,
        dob: args.dob,
        biodata: args.biodata
      });
    },
    editProducer: async (parent, args) => {
      if (!args.id) throw new UserInputError(error.noID);
      if (args.sex && args.sex != "Male" && args.sex != "Female")
        throw new UserInputError(error.invalidBiodata);
      await Producer.update(
        {
          args
        },
        {
          where: {
            id: args.id
          }
        }
      );
      return await models.Producer.findOne({
        where: {
          id: args.id
        }
      });
    },
    deleteProducer: async (parent, args) => {
      if (!args.id) throw new UserInputError(error.noID);
      await models.Producer.destroy({
        where: {
          id: args.id
        }
      });
      return await models.Producer.findAll();
    }
  }
};

export default resolvers;
