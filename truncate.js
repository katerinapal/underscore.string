import { makeString as makeString_makeString } from "./helper/makeString";

var mod_anonymus = function truncate(str, length, truncateStr) {
  str = makeString_makeString(str);
  truncateStr = truncateStr || '...';
  length = ~~length;
  return str.length > length ? str.slice(0, length) + truncateStr : str;
};

mod_anonymus = function truncate(str, length, truncateStr) {
  str = makeString_makeString(str);
  truncateStr = truncateStr || '...';
  length = ~~length;
  return str.length > length ? str.slice(0, length) + truncateStr : str;
};
export { mod_anonymus as truncate };
