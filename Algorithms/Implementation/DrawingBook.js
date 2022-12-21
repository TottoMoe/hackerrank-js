"use strict";

const fs = require("fs");

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
 * Complete the 'pageCount' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. INTEGER p
 */

function pageCount(n, p) {
  // Write your code here
  let begCount = 0,
    revCount = 0;
  if (n === p) {
    return 0;
  } else if (p <= Math.floor(n / 2)) {
    // start from beginning
    for (let i = 1; i < n; i += 2) {
      if (p > i) {
        begCount += 1;
      }
    }
    return begCount;
  } else if (p > Math.floor(n / 2)) {
    //start from end
    if (n % 2 != 0) {
      n -= 1;
    }
    for (let j = n; j >= 0; j -= 2) {
      if (p < j) {
        revCount += 1;
      }
    }
    return revCount;
  }
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const n = parseInt(readLine().trim(), 10);

  const p = parseInt(readLine().trim(), 10);

  const result = pageCount(n, p);

  ws.write(result + "\n");

  ws.end();
}
