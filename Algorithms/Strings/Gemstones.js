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
 * Complete the 'gemstones' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts STRING_ARRAY arr as parameter.
 */

function gemstones(arr) {
  // Write your code here
  let arr1 = new Array(26);
  arr1.fill(0);
  for (let i = 0; i < arr[0].length; i++) {
    let index = arr[0].charCodeAt(i) - "a".charCodeAt(0);
    arr1[index]++;
  }
  // console.log(arr1)
  for (let i = 1; i < arr.length; i++) {
    let arr2 = new Array(26);
    arr2.fill(0);
    let str = arr[i];
    for (let j = 0; j < str.length; j++) {
      let index2 = str.charCodeAt(j) - "a".charCodeAt(0);
      arr2[index2]++;
    }
    for (let k = 0; k < arr1.length; k++) {
      let min = Math.min(arr1[k], arr2[k]);
      arr1[k] = min;
    }
  }
  // console.log(arr1)
  let count = 0;
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] > 0) {
      count++;
    }
  }
  return count;
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const n = parseInt(readLine().trim(), 10);

  let arr = [];

  for (let i = 0; i < n; i++) {
    const arrItem = readLine();
    arr.push(arrItem);
  }

  const result = gemstones(arr);

  ws.write(result + "\n");

  ws.end();
}
