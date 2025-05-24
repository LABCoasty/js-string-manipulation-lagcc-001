'use strict';

function encoder(message) {
  return message
    .replace(/a/gi, "4")
    .replace(/e/gi, "3")
    .replace(/g/gi, "6")
    .replace(/s/gi, "5")
    .replace(/t/gi, "7")
    .replace(/b/gi, "8")
    .replace(/y/gi, "9")
    .replace(/\s/g, "$")
    .split("")
    .reverse()
    .join("");
}

module.exports = encoder;

