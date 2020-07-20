var exportedObject = function lines(str) {
  if (str == null) return [];
  return String(str).split(/\r\n?|\n/);
};

export { exportedObject as linesjs };
