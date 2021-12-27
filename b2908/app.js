const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");
let arr = input[0].split(" ");
let testArr = [];

testArr.push(
  +(arr[0][2] + arr[0][1] + arr[0][0]),
  +(arr[1][2] + arr[1][1] + arr[1][0])
);

solution(testArr);

function solution(arr) {
  let num = +arr[0] > +arr[1] ? arr[0] : arr[1];
  console.log(num);
}
