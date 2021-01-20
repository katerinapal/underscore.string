import { pad as pad_pad } from "./pad";

var mod_anonymus = function rpad(str, length, padStr) {
  return pad_pad(str, length, padStr, 'right');
};

export { mod_anonymus as rpad };
