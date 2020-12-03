// https://adventofcode.com/2020/day/3

// Part One
const findTrees = (xIncrement, yIncrement) => {
  const rows = input.map(row => row.split(""));
  let x = 0;
  let y = 0;
  let treeCount = 0;

  while (y < rows.length) {
    rows[y][x] === '#' && treeCount++;
    y = y + yIncrement;
    x = (x + xIncrement) % rows[0].length;
  }
  return treeCount;
}

const result1 = findTrees(3, 1);
// 268


// Part Two
const slopes = [
  [1, 1],
  [3, 1],
  [5, 1],
  [7, 1],
  [1, 2]
];

const result2 = slopes.reduce((acc, row) => {
  return acc * findTrees(row[0], row[1]);
}, 1);
// 3093068400


