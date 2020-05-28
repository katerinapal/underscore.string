import { capitalizejs as capitalize_capitalizejsjs } from "./capitalize";
import { underscoredjs as underscored_underscoredjsjs } from "./underscored";
import { trimjs as trim_trimjsjs } from "./trim";

var exportedObject = function humanize(str) {
  return capitalize_capitalizejsjs(trim_trimjsjs(underscored_underscoredjsjs(str).replace(/_id$/, '').replace(/_/g, ' ')));
};

export { exportedObject as humanizejs };
