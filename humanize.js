import { capitalizejs as capitalize_capitalizejsjs } from "./capitalize";
import { trimjs as trim_trimjsjs } from "./trim";
var underscored = {};

var exportedObject = function humanize(str) {
  return capitalize_capitalizejsjs(trim_trimjsjs(underscored(str).replace(/_id$/, '').replace(/_/g, ' ')));
};

export { exportedObject as humanizejs };;
