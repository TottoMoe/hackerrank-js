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
 * Complete the 'plusMinus' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function plusMinus(arr) {
  let nevNum = 0;
  let zeroNum = 0;
  let posNum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      nevNum++;
    } else if (arr[i] === 0) {
      zeroNum++;
    } else {
      posNum++;
    }
  }
  nevNum = nevNum / arr.length;
  let newNev = nevNum.toFixed(6);
  zeroNum = zeroNum / arr.length;
  let newZero = zeroNum.toFixed(6);
  posNum = posNum / arr.length;
  let newPos = posNum.toFixed(6);

  console.log(newPos + "\n" + newNev + "\n" + newZero);
}

function main() {
  const n = parseInt(readLine().trim(), 10);

  const arr = readLine()
    .replace(/\s+$/g, "")
    .split(" ")
    .map((arrTemp) => parseInt(arrTemp, 10));

  plusMinus(arr);
}
