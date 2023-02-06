"use strict";

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", (inputStdin) => {
  inputString += inputStdin;
});

process.stdin.on("end", (_) => {
  inputString = inputString
    .trim()
    .split("\n")
    .map((string) => {
      return string.trim();
    });

  main();
});

function readLine() {
  return inputString[currentLine++];
}

function getGrade(score) {
  let grade;
  // Write your code here
  if (score < 6) {
    grade = "F";
  } else if (score < 11) {
    grade = "E";
  } else if (score < 16) {
    grade = "D";
  } else if (score < 21) {
    grade = "C";
  } else if (score < 26) {
    grade = "B";
  } else {
    grade = "A";
  }
  return grade;
}
