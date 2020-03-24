var exportedObject = function surround(str, wrapper) {
  return [wrapper, str, wrapper].join('');
};

export { exportedObject as surroundjs };;
