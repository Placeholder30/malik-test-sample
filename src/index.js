const fetch = require("node-fetch");

exports.addNumbers = (x, y) => x + y;

/*
  These are the functions that need to be tested.
  Every function from here below needs to be tested.
*/
exports.subtractNumbers = (x, y) => x - y;

exports.makeAjaxCall = async () => {
  const resp = await fetch('https://api.github.com/users/BolajiOlajide');

  const response = await resp.json()
  return response.data;
};

exports.generateId = (name) => `random-${name}`;
