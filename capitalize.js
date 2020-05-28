import { makeStringjs as helpermakeString_makeStringjsjs } from "./helper/makeString";

var exportedObject = function capitalize(str, lowercaseRest) {
  str = helpermakeString_makeStringjsjs(str);
  var remainingChars = !lowercaseRest ? str.slice(1) : str.slice(1).toLowerCase();

  return str.charAt(0).toUpperCase() + remainingChars;
};

export { exportedObject as capitalizejs };
