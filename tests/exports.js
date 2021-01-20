import ext__ from "underscore";
import ext_assert from "assert";
import { s as _s } from "../";
var deepEqual = ext_assert.deepEqual;

test('#exports', function() {
  deepEqual(ext__.intersection(Object.keys(_s.exports()), ext__.functions(ext__)), [],
    'Conflicts exist between exports and underscore functions'
  );
});
