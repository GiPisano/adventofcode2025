const fs = require("fs");
// Read the input file synchronously
const input = fs.readFileSync("input.txt", "utf-8");

// Split input into individual instructions
const instructions = input.trim().split("\n");
let position = 50;
let counter = 0;

for (const instruction of instructions) {
  const direction = instruction[0]; // "L" o "R"
  const steps = parseInt(instruction.slice(1));

  if (direction === "L") {
    position = (position - steps + 100) % 100;
  } else if (direction === "R") {
    position = (position + steps) % 100;
  }

  if (position === 0) {
    counter++;
  }
}

console.log("Password:", counter);
