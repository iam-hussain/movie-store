import { UserInputError, ValidationError } from "apollo-server-express";

import { error } from "../helper/error-messages";
import models from "../models/index";
const fs = require("fs");


const resolvers = {
  Actor: {
    movie: async (parent, args) => {
      var oneActor = await models.Actor.findOne({
        where: {
          id: parent.id
        },
        include: [
          {
            model: models.Movie,
            as: "Movie"
          }
        ]
      });
      return oneActor.Movie;
    }
  },
  Movie: {
    actor: async (parent, args) => {
      var oneMovie = await models.Movie.findOne({
        where: {
          id: parent.id
        },
        include: [
          {
            model: models.Actor,
            as: "Actor"
          }
        ]
      });
      return oneMovie.Actor;
    },
    producer: async (parent, args) =>
      await models.Producer.findOne({
        where: {
          id: parent.producer_id
        }
      })
  },
  Producer: {
    movie: async (parent, args) =>
      await models.Movie.findAll({
        where: {
          producer_id: parent.id
        }
      })
  },
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
    createActor: async (parent, args) => {
      if (!args.name) throw new UserInputError(error.noName);
      if (!args.sex) throw new UserInputError(error.noSex);
      if (!args.dob) throw new UserInputError(error.noDOB);
      if (!args.biodata) throw new UserInputError(error.noBiodata);
      if (args.sex != "Male" && args.sex != "Female")
        throw new UserInputError(error.invalidBiodata);
      var created =  await models.Actor.create(args);
      const promises = args.addmovie.map(movie => {
        return  models.ActorMovie.create({
          actor_id: created.id,
          movie_id: movie
        });
      })
      await Promise.all(promises)
      return created

    },
    updateActor: async (parent, args) => {
      if (!args.id) throw new UserInputError(error.noID);
      if (args.sex && args.sex != "Male" && args.sex != "Female")
        throw new UserInputError(error.invalidBiodata);
      await models.Actor.update(args, {
        where: {
          id: args.id
        }
      });
      return await models.Actor.findOne({
        where: {
          id: args.id
        }
      });
    },
    deleteActor: async (parent, args) => {
      if (!args.id) throw new UserInputError(error.noID);
      await models.ActorMovie.destroy({
        where: {
          actor_id: args.id
        }
      });
      await models.Actor.destroy({
        where: {
          id: args.id
        }
      });
      return await models.Actor.findAll();
    },
    createMovie: async (parent, args) => {
      if (!args.name) throw new UserInputError(error.noName);
      if (!args.year_of_release) throw new UserInputError(error.noYear);
      if (!args.plot) throw new UserInputError(error.noPlot);
      if (!args.poster) throw new UserInputError(error.noPoster);
      if (!args.producer_id || args.producer_id == 0) throw new UserInputError(error.noProducer);
      if (!args.year_of_release > 0)
        throw new UserInputError(error.invalidYear);
      var created =  await models.Movie.create(args);
      const promises = args.addactor.map(actor => {
        return  models.ActorMovie.create({
          actor_id: actor,
          movie_id: created.id
        });
      })
      await Promise.all(promises)
      return created
    },
    updateMovie: async (parent, args) => {
      if (!args.id) throw new UserInputError(error.noID);
      if (args.year_of_release && !args.year_of_release > 0)
        throw new UserInputError(error.invalidYear);

      if(args.poster){
        var OldMovie = await models.Movie.findOne({
          where: {
            id: args.id
          }
        });
        if(OldMovie.poster != args.poster){
          const path = "uploads/" + OldMovie.poster;
          if (fs.existsSync(path)) {
            fs.unlink(path, (err) => {
              if (err) throw new UserInputError(err);
            });
          }
        }
      }
      await models.Movie.update(args, {
        where: {
          id: args.id
        }
      });
      return await models.Movie.findOne({
        where: {
          id: args.id
        }
      });
    },
    deleteMovie: async (parent, args) => {
      if (!args.id) throw new UserInputError(error.noID);
      await models.ActorMovie.destroy({
        where: {
          movie_id: args.id
        }
      });
      await models.Movie.destroy({
        where: {
          id: args.id
        }
      });
      return await models.Movie.findAll();
    },
    createProducer: async (parent, args) => {
      if (!args.name) throw new UserInputError(error.noName);
      if (!args.sex) throw new UserInputError(error.noSex);
      if (!args.dob) throw new UserInputError(error.noDOB);
      if (!args.biodata) throw new UserInputError(error.noBiodata);
      if (args.sex != "Male" && args.sex != "Female")
        throw new UserInputError(error.invalidBiodata);
      return await models.Producer.create(args);
    },
    updateProducer: async (parent, args) => {
      if (!args.id) throw new UserInputError(error.noID);
      if (args.sex && args.sex != "Male" && args.sex != "Female")
        throw new UserInputError(error.invalidBiodata);
      await models.Producer.update(args, {
        where: {
          id: args.id
        }
      });
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
    },
    createActorMovie: async (parent, args) => {
      if (!args.actor_id) throw new UserInputError(error.noActorID);
      if (!args.movie_id) throw new UserInputError(error.noMovieID);
      await models.ActorMovie.create(args);
      return {
        status: "Relationship created successfully"
      };
    },
    deleteActorMovie: async (parent, args) => {
      if (!args.actor_id) throw new UserInputError(error.noActorID);
      if (!args.movie_id) throw new UserInputError(error.noMovieID);
      await models.ActorMovie.destroy({
        where: {
          actor_id: args.actor_id,
          movie_id: args.movie_id
        }
      });
      return {
        status: "Relationship deleted successfully"
      };
    }
  }
};

export default resolvers;
