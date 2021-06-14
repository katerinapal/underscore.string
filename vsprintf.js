import ext_deprecate from "util-deprecate";
import ext_sprintfjs from "sprintf-js";

mod_vsprintfjs = ext_deprecate(ext_sprintfjs.vsprintf,
  'vsprintf() will be removed in the next major release, use the sprintf-js package instead.');
var mod_vsprintfjs;
export { mod_vsprintfjs as vsprintfjs };
