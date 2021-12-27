const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

let N = Number(input[0]);

for (let i = 0; i < N; i++) {
  let answer = "";

  for (let j = N - 1; j >= 0; j--) {
    answer += j <= i ? "*" : " ";
  }
  console.log(answer);
}
