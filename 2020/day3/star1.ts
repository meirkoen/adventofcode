const input = require('./input');

const getCountOfTrees = (input, stemDown, stepRight) => {
  let row = 0, col = 0, counter = 0;

  while (row < input.length - 1) {
    row += stemDown;
    col += stepRight;
    col = col % input[row].length;

    if (input[row][col] === '#') {
      counter++;
    }
  }
  
  return counter;
}

const res1 = getCountOfTrees(input, 1, 1);
const res2 = getCountOfTrees(input, 1, 3);
const res3 = getCountOfTrees(input, 1, 5);
const res4 = getCountOfTrees(input, 1, 7);
const res5 = getCountOfTrees(input, 2, 1);

console.log(res1);
console.log(res2);
console.log(res3);
console.log(res4);
console.log(res5);
console.log(res1*res2*res3*res4*res5);