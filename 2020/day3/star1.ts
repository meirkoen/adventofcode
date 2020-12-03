const input = require('./input');

const getCountOfTrees = (input) => {
  let row = 0, col = 0, counter = 0;

  while (row < input.length - 1) {
    console.log(input[row][col]);
    row++;
    col += 3;
    col = col % input[row].length;

    if (input[row][col] === '#') {
      counter++;
    }
  }
  
  return counter;
}

const res = getCountOfTrees(input);
console.log(res);