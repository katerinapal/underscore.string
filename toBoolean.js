'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.toBooleanjs = undefined;

var _trim = require('./trim');

function boolMatch(s, matchers) {
  var i,
      matcher,
      down = s.toLowerCase();
  matchers = [].concat(matchers);
  for (i = 0; i < matchers.length; i += 1) {
    matcher = matchers[i];
    if (!matcher) continue;
    if (matcher.test && matcher.test(s)) return true;
    if (matcher.toLowerCase() === down) return true;
  }
}

var exportedObject = function toBoolean(str, trueValues, falseValues) {
  if (typeof str === 'number') str = '' + str;
  if (typeof str !== 'string') return !!str;
  str = (0, _trim.trimjs)(str);
  if (boolMatch(str, trueValues || ['true', '1'])) return true;
  if (boolMatch(str, falseValues || ['false', '0'])) return false;
};

exports.toBooleanjs = exportedObject;
