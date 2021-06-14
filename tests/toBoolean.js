import ext_assert from "assert";
import { toBoolean as toBoolean_toBoolean } from "../toBoolean";
var strictEqual = ext_assert.strictEqual;

test('#toBoolean', function() {
  strictEqual(toBoolean_toBoolean('false'), false);
  strictEqual(toBoolean_toBoolean('false'), false);
  strictEqual(toBoolean_toBoolean('False'), false);
  strictEqual(toBoolean_toBoolean('Falsy',null,['false', 'falsy']), false);
  strictEqual(toBoolean_toBoolean('true'), true);
  strictEqual(toBoolean_toBoolean('the truth', 'the truth', 'this is falsy'), true);
  strictEqual(toBoolean_toBoolean('this is falsy', 'the truth', 'this is falsy'), false);
  strictEqual(toBoolean_toBoolean('true'), true);
  strictEqual(toBoolean_toBoolean('trUe'), true);
  strictEqual(toBoolean_toBoolean('trUe', /tru?/i), true);
  strictEqual(toBoolean_toBoolean('something else'), undefined);
  strictEqual(toBoolean_toBoolean(function(){}), true);
  strictEqual(toBoolean_toBoolean(/regexp/), true);
  strictEqual(toBoolean_toBoolean(''), undefined);
  strictEqual(toBoolean_toBoolean(0), false);
  strictEqual(toBoolean_toBoolean(1), true);
  strictEqual(toBoolean_toBoolean('1'), true);
  strictEqual(toBoolean_toBoolean('0'), false);
  strictEqual(toBoolean_toBoolean(2), undefined);
  strictEqual(toBoolean_toBoolean('foo true bar'), undefined);
  strictEqual(toBoolean_toBoolean('foo true bar', /true/), true);
  strictEqual(toBoolean_toBoolean('foo FALSE bar', null, /FALSE/), false);
  strictEqual(toBoolean_toBoolean(' true  '), true);
});

