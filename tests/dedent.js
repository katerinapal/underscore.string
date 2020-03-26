import assert_assert from "assert";
import { dedentjs as dedent_dedentjsjs } from "../dedent";
var equal = assert_assert.equal;
var deepEqual = assert_assert.deepEqual;


test('#dedent', function() {
  equal(dedent_dedentjsjs('Hello\nWorld'), 'Hello\nWorld');
  equal(dedent_dedentjsjs('Hello\t\nWorld'), 'Hello\t\nWorld');
  equal(dedent_dedentjsjs('Hello \nWorld'), 'Hello \nWorld');
  equal(dedent_dedentjsjs('Hello\n  World'), 'Hello\n  World');
  equal(dedent_dedentjsjs('    Hello\n  World'), '  Hello\nWorld');
  equal(dedent_dedentjsjs('  Hello\nWorld'), '  Hello\nWorld');
  equal(dedent_dedentjsjs('  Hello World'), 'Hello World');
  equal(dedent_dedentjsjs('  Hello\n  World'), 'Hello\nWorld');
  equal(dedent_dedentjsjs('  Hello\n    World'), 'Hello\n  World');
  equal(dedent_dedentjsjs('\t\tHello\tWorld'), 'Hello\tWorld');
  equal(dedent_dedentjsjs('\t\tHello\n\t\tWorld'), 'Hello\nWorld');
  equal(dedent_dedentjsjs('Hello\n\t\tWorld'), 'Hello\n\t\tWorld');
  equal(dedent_dedentjsjs('\t\tHello\n\t\t\t\tWorld'), 'Hello\n\t\tWorld');
  equal(dedent_dedentjsjs('\t\tHello\r\n\t\t\t\tWorld'), 'Hello\r\n\t\tWorld');
  equal(dedent_dedentjsjs('\t\tHello\r\n\r\n\t\t\t\tWorld'), 'Hello\r\n\r\n\t\tWorld');
  equal(dedent_dedentjsjs('\t\tHello\n\n\n\n\t\t\t\tWorld'), 'Hello\n\n\n\n\t\tWorld');
  equal(dedent_dedentjsjs('\t\t\tHello\n\t\tWorld', '\\t'), '\t\tHello\n\tWorld');
  equal(dedent_dedentjsjs('    Hello\n    World', '  '), '  Hello\n  World');
  equal(dedent_dedentjsjs('    Hello\n    World', ''), '    Hello\n    World');
  equal(dedent_dedentjsjs('\t\tHello\n\n\n\n\t\t\t\tWorld', '\\t'), '\tHello\n\n\n\n\t\t\tWorld');
  equal(dedent_dedentjsjs('Hello\n\t\tWorld', '\t'), 'Hello\n\t\tWorld');
  equal(dedent_dedentjsjs('Hello\n  World', ' '), 'Hello\n  World');
  equal(dedent_dedentjsjs('  Hello\nWorld', ' '), '  Hello\nWorld');
  deepEqual(dedent_dedentjsjs(123), '123');
  deepEqual(dedent_dedentjsjs(''), '');
  deepEqual(dedent_dedentjsjs(null), '');
  deepEqual(dedent_dedentjsjs(undefined), '');
});

