'use strict';
function decoder(encodedMessage) {
  return encodedMessage
    .split("")
    .reverse()
    .join("")
    .replace(/\$/g, " ")
    .replace(/9/g, "y")
    .replace(/8/g, "b")
    .replace(/7/g, "t")
    .replace(/5/g, "s")
    .replace(/6/g, "g")
    .replace(/4/g, "a")
    .replace(/3/g, "e");
}

module.exports = decoder;

