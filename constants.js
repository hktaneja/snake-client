const IP = 'localhost';
const PORT = 50541;
const MOVE_UP_KEY = 'w';
const MOVE_LEFT_KEY = 'a';
const MOVE_DOWN_KEY = 's';
const MOVE_RIGHT_KEY = 'd';
const MESSAGES = {
  '1': 'Say: Go Away',
  '2': 'Say: I am not afraid!',
  '3': 'Say: I am not scared',
  '4': 'Say: I will kill you',
  '5': 'Say: Yoy are about to die!'
};
const CTRL_C = '\u0003';

//EXPORT
module.exports = {
  IP,
  PORT,
  MOVE_UP_KEY,
  MOVE_LEFT_KEY,
  MOVE_DOWN_KEY,
  MOVE_RIGHT_KEY,
  MESSAGES,
  CTRL_C
};