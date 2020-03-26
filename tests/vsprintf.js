import assert_assert from "assert";
import { vsprintfjs as vsprintf_vsprintfjsjs } from "../vsprintf";
var equal = assert_assert.equal;


test('#vsprintf', function() {
  equal(vsprintf_vsprintfjsjs('Hello %s', ['me']), 'Hello me', 'basic');
  equal(vsprintf_vsprintfjsjs('Hello %s', ['me']), 'Hello me', 'object');
  equal(vsprintf_vsprintfjsjs('%.1f', [1.22222]), '1.2', 'round');
  equal(vsprintf_vsprintfjsjs('%.1f', [1.17]), '1.2', 'round 2');
  equal(vsprintf_vsprintfjsjs('%(id)d - %(name)s', [{id: 824, name: 'Hello World'}]), '824 - Hello World', 'Named replacement works');
  equal(vsprintf_vsprintfjsjs('%(args[0].id)d - %(args[1].name)s', [{args: [{id: 824}, {name: 'Hello World'}]}]), '824 - Hello World', 'Named replacement with arrays works');
});

