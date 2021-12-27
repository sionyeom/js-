const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");
let num = +input[0];

solution(num, input);

function solution(N, testArr) {
  for (let i = 1; i <= N; i++) {
    let arr = testArr[i];
    let sum = 0;
    let bn = 0;
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] == "O") {
        bn++;
        sum += bn;
      } else {
        bn = 0;
      }
    }
    console.log(sum);
  }
}
