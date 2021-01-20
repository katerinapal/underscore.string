import { capitalize as capitalize_capitalize } from "./capitalize";
import { underscored as underscored_underscored } from "./underscored";
import { trim as trim_trim } from "./trim";

var mod_anonymus = function humanize(str) {
  return capitalize_capitalize(trim_trim(underscored_underscored(str).replace(/_id$/, '').replace(/_/g, ' ')));
};

export { mod_anonymus as humanize };
