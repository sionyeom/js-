const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");
solution(input[0]);

function solution(str) {
  let answer = str.split(" ");
  let cnt = 0;
  for (let i = 0; i < answer.length; i++) {
    if (answer[i].length !== 0) {
      cnt++;
    }
  }
  console.log(cnt);
}
