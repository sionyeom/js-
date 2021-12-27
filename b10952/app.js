const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

const testCaseArray = [];
for (let i = 0; ; ++i) {
  const tempValue = input[i].split(" ").map((item) => +item);
  testCaseArray.push({ A: tempValue[0], B: tempValue[1] });
  if (tempValue[0] === 0 && tempValue[1] === 0) {
    break;
  }
}

solution(testCaseArray);

function solution(testcaseArray) {
  let A = testcaseArray[0].A;
  let B = testcaseArray[0].B;
  let idx = 1;
  while (A !== 0 || B !== 0) {
    console.log(A + B);
    A = testcaseArray[idx].A;
    B = testcaseArray[idx].B;
    idx++;
  }
}
