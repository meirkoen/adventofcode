const input = require('./input');

const getCount = (input) => {
  let counter = 0;

  for (let i = 0; i < input.length; i++) {
    const { min, max, char, password } = input[i];

    const hasMinChar = password.charAt(min - 1) === char;
    const hasMaxChar = password.charAt(max - 1) === char;

    if (hasMinChar ^ hasMaxChar) {
      counter++;
    }
  }

  return counter;
}

const res = getCount(input);
console.log(res);