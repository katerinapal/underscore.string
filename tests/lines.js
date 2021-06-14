import ext_assert from "assert";
import { lines as lines_lines } from "../lines";
var equal = ext_assert.equal;
var deepEqual = ext_assert.deepEqual;


test('#lines', function() {
  equal(lines_lines('Hello\nWorld').length, 2);
  equal(lines_lines('Hello\rWorld').length, 2);
  equal(lines_lines('Hello World').length, 1);
  equal(lines_lines('\r\n\n\r').length, 4);
  equal(lines_lines('Hello\r\r\nWorld').length, 3);
  equal(lines_lines('Hello\r\rWorld').length, 3);
  equal(lines_lines(123).length, 1);
  deepEqual(lines_lines(''), ['']);
  deepEqual(lines_lines(null), []);
  deepEqual(lines_lines(undefined), []);
  deepEqual(lines_lines('Hello\rWorld'), ['Hello', 'World']);
  deepEqual(lines_lines('Hello\r\nWorld'), ['Hello', 'World']);
});

