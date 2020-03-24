import assert_assert from "assert";
import { humanizejs as humanize_humanizejsjs } from "../humanize";
var equal = assert_assert.equal;


test('#humanize', function(){
  equal(humanize_humanizejsjs('the_humanize_string_method'), 'The humanize string method');
  equal(humanize_humanizejsjs('ThehumanizeStringMethod'), 'Thehumanize string method');
  equal(humanize_humanizejsjs('-ThehumanizeStringMethod'), 'Thehumanize string method');
  equal(humanize_humanizejsjs('the humanize string method'), 'The humanize string method');
  equal(humanize_humanizejsjs('the humanize_id string method_id'), 'The humanize id string method');
  equal(humanize_humanizejsjs('the  humanize string method  '), 'The humanize string method');
  equal(humanize_humanizejsjs('   capitalize dash-CamelCase_underscore trim  '), 'Capitalize dash camel case underscore trim');
  equal(humanize_humanizejsjs(123), '123');
  equal(humanize_humanizejsjs(''), '');
  equal(humanize_humanizejsjs(null), '');
  equal(humanize_humanizejsjs(undefined), '');
});

