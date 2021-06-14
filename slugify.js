import { trim as trim_trim } from "./trim";
import { dasherize as dasherize_dasherize } from "./dasherize";
import { cleanDiacritics as cleanDiacritics_cleanDiacritics } from "./cleanDiacritics";

var mod_anonymus = function slugify(str) {
  return trim_trim(dasherize_dasherize(cleanDiacritics_cleanDiacritics(str).replace(/[^\w\s-]/g, '-').toLowerCase()), '-');
};

mod_anonymus = function slugify(str) {
  return trim_trim(dasherize_dasherize(cleanDiacritics_cleanDiacritics(str).replace(/[^\w\s-]/g, '-').toLowerCase()), '-');
};
export { mod_anonymus as slugify };
