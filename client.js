const net = require("net");
const { IP, PORT } = require("./constants");

// establishes a connection with the game server
const connect = function() {
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
    const message = 'Name: HKT';
    conn.write(message);
  });
  conn.on('connect', () => {
    console.log('Second connect callback');
    // Sending the message to the server
    //const message = 'Move: up';
    //conn.write(message);
  });

  // Handle incoming data
  conn.on('data', (data) => {
    const message = data.toString();
    console.log('Received:', message);
  });
  return conn;
};

module.exports = {connect};