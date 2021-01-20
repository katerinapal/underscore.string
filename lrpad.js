import { pad as pad_pad } from "./pad";

var mod_anonymus = function lrpad(str, length, padStr) {
  return pad_pad(str, length, padStr, 'both');
};

export { mod_anonymus as lrpad };
