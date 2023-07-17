const { MOVE_UP_KEY, MOVE_LEFT_KEY, MOVE_DOWN_KEY, MOVE_RIGHT_KEY, MESSAGES, CTRL_C} = require("./constants");
// Stores the active TCP connection object.
let connection;
// setup interface to handle user input from stdin

const setupInput = (conn) => {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  //register an event listener for stdin
  stdin.on("data", handleUserInput);
  return stdin;
};


// this function check for the ctrl + c input and terminate the game.
const handleUserInput = (data) => {
  if (data === CTRL_C) {
    // Check for Ctrl + C input (ASCII code: \u0003)
    console.log('Terminating the game...');
    process.exit();
  }
  if (data === MOVE_UP_KEY) {
    connection.write('Move: up');
  }
  if (data === MOVE_LEFT_KEY) {
    connection.write('Move: left');
  }
  if (data === MOVE_DOWN_KEY) {
    connection.write('Move: down');
  }
  if (data === MOVE_RIGHT_KEY) {
    connection.write('Move: right');
  }
  if (MESSAGES[data]) {
    connection.write(MESSAGES[data]);
  }

};


// Register handleUserInput as the "data" callback handler for stdin
process.stdin.on('data', handleUserInput);

module.exports = {setupInput};