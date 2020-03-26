'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var exportedObject = function chop(str, step) {
  if (str == null) return [];
  str = String(str);
  step = ~~step;
  return step > 0 ? str.match(new RegExp('.{1,' + step + '}', 'g')) : [str];
};

exports.chopjs = exportedObject;
;
