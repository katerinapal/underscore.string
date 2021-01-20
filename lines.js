var mod_anonymus = function lines(str) {
  if (str == null) return [];
  return String(str).split(/\r\n?|\n/);
};

export { mod_anonymus as lines };
