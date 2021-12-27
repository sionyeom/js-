const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

solution(input[0]);

function solution(str) {
  let obj = {};
  for (let i = 0; i < str.length; i++) {
    let nowChar = str[i].toUpperCase();
    if (obj[nowChar]) {
      obj[nowChar]++;
    } else {
      obj[nowChar] = 1;
    }
  }
  let maxValue = -1;
  let maxChar = "";
  let isDuplicated = false;
  for (const el in obj) {
    if (obj[el] > maxValue) {
      maxValue = obj[el];
      maxChar = el;
      isDuplicated = false;
    } else if (obj[el] === maxValue) {
      isDuplicated = true;
    }
  }
  if (isDuplicated) {
    console.log("?");
  } else {
    console.log(maxChar);
  }
}
