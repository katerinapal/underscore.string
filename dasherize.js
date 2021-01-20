import { trim as trim_trim } from "./trim";

var mod_anonymus = function dasherize(str) {
  return trim_trim(str).replace(/([A-Z])/g, '-$1').replace(/[-_\s]+/g, '-').toLowerCase();
};

export { mod_anonymus as dasherize };
