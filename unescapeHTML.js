import { makeString as makeString_makeString } from "./helper/makeString";
import { htmlEntities as htmlEntities_htmlEntities } from "./helper/htmlEntities";

var mod_anonymus = function unescapeHTML(str) {
  return makeString_makeString(str).replace(/\&([^;]+);/g, function(entity, entityCode) {
    var match;

    if (entityCode in htmlEntities_htmlEntities) {
      return htmlEntities_htmlEntities[entityCode];
    /*eslint no-cond-assign: 0*/
    } else if (match = entityCode.match(/^#x([\da-fA-F]+)$/)) {
      return String.fromCharCode(parseInt(match[1], 16));
    /*eslint no-cond-assign: 0*/
    } else if (match = entityCode.match(/^#(\d+)$/)) {
      return String.fromCharCode(~~match[1]);
    } else {
      return entity;
    }
  });
};

export { mod_anonymus as unescapeHTML };
