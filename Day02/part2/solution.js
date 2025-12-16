const fs = require("fs");
// Read the input file synchronously
const input = fs.readFileSync("input.txt", "utf-8");

const ids = input.trim().split(",");
let total = 0;

for (let i = 0; i < ids.length; i++) {
  let start = parseInt(ids[i].split("-")[0]);
  let end = parseInt(ids[i].split("-")[1]);

  for (let j = start; j <= end; j++) {
    let strId = j + "";
    let idLength = strId.length;

    for (let k = 1; k <= idLength / 2; k++) {
      if (idLength % k != 0) {
        continue;
      }
      let repetitions = idLength / k;
      let pattern = strId.slice(0, k);

      let newString = pattern.repeat(repetitions);
      if (newString === strId) {
        total += parseInt(strId);
        break;
      }
    }
  }
}

console.log(total);
