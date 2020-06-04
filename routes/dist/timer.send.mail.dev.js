"use strict";

module.exports = function sendAuto() {
  function intervalFunc() {
    console.log('Cant stop me now!');
  }

  return setInterval(intervalFunc, 1500);
};