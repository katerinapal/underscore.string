import { trimjs as trim_trimjsjs } from "./trim";
import { dasherizejs as dasherize_dasherizejsjs } from "./dasherize";
import { cleanDiacriticsjs as cleanDiacritics_cleanDiacriticsjsjs } from "./cleanDiacritics";

var exportedObject = function slugify(str) {
  return trim_trimjsjs(dasherize_dasherizejsjs(cleanDiacritics_cleanDiacriticsjsjs(str).replace(/[^\w\s-]/g, '-').toLowerCase()), '-');
};

export { exportedObject as slugifyjs };
