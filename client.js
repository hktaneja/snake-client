const net = require("net");
const { IP, PORT, INITIALS} = require("./constants");

// establishes a connection with the game server
const connect = function() {
  // Create a network connection with the specified IP and PORT
  const conn = net.createConnection({
    host: IP,// IP address here,
    port: PORT// PORT number here,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  //Handle connection established event
  conn.on('connect', () => {
    console.log("Successfully connected to game server");
    console.log('First connect callback');
    // Sending the message to the server
    conn.write(INITIALS);
  });
  conn.on('connect', () => {
    console.log('Second connect callback');
  });
  // Handle incoming data
  conn.on('data', (data) => {
    const message = data.toString();
    console.log('Received:', message);
  });
  return conn; //// Return the network connection object
};

module.exports = {connect};