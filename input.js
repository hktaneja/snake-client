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
  console.log(data);
  if (data === '\u0003') {
    // Check for Ctrl + C input (ASCII code: \u0003)
    console.log('Terminating the game...');
    process.exit();
  } 
};


// Register handleUserInput as the "data" callback handler for stdin
process.stdin.on('data', handleUserInput);

module.exports = {setupInput};