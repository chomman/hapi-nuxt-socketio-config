"use strict";

const Hapi = require("hapi");
const HapiNuxt = require("hapi-nuxt");

const host = process.env.HOST || "127.0.0.1";
const port = process.env.PORT || 3000;

// Server configs
const server = new Hapi.Server({
  port: port,
  host: host
});

(async () => {
  try {
    // Register plugins
    await server.register({
      plugin: HapiNuxt,
      options: {}
    });

    // Import and initialize Socket.io
    const io = require("socket.io")(server.listener);
    // Configure Socket.io
    io.on("connection", function(socket) {
      console.log("A user connected");
      socket.on("disconnect", function() {
        console.log("A user disconnected");
      });
      // Create custom event called "chat message"
      socket.on("chat message", function(msg) {
        console.log(`Message: ${msg}`);
        io.emit("chat message", msg);
      });
    });

    // Start the server and log the following message
    await server.start();
    console.log(`hapi server is running at ${server.info.uri}`);
  }
  // Throw any errors
  catch (err) {
    console.log(err);
  }
})();
