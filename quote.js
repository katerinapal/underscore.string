import { surround as surround_surround } from "./surround";

var mod_anonymus = function quote(str, quoteChar) {
  return surround_surround(str, quoteChar || '"');
};

mod_anonymus = function quote(str, quoteChar) {
  return surround_surround(str, quoteChar || '"');
};
export { mod_anonymus as quote };
