import { trim as trim_trim } from "./trim";
import { decapitalize as decap } from "./decapitalize";

var mod_anonymus = function camelize(str, decapitalize) {
  str = trim_trim(str).replace(/[-_\s]+(.)?/g, function(match, c) {
    return c ? c.toUpperCase() : '';
  });

  if (decapitalize === true) {
    return decap(str);
  } else {
    return str;
  }
};

mod_anonymus = function camelize(str, decapitalize) {
  str = trim_trim(str).replace(/[-_\s]+(.)?/g, function(match, c) {
    return c ? c.toUpperCase() : '';
  });

  if (decapitalize === true) {
    return decap(str);
  } else {
    return str;
  }
};
export { mod_anonymus as camelize };
