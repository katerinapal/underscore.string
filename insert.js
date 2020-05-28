import { splicejs as splice_splicejsjs } from "./splice";

var exportedObject = function insert(str, i, substr) {
  return splice_splicejsjs(str, i, 0, substr);
};

export { exportedObject as insertjs };
