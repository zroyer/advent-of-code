// Part One
const partOne = input.filter((row) => {
  const bounds = row.split(" ")[0].split('-');
  const letterCount = row.split(" ")[2].split(row.split(" ")[1].split(':')[0]).length - 1;
  return bounds[0] <= letterCount && bounds[1] >= letterCount
})

console.log(partOne.length)


// Part Two
const partTwo = test.filter((row) => {
  const position1 = row.split(" ")[2][row.split(" ")[0].split('-')[0] - 1];
  const position2 = row.split(" ")[2][row.split(" ")[0].split('-')[1] - 1];
  const letter = row.split(" ")[1].split(':')[0];
  return (position1 === letter || position2 === letter) && (position1 !== position2);
})

console.log(partTwo.length)