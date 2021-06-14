import ext_assert from "assert";
import { humanize as humanize_humanize } from "../humanize";
var equal = ext_assert.equal;


test('#humanize', function(){
  equal(humanize_humanize('the_humanize_string_method'), 'The humanize string method');
  equal(humanize_humanize('ThehumanizeStringMethod'), 'Thehumanize string method');
  equal(humanize_humanize('-ThehumanizeStringMethod'), 'Thehumanize string method');
  equal(humanize_humanize('the humanize string method'), 'The humanize string method');
  equal(humanize_humanize('the humanize_id string method_id'), 'The humanize id string method');
  equal(humanize_humanize('the  humanize string method  '), 'The humanize string method');
  equal(humanize_humanize('   capitalize dash-CamelCase_underscore trim  '), 'Capitalize dash camel case underscore trim');
  equal(humanize_humanize(123), '123');
  equal(humanize_humanize(''), '');
  equal(humanize_humanize(null), '');
  equal(humanize_humanize(undefined), '');
});

