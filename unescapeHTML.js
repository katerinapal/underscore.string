import { makeStringjs as helpermakeString_makeStringjsjs } from "./helper/makeString";
import { htmlEntities as helperhtmlEntities_htmlEntitiesjs } from "./helper/htmlEntities";

var exportedObject = function unescapeHTML(str) {
  return helpermakeString_makeStringjsjs(str).replace(/\&([^;]+);/g, function(entity, entityCode) {
    var match;

    if (entityCode in helperhtmlEntities_htmlEntitiesjs) {
      return helperhtmlEntities_htmlEntitiesjs[entityCode];
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

export { exportedObject as unescapeHTMLjs };
