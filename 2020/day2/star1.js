const input = require('./input');

const getCount = (input) => {
  let counter = 0;

  for (let i = 0; i < input.length; i++) {
    const { min, max, char, password } = input[i];
    let charCount = 0;

    password.split('').forEach(c => {
      if (c === char) {
        charCount++;
      }
    });

    if (charCount >= min && charCount <= max) {
      counter++;
    }
  }

  return counter;
}

const res = getCount(input);
console.log(res);