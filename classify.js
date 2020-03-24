import { capitalizejs as capitalize_capitalizejsjs } from "./capitalize";
import { camelizejs as camelize_camelizejsjs } from "./camelize";
import { makeStringjs as helpermakeString_makeStringjsjs } from "./helper/makeString";

var exportedObject = function classify(str) {
  str = helpermakeString_makeStringjsjs(str);
  return capitalize_capitalizejsjs(camelize_camelizejsjs(str.replace(/[\W_]/g, ' ')).replace(/\s/g, ''));
};

export { exportedObject as classifyjs };;
