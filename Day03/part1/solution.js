const fs = require("fs");
// Read the input file synchronously
const input = fs.readFileSync("input.txt", "utf-8");

const banks = input.trim().split("\n");
let total = 0;

for (const bank of banks) {
  let maxBankValue = 0;

  for (let j = 0; j < bank.length; j++) {
    for (let k = j + 1; k < bank.length; k++) {
      let twoDigitNumber = parseInt(bank[j] + bank[k]);
      if (twoDigitNumber > maxBankValue) {
        maxBankValue = twoDigitNumber;
      }
    }
  }

  total += maxBankValue;
}

console.log(total);
