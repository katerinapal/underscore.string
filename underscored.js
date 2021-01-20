import { trim as trim_trim } from "./trim";

var mod_anonymus = function underscored(str) {
  return trim_trim(str).replace(/([a-z\d])([A-Z]+)/g, '$1_$2').replace(/[-\s]+/g, '_').toLowerCase();
};

export { mod_anonymus as underscored };
