import { makeStringjs as helpermakeString_makeStringjsjs } from "./helper/makeString";

var exportedObject = function truncate(str, length, truncateStr) {
  str = helpermakeString_makeStringjsjs(str);
  truncateStr = truncateStr || '...';
  length = ~~length;
  return str.length > length ? str.slice(0, length) + truncateStr : str;
};

export { exportedObject as truncatejs };
