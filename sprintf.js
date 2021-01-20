import ext_deprecate from "util-deprecate";
import ext_sprintfjs from "sprintf-js";

mod_sprintfjs = ext_deprecate(ext_sprintfjs.sprintf,
  'sprintf() will be removed in the next major release, use the sprintf-js package instead.');
var mod_sprintfjs;
export { mod_sprintfjs as sprintfjs };
