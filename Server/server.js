var debug = require("debug")("view-engine:server");
var express = require("express");
var app = express();
var http = require("http");

import {port} from './config/config.json'

import models from './models/index.js';

app.use("/", express.static(__dirname + "/public"));

app.set("port", port);

var server = http.createServer(app);

models.sequelize
  .sync()
  .then(function() {
    server.listen(port, function() {
      console.log("Server Stated in Port :: " + port);
    });
    server.on("error", onError);
    server.on("listening", onListening);
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
