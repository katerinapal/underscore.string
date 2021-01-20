import ext_assert from "assert";
import { dedent as dedent_dedent } from "../dedent";
var equal = ext_assert.equal;
var deepEqual = ext_assert.deepEqual;


test('#dedent', function() {
  equal(dedent_dedent('Hello\nWorld'), 'Hello\nWorld');
  equal(dedent_dedent('Hello\t\nWorld'), 'Hello\t\nWorld');
  equal(dedent_dedent('Hello \nWorld'), 'Hello \nWorld');
  equal(dedent_dedent('Hello\n  World'), 'Hello\n  World');
  equal(dedent_dedent('    Hello\n  World'), '  Hello\nWorld');
  equal(dedent_dedent('  Hello\nWorld'), '  Hello\nWorld');
  equal(dedent_dedent('  Hello World'), 'Hello World');
  equal(dedent_dedent('  Hello\n  World'), 'Hello\nWorld');
  equal(dedent_dedent('  Hello\n    World'), 'Hello\n  World');
  equal(dedent_dedent('\t\tHello\tWorld'), 'Hello\tWorld');
  equal(dedent_dedent('\t\tHello\n\t\tWorld'), 'Hello\nWorld');
  equal(dedent_dedent('Hello\n\t\tWorld'), 'Hello\n\t\tWorld');
  equal(dedent_dedent('\t\tHello\n\t\t\t\tWorld'), 'Hello\n\t\tWorld');
  equal(dedent_dedent('\t\tHello\r\n\t\t\t\tWorld'), 'Hello\r\n\t\tWorld');
  equal(dedent_dedent('\t\tHello\r\n\r\n\t\t\t\tWorld'), 'Hello\r\n\r\n\t\tWorld');
  equal(dedent_dedent('\t\tHello\n\n\n\n\t\t\t\tWorld'), 'Hello\n\n\n\n\t\tWorld');
  equal(dedent_dedent('\t\t\tHello\n\t\tWorld', '\\t'), '\t\tHello\n\tWorld');
  equal(dedent_dedent('    Hello\n    World', '  '), '  Hello\n  World');
  equal(dedent_dedent('    Hello\n    World', ''), '    Hello\n    World');
  equal(dedent_dedent('\t\tHello\n\n\n\n\t\t\t\tWorld', '\\t'), '\tHello\n\n\n\n\t\t\tWorld');
  equal(dedent_dedent('Hello\n\t\tWorld', '\t'), 'Hello\n\t\tWorld');
  equal(dedent_dedent('Hello\n  World', ' '), 'Hello\n  World');
  equal(dedent_dedent('  Hello\nWorld', ' '), '  Hello\nWorld');
  deepEqual(dedent_dedent(123), '123');
  deepEqual(dedent_dedent(''), '');
  deepEqual(dedent_dedent(null), '');
  deepEqual(dedent_dedent(undefined), '');
});

