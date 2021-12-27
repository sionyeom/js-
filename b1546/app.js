const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

let num = +input[0];
let score = input[1].split(" ");

const max = Math.max(...score);

solution(num, score);

function solution(N, testArr) {
  let sum = 0;
  for (let i = 0; i < N; i++) {
    sum += (testArr[i] / max) * 100;
  }
  console.log(sum / N);
}
