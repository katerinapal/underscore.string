import ext_assert_assert from "assert";
import { toBooleanjs as toBoolean_toBooleanjsjs } from "../toBoolean";
var strictEqual = ext_assert_assert.strictEqual;

test('#toBoolean', function() {
  strictEqual(toBoolean_toBooleanjsjs('false'), false);
  strictEqual(toBoolean_toBooleanjsjs('false'), false);
  strictEqual(toBoolean_toBooleanjsjs('False'), false);
  strictEqual(toBoolean_toBooleanjsjs('Falsy',null,['false', 'falsy']), false);
  strictEqual(toBoolean_toBooleanjsjs('true'), true);
  strictEqual(toBoolean_toBooleanjsjs('the truth', 'the truth', 'this is falsy'), true);
  strictEqual(toBoolean_toBooleanjsjs('this is falsy', 'the truth', 'this is falsy'), false);
  strictEqual(toBoolean_toBooleanjsjs('true'), true);
  strictEqual(toBoolean_toBooleanjsjs('trUe'), true);
  strictEqual(toBoolean_toBooleanjsjs('trUe', /tru?/i), true);
  strictEqual(toBoolean_toBooleanjsjs('something else'), undefined);
  strictEqual(toBoolean_toBooleanjsjs(function(){}), true);
  strictEqual(toBoolean_toBooleanjsjs(/regexp/), true);
  strictEqual(toBoolean_toBooleanjsjs(''), undefined);
  strictEqual(toBoolean_toBooleanjsjs(0), false);
  strictEqual(toBoolean_toBooleanjsjs(1), true);
  strictEqual(toBoolean_toBooleanjsjs('1'), true);
  strictEqual(toBoolean_toBooleanjsjs('0'), false);
  strictEqual(toBoolean_toBooleanjsjs(2), undefined);
  strictEqual(toBoolean_toBooleanjsjs('foo true bar'), undefined);
  strictEqual(toBoolean_toBooleanjsjs('foo true bar', /true/), true);
  strictEqual(toBoolean_toBooleanjsjs('foo FALSE bar', null, /FALSE/), false);
  strictEqual(toBoolean_toBooleanjsjs(' true  '), true);
});

