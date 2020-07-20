import ext_assert_assert from "assert";
import { isBlankjs as isBlank_isBlankjsjs } from "../isBlank";
var ok = ext_assert_assert.ok;


test('#isBlank', function(){
  ok(isBlank_isBlankjsjs(''));
  ok(isBlank_isBlankjsjs(' '));
  ok(isBlank_isBlankjsjs('\n'));
  ok(!isBlank_isBlankjsjs('a'));
  ok(!isBlank_isBlankjsjs('0'));
  ok(!isBlank_isBlankjsjs(0));
  ok(isBlank_isBlankjsjs(''));
  ok(isBlank_isBlankjsjs(null));
  ok(isBlank_isBlankjsjs(undefined));
  ok(!isBlank_isBlankjsjs(false));
});

