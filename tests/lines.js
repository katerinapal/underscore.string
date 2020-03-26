import assert_assert from "assert";
import { linesjs as lines_linesjsjs } from "../lines";
var equal = assert_assert.equal;
var deepEqual = assert_assert.deepEqual;


test('#lines', function() {
  equal(lines_linesjsjs('Hello\nWorld').length, 2);
  equal(lines_linesjsjs('Hello\rWorld').length, 2);
  equal(lines_linesjsjs('Hello World').length, 1);
  equal(lines_linesjsjs('\r\n\n\r').length, 4);
  equal(lines_linesjsjs('Hello\r\r\nWorld').length, 3);
  equal(lines_linesjsjs('Hello\r\rWorld').length, 3);
  equal(lines_linesjsjs(123).length, 1);
  deepEqual(lines_linesjsjs(''), ['']);
  deepEqual(lines_linesjsjs(null), []);
  deepEqual(lines_linesjsjs(undefined), []);
  deepEqual(lines_linesjsjs('Hello\rWorld'), ['Hello', 'World']);
  deepEqual(lines_linesjsjs('Hello\r\nWorld'), ['Hello', 'World']);
});

