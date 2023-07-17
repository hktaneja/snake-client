const { connect } = require("./client");
const { setupInput } = require("./input");
// Establish a connection to the game server
console.log("Connecting ...");
const conn = connect();
// Set up the input interface to handle user input
setupInput(conn);


