const { FORMERR } = require("dns");
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

let rsArray = [];
for (let i = 1; i <= +input[0]; i++) {
  const inputRs = input[i];
  const splitedInputRs = inputRs.split(" ");
  rsArray.push({
    R: +splitedInputRs[0],
    S: splitedInputRs[1],
  });
}

solution(+input[0], rsArray);

function solution(N, rsArray) {
  for (let i = 0; i < N; i++) {
    let { R, S } = rsArray[i];
    let P = "";
    for (let j = 0; j < S.length; j++) {
      for (let k = 0; k < R; k++) {
        P += S[j];
      }
    }
    console.log(P);
  }
}
