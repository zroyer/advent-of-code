// https://adventofcode.com/2020/day/1

// Part One
for (let i = 0; i < input.length - 1; i++) {
  for (let j = i + 1; j < input.length; j++) {
    if (input[i] + input[j] === 2020) {
      console.log(input[i] * input[j]);
      // 691771
    }
  }
}


// Part Two
while (input.length > 1) {
  first = input.shift();
  for (let i = 0; i < input.length - 1; i++) {
    for (let j = i + 1; j < input.length; j++) {
      if (first + input[i] + input[j] === 2020) {
        console.log(first * input[i] * input[j]);
        // 232508760
      }
    }
  }
}




