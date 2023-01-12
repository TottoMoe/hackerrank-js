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
 * Complete the 'weightedUniformStrings' function below.
 *
 * The function is expected to return a STRING_ARRAY.
 * The function accepts following parameters:
 *  1. STRING s
 *  2. INTEGER_ARRAY queries
 */

function weightedUniformStrings(s, queries) {
  // Write your code here
  let set = new Set();
  let curr = s.charAt(0);
  let weight = s.charCodeAt(0) - "a".charCodeAt(0) + 1;
  set.add(weight);

  for (let i = 1; i < s.length; i++) {
    if (s.charAt(i) === curr) {
      weight += s.charCodeAt(i) - "a".charCodeAt(0) + 1;
    } else {
      curr = s.charAt(i);
      weight = curr.charCodeAt(0) - "a".charCodeAt(0) + 1;
    }
    set.add(weight);
  }
  console.log(set);
  let arr = [];
  for (let i of queries) {
    if (set.has(i)) {
      arr.push("Yes");
    } else {
      arr.push("No");
    }
  }
  return arr;
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const s = readLine();

  const queriesCount = parseInt(readLine().trim(), 10);

  let queries = [];

  for (let i = 0; i < queriesCount; i++) {
    const queriesItem = parseInt(readLine().trim(), 10);
    queries.push(queriesItem);
  }

  const result = weightedUniformStrings(s, queries);

  ws.write(result.join("\n") + "\n");

  ws.end();
}
