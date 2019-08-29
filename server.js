var debug = require("debug")("view-engine:server");
var express = require("express");
import { port } from "./config/config.json";
import models from "./models/index.js";
import { ApolloServer } from "apollo-server-express";

import typeDefs from "./schema/typeDefs";
import resolvers from "./schema/resolvers";

var bodyParser = require("body-parser");
var flash = require('connect-flash');
var cors = require('cors');

var app = express();

app.use(flash());
app.use(cors())

app.use(bodyParser.json({
  limit: '50mb'
}));
app.use(bodyParser.urlencoded({
  limit: '50mb',
  extended: true
}));

app.use("/", express.static(__dirname + "/uploads"));

var uploadRoutes = require('./routes/upload');
app.use('/upload', uploadRoutes);


const server = new ApolloServer({
  typeDefs,
  resolvers
});

server.applyMiddleware({
  app
});


models.sequelize
  .sync()
  .then(function() {
    app.listen(port, function() {
      console.log(
        `🚀Server ready at http://localhost:${port}${server.graphqlPath}`
      );
    });
    app.on("error", onError);
    app.on("listening", onListening);
  })
  .catch(function(e) {
    throw new Error(e);
  });

/* Event listener for HTTP server "error" event.*/
function onError(error) {
  if (error.syscall !== "listen") {
    throw error;
  }
  var bind = typeof port === "string" ? "Pipe " + port : "Port " + port;
  // handle specific listen errors with friendly messages
  switch (error.code) {
    case "EACCES":
      console.error(bind + " requires elevated privileges");
      process.exit(1);
      break;
    case "EADDRINUSE":
      console.error(bind + " is already in use");
      process.exit(1);
      break;
    default:
      throw error;
  }
}

/* Event listener for HTTP server "listening" event.*/
function onListening() {
  var addr = server.address();
  var bind = typeof addr === "string" ? "pipe " + addr : "port " + addr.port;
  debug("Server Started");
  debug("Listening on " + bind);
}
