import assert_assert from "assert";
import { reversejs as reverse_reversejsjs } from "../reverse";
var equal = assert_assert.equal;


test('#reverse', function() {
  equal(reverse_reversejsjs('foo'), 'oof' );
  equal(reverse_reversejsjs('foobar'), 'raboof' );
  equal(reverse_reversejsjs('foo bar'), 'rab oof' );
  equal(reverse_reversejsjs('saippuakauppias'), 'saippuakauppias' );
  equal(reverse_reversejsjs(123), '321', 'Non string');
  equal(reverse_reversejsjs(123.45), '54.321', 'Non string');
  equal(reverse_reversejsjs(''), '', 'reversing empty string returns empty string' );
  equal(reverse_reversejsjs(null), '', 'reversing null returns empty string' );
  equal(reverse_reversejsjs(undefined), '', 'reversing undefined returns empty string' );
});

