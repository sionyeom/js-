const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

const testCaseArr = [];

for (let i = 1; i <= +input[0]; i++) {
  const tempVal = input[i].split(" ").map((item) => +item);
  testCaseArr.push({ A: tempVal[0], B: tempVal[1] });
}

// console.log(testCaseArr);
solution(+input[0], testCaseArr);

function solution(T, testcaseArray) {
  for (let i = 0; i < T; i++) {
    const A = testcaseArray[i].A;
    const B = testcaseArray[i].B;
    console.log(A + B);
  }
}
