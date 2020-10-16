import ext_utildeprecate_deprecate from "util-deprecate";
import ext_sprintfjs_sprintfjs from "sprintf-js";

sprintfjs_sprintfjs = ext_utildeprecate_deprecate(ext_sprintfjs_sprintfjs.sprintf,
  'sprintf() will be removed in the next major release, use the sprintf-js package instead.');
var sprintfjs_sprintfjs;
export { sprintfjs_sprintfjs as sprintfjs };
