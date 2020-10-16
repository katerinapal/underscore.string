import ext_underscore__ from "underscore";
import ext_assert_assert from "assert";
import { s as index_sjs } from "../";
var deepEqual = ext_assert_assert.deepEqual;

test('#exports', function() {
  deepEqual(ext_underscore__.intersection(Object.keys(index_sjs.exports()), ext_underscore__.functions(ext_underscore__)), [],
    'Conflicts exist between exports and underscore functions'
  );
});
