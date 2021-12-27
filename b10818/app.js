const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");
let inputArr = [];

inputArr = input[1].split(" ");
solution(inputArr);

function solution(N) {
  let num1 = Number(N[0]);
  let num2 = Number(N[0]);

  for (let i = 0; i < Number(inputArr.length); i++) {
    if (Number(N[i]) > num1) {
      num1 = Number(N[i]);
    }
    if (Number(N[i]) < num2) {
      num2 = Number(N[i]);
    }
  }
  console.log(num2, num1);
}
