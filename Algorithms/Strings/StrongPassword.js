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
 * Complete the 'minimumNumber' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. STRING password
 */

function minimumNumber(n, password) {
  // Return the minimum number of characters to make the password strong
  const numbers = new Set("0123456789");
  const lc = new Set("abcdefghijklmnopqrstuvwxyz");
  const uc = new Set("ABCDEFGHIJKLMNOPQRSTUVWXYZ");
  const sc = new Set("!@#$%^&*()-+");
  let minLeg = 6;
  let minNum = 1;
  let minLc = 1;
  let minUc = 1;
  let minSc = 1;
  let count = 0;
  for (let i = 0; i < password.length; i++) {
    if (numbers.has(password[i])) {
      if (minNum > 0) minNum--;
    }
    if (lc.has(password[i])) {
      if (minLc > 0) minLc--;
    }
    if (uc.has(password[i])) {
      if (minUc > 0) minUc--;
    }
    if (sc.has(password[i])) {
      if (minSc > 0) minSc--;
    }
  }
  let toAdd = minNum + minLc + minUc + minSc;
  if (toAdd + n >= minLeg) {
    return toAdd;
  } else {
    return minLeg - n;
  }
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const n = parseInt(readLine().trim(), 10);

  const password = readLine();

  const answer = minimumNumber(n, password);

  ws.write(answer + "\n");

  ws.end();
}
