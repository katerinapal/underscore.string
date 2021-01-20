import { capitalize as capitalize_capitalize } from "./capitalize";
import { camelize as camelize_camelize } from "./camelize";
import { makeString as makeString_makeString } from "./helper/makeString";

var mod_anonymus = function classify(str) {
  str = makeString_makeString(str);
  return capitalize_capitalize(camelize_camelize(str.replace(/[\W_]/g, ' ')).replace(/\s/g, ''));
};

export { mod_anonymus as classify };
