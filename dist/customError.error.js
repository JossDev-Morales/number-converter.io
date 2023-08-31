"use strict";

class customError extends Error {
  constructor(name, message, propertyObject) {
    super();
    this.name = name;
    this.message = message;
    if (propertyObject) {
      Object.keys(propertyObject).forEach(property => {
        this[property] = propertyObject[property];
      });
    }
  }
}
module.exports = customError;