import { trim as trim_trim } from "./trim";

var mod_anonymus = function clean(str) {
  return trim_trim(str).replace(/\s\s+/g, ' ');
};

mod_anonymus = function clean(str) {
  return trim_trim(str).replace(/\s\s+/g, ' ');
};
export { mod_anonymus as clean };
