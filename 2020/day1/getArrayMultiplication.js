const getArrayMultiplication = (arr) => {
  if (arr) {
    return arr.reduce((acc, n) => acc * n);
  }
  return 0;
};

module.exports = getArrayMultiplication;