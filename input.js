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

const MOVE_UP_KEY = 'w';
const MOVE_LEFT_KEY = 'a';
const MOVE_DOWN_KEY = 's';
const MOVE_RIGHT_KEY = 'd';

const MESSAGE = 'Say: Go Away';

// this function check for the ctrl + c input and terminate the game.
const handleUserInput = (data) => {
  if (data === '\u0003') {
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
  connection.write(MESSAGE);

};


// Register handleUserInput as the "data" callback handler for stdin
process.stdin.on('data', handleUserInput);

module.exports = {setupInput};