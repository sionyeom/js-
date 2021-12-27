const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");
const str = input[0];
solution(str);

function solution(str) {
  let answer = Array(26).fill(-1);
  let idx = 0;
  for (let i = 97; i <= 122; i++) {
    for (let j = 0; j < str.length; j++) {
      if (String.fromCharCode(i) == str[j]) {
        if (+answer[idx] === -1) {
          answer[idx] = j;
        }
      }
    }
    idx++;
  }
  console.log(answer.join(" "));
}
