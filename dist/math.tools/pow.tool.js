"use strict";

const mult = require("./mult.tool");
function pow(base, exponent) {
  let iterator = 1;
  let tempResult = exponent == 0 ? 1 : base;
  while (iterator < exponent) {
    iterator++;
    tempResult = mult(tempResult, base);
  }
  return tempResult;
}
module.exports = pow;