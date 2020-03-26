import _ from "underscore";
import assert_assert from "assert";
import { s as _sjs } from "../";
var deepEqual = assert_assert.deepEqual;

test('#exports', function() {
  deepEqual(_.intersection(Object.keys(_sjs.exports()), _.functions(_)), [],
    'Conflicts exist between exports and underscore functions'
  );
});
