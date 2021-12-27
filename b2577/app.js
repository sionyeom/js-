const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");
let num = +input[0] * +input[1] * +input[2];
solution(num);

function solution(N) {
  let num = N;
  let tryNum = String(num).length - 1;
  for (let i = 0; i <= 9; i++) {
    let cnt = 0;
    for (let j = 0; j <= tryNum; j++) {
      if (+String(num)[j] === i) {
        cnt++;
      }
    }
    console.log(cnt);
  }
}
