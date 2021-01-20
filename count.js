import { makeString as makeString_makeString } from "./helper/makeString";

var mod_anonymus = function(str, substr) {
  str = makeString_makeString(str);
  substr = makeString_makeString(substr);

  if (str.length === 0 || substr.length === 0) return 0;
  
  return str.split(substr).length - 1;
};

export { mod_anonymus as count };
