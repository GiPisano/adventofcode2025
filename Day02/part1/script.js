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

    if (!(idLength % 2)) {
      let halfLength = idLength / 2;

      let leftId = strId.slice(0, halfLength);
      let rightId = strId.slice(halfLength);

      if (leftId == rightId) {
        total += j;
      }
    }
  }
}
console.log(total);
