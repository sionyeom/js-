const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

const testCaseArray = [];
for (let i = 0; i < input.length; ++i) {
  if (input[i] === "") {
    break;
  }
  const tempValue = input[i].split(" ").map((item) => +item);
  testCaseArray.push({ A: tempValue[0], B: tempValue[1] });
}

// console.log(testCaseArray);
solution(testCaseArray);

function solution(testcaseArray) {
  let A = testcaseArray[0].A;
  let B = testcaseArray[0].B;
  let idx = 0;
  while (idx !== testcaseArray.length) {
    A = testcaseArray[idx].A;
    B = testcaseArray[idx].B;
    console.log(A + B);
    idx++;
  }
}
