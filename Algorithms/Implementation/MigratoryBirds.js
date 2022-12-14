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
 * Complete the 'migratoryBirds' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function migratoryBirds(arr) {
  // Write your code here
  let birdsMap = new Map();
  for (let i = 0; i < arr.length; i++) {
    if (birdsMap.has(arr[i])) {
      birdsMap.set(arr[i], birdsMap.get(arr[i]) + 1);
    } else {
      birdsMap.set(arr[i], 1);
    }
  }

  const maxNum = [];
  let maxVal = Math.max(...birdsMap.values());

  //this is to check if more than one key have the same occurrence
  birdsMap.forEach((value, key, map) => {
    if (value >= maxVal) {
      maxVal = value;
      maxNum.push({ key: key, maxVal: maxVal });
    }
  });
  // return the lowest number
  return maxNum.sort((a, b) => a.key - b.key)[0].key;
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const arrCount = parseInt(readLine().trim(), 10);

  const arr = readLine()
    .replace(/\s+$/g, "")
    .split(" ")
    .map((arrTemp) => parseInt(arrTemp, 10));

  const result = migratoryBirds(arr);

  ws.write(result + "\n");

  ws.end();
}
