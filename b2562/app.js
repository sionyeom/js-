const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

solution(input);

function solution(N) {
  let cnt = +input.length;
  let idx = 0;
  let max = 0;

  for (let i = 0; i < cnt; i++) {
    if (+input[i] > max) {
      max = +input[i];
      idx = i + 1;
    }
  }
  console.log(max + "\n" + idx);
}
