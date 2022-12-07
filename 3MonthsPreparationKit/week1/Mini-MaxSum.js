"use strict";

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", function (inputStdin) {
  inputString += inputStdin;
});

process.stdin.on("end", function () {
  inputString = inputString.split("\n");

  main();
});

function readLine() {
  return inputString[currentLine++];
}

/*
 * Complete the 'miniMaxSum' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function miniMaxSum(arr) {
  const sortArr = arr.sort();
  let minLength = arr.length - 1;
  let minSum = 0,
    maxSum = 0;
  for (let i = 0; i < minLength; i++) {
    minSum += arr[i];
  }
  for (let j = 1; j < arr.length; j++) {
    maxSum += arr[j];
  }
  console.log(minSum + " " + maxSum);
}

function main() {
  const arr = readLine()
    .replace(/\s+$/g, "")
    .split(" ")
    .map((arrTemp) => parseInt(arrTemp, 10));

  miniMaxSum(arr);
}
