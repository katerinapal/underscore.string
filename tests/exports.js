import ext__ from "underscore";
import ext_assert from "assert";
import { exports as indexjs_exports } from "../";
var deepEqual = ext_assert.deepEqual;

test('#exports', function() {
  deepEqual(ext__.intersection(Object.keys(indexjs_exports()), ext__.functions(ext__)), [],
    'Conflicts exist between exports and underscore functions'
  );
});
