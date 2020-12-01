const getArrayMultiplication = require('./getArrayMultiplication');
const input = require('./input');

const getPair = (list, sum) => {
  const dict = {};
  list.forEach(num => dict[num] = true);

  for (let i = 0; i < list.length; i++) {
    const current = list[i];
    const complement = sum - current;

    if (dict[complement]) {
      return [current, complement];
    }
  }
  return false;
}

const res = getArrayMultiplication(getPair(input, 2020));
console.log(res);

module.exports = getPair;