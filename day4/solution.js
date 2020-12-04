const inputRows = input.split("\n\n");
const fields = ['byr', 'iyr', 'eyr', 'hgt', 'hcl', 'ecl', 'pid']

// Part One
let resultOne = 0;
for (const row of inputRows) {
  fields.every(field => row.includes(field)) && resultOne++;
}

console.log(resultOne);

// Part Two
let resultTwo = 0;

const validator = (field, value) => {
  if (field === "byr") return 1920 <= value && value <= 2002;
  if (field === "iyr") return 2010 <= value && value <= 2020;
  if (field === "eyr") return 2020 <= value && value <= 2030;
  if (field === "hgt") {
    heights = value.match(/^(\d+)(cm|in)$/);
    return (
      (heights?.[2] == "in" && 59 <= heights[1] && heights[1] <= 76) ||
      (heights?.[2] == "cm" && 150 <= heights[1] && heights[1] <= 193)
    );
  }
  if (field === "hcl") return /^#[0-9a-f]{6}$/.test(value);
  if (field === "ecl") return /^(amb|blu|brn|gry|grn|hzl|oth)$/.test(value);
  if (field === "pid") return /^\d{9}$/.test(value);
};

for (const row of inputRows) {
  if (
    fields.every((field) => {
      let keyValue = row
        .replace(/\n/g, " ")
        .match(new RegExp(field + ":(\\S+)"));
      return keyValue && validator(field, keyValue[1]);
    })
  ) {
    resultTwo++;
  }
}

console.log(resultTwo);
