import ext_assert from "assert";
import { isBlank as isBlank_isBlank } from "../isBlank";
var ok = ext_assert.ok;


test('#isBlank', function(){
  ok(isBlank_isBlank(''));
  ok(isBlank_isBlank(' '));
  ok(isBlank_isBlank('\n'));
  ok(!isBlank_isBlank('a'));
  ok(!isBlank_isBlank('0'));
  ok(!isBlank_isBlank(0));
  ok(isBlank_isBlank(''));
  ok(isBlank_isBlank(null));
  ok(isBlank_isBlank(undefined));
  ok(!isBlank_isBlank(false));
});

