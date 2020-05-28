import ext_utildeprecate_deprecate from "util-deprecate";
import ext_sprintfjs_sprintfjs from "sprintf-js";
var vsprintfjs_vsprintfjs;

vsprintfjs_vsprintfjs = ext_utildeprecate_deprecate(ext_sprintfjs_sprintfjs.vsprintf,
  'vsprintf() will be removed in the next major release, use the sprintf-js package instead.');
export { vsprintfjs_vsprintfjs as vsprintfjs };
