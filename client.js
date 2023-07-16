const net = require("net");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: '172.19.104.119',// IP address here,
    port: 50541// PORT number here,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");
  // Handle incoming data
  conn.on('data', (data) => {
  const message = data.toString();
  console.log('Received:', message);
  // Additional logic for processing the received data
});
  return conn;
};

console.log("Connecting ...");
connect();
module.exports = {connect};