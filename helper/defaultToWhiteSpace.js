import { escapeRegExp as escapeRegExp_escapeRegExp } from "./escapeRegExp";

var mod_anonymus = function defaultToWhiteSpace(characters) {
  if (characters == null)
    return '\\s';
  else if (characters.source)
    return characters.source;
  else
    return '[' + escapeRegExp_escapeRegExp(characters) + ']';
};

export { mod_anonymus as defaultToWhiteSpace };
