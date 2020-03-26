import { isBlankjs as isBlank_isBlankjsjs } from "./isBlank";
import { trimjs as trim_trimjsjs } from "./trim";

var exportedObject = function words(str, delimiter) {
  if (isBlank_isBlankjsjs(str)) return [];
  return trim_trimjsjs(str, delimiter).split(delimiter || /\s+/);
};

export { exportedObject as wordsjs };;
