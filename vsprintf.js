import deprecate from "util-deprecate";
import sprintfjs from "sprintf-js";

var vsprintfjs_vsprintfjs = deprecate(sprintfjs.vsprintf,
  'vsprintf() will be removed in the next major release, use the sprintf-js package instead.');

export { vsprintfjs_vsprintfjs as vsprintfjs };
