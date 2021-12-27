const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");
const tn = +input[0];
const strNum = input[1];

solution(tn, strNum);

function solution(N, strNum) {
  let sum = 0;
  for (let i = 0; i < N; i++) {
    sum += +strNum[i];
  }
  console.log(sum);
}
