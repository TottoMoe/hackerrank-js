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
 * Complete the 'alternate' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts STRING s as parameter.
 */

function alternate(s) {
  // Write your code here
  if (s.length === 1) return 0;

  // Make the Set into a new Array
  let setArr = [...new Set(Array.from(s))];
  // console.log(setArr)

  // Make the string into a new Array
  let strArr = Array.from(s);
  // console.log(strArr)
  let longest = 0;
  for (let i = 0; i < setArr.length; i++) {
    let el1 = setArr[i];
    for (let j = 0; j < setArr.length; j++) {
      let el2 = setArr[j];

      let ch = strArr
        .filter((filteredEl) => {
          return filteredEl === el1 || filteredEl === el2;
        })
        .join("");
      // console.log(ch.indexOf(el1 + el1))

      if (ch.indexOf(el1 + el1) === -1 && ch.indexOf(el2 + el2) === -1) {
        longest = Math.max(longest, ch.length);
      }
    }
  }
  return longest;
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const l = parseInt(readLine().trim(), 10);

  const s = readLine();

  const result = alternate(s);

  ws.write(result + "\n");

  ws.end();
}
