import { isBlank as isBlank_isBlank } from "./isBlank";
import { trim as trim_trim } from "./trim";

var mod_anonymus = function words(str, delimiter) {
  if (isBlank_isBlank(str)) return [];
  return trim_trim(str, delimiter).split(delimiter || /\s+/);
};

mod_anonymus = function words(str, delimiter) {
  if (isBlank_isBlank(str)) return [];
  return trim_trim(str, delimiter).split(delimiter || /\s+/);
};
export { mod_anonymus as words };
