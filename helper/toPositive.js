var exportedObject = function toPositive(number) {
  return number < 0 ? 0 : (+number || 0);
};

export { exportedObject as toPositivejs };;
