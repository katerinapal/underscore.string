import ext_assert from "assert";
import { reverse as reverse_reverse } from "../reverse";
var equal = ext_assert.equal;


test('#reverse', function() {
  equal(reverse_reverse('foo'), 'oof' );
  equal(reverse_reverse('foobar'), 'raboof' );
  equal(reverse_reverse('foo bar'), 'rab oof' );
  equal(reverse_reverse('saippuakauppias'), 'saippuakauppias' );
  equal(reverse_reverse(123), '321', 'Non string');
  equal(reverse_reverse(123.45), '54.321', 'Non string');
  equal(reverse_reverse(''), '', 'reversing empty string returns empty string' );
  equal(reverse_reverse(null), '', 'reversing null returns empty string' );
  equal(reverse_reverse(undefined), '', 'reversing undefined returns empty string' );
});

