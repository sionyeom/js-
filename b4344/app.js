const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");
let num = +input[0];
let arr = input.slice(1);

solution(num, arr);

function solution(N, testArr) {
  for (let i = 0; i < N; i++) {
    let arr = testArr[i].split(" ");
    let tn = +arr[0];
    let sum = 0;
    for (let j = 1; j <= tn; j++) {
      sum += +arr[j];
    }
    let average = sum / tn;
    let rate = 0;
    let pn = 0;
    for (let j = 1; j <= tn; j++) {
      if (+arr[j] > +average) {
        pn++;
      }
    }
    console.log(((pn / tn) * 100).toFixed(3) + "%");
  }
}
