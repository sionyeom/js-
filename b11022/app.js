const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

let tryNum = Number(input[0]);
let answer = "";

for (let i = 1; i <= tryNum; i++) {
  let num = input[i].split(" ");
  answer +=
    "Case #" +
    i +
    ": " +
    Number(num[0]) +
    " + " +
    Number(num[1]) +
    " = " +
    (Number(num[0]) + Number(num[1])) +
    "\n";
}

console.log(answer);
