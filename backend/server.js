const http = require("http");
const app = require("./app");
const logger = require("./src/utils/logger");


// Function that returns a valid port, whether supplied as a number or as a string.
const normalizePort = val => {
  const port = parseInt(val, 10);
  if (isNaN(port)) {
    return val;
  }
  if (port >= 0) {
    return port;
  }
  return false;
};

const port = normalizePort(process.env.PORT || "3000");

// App listening port configuration
app.set('port', port);


// Function that looks for different errors and handles them appropriatly. It is then saved in the server.
const errorHandler = error => {
  if (error.syscall !== "listen") {
    throw error;
  }
  const address = server.address();
  const bind = typeof address === "string" ? "pipe " + address : "port: " + port;
  switch (error.code) {
    case "EACCES":
      console.error(bind + " requires elevated privileges.");
      process.exit(1);
      break;
    case "EADDRINUSE":
      console.error(bind + " is already in use.");
      process.exit(1);
      break;
    default:
      throw error;
  }
};


// Creation of the server with the native HTTP package of Node
const server = http.createServer(app);

// An event listener is registered on the server, logging in the console the port or named pipe on which the server is running.
server.on("error", errorHandler);
server.on("listening", () => {
  const address = server.address();
  const bind = typeof address === "string" ? "pipe " + address : "port " + port;
  console.log("Listening on " + bind);
});

// Server listening port configuration
server.listen(port, () => {
  logger.info(`Server is running on port ${port}`)
});