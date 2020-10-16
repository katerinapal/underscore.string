import { makeStringjs as helpermakeString_makeStringjsjs } from "./helper/makeString";

var exportedObject = function stripTags(str) {
  return helpermakeString_makeStringjsjs(str).replace(/<\/?[^>]+>/g, '');
};

export { exportedObject as stripTagsjs };
