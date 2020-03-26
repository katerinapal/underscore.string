import deprecate from "util-deprecate";
import sprintfjs from "sprintf-js";

var sprintfjs_sprintfjs = deprecate(sprintfjs.sprintf,
  'sprintf() will be removed in the next major release, use the sprintf-js package instead.');

export { sprintfjs_sprintfjs as sprintfjs };
