import { splice as splice_splice } from "./splice";

var mod_anonymus = function insert(str, i, substr) {
  return splice_splice(str, i, 0, substr);
};

export { mod_anonymus as insert };
