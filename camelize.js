import { trimjs as trim_trimjsjs } from "./trim";
import { decapitalizejs as decapitalize_decapitalizejsjs } from "./decapitalize";

var exportedObject = function camelize(str, decapitalize) {
  str = trim_trimjsjs(str).replace(/[-_\s]+(.)?/g, function(match, c) {
    return c ? c.toUpperCase() : '';
  });

  if (decapitalize === true) {
    return decapitalize_decapitalizejsjs(str);
  } else {
    return str;
  }
};

export { exportedObject as camelizejs };;
