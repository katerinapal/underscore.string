import { escapeRegExpjs as escapeRegExp_escapeRegExpjsjs } from "./escapeRegExp";

var exportedObject = function defaultToWhiteSpace(characters) {
  if (characters == null)
    return '\\s';
  else if (characters.source)
    return characters.source;
  else
    return '[' + escapeRegExp_escapeRegExpjsjs(characters) + ']';
};

export { exportedObject as defaultToWhiteSpacejs };;
