const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");
let fir = input[0].split(" ");
let N = Number(fir[0]);
let X = Number(fir[1]);
let answer = "";
const Arr = input[1].split(" ");
console.log(N, X);

for (let i = 0; i <= N; i++) {
  answer += Arr[i] < X ? Arr[i] + " " : "";
}
console.log(answer);
