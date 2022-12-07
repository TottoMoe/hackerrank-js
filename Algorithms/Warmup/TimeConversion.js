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
 * Complete the 'timeConversion' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

function timeConversion(s) {
  let ampm = s.slice(-2);
  let times = s.slice(0, -2);
  let hours = times.slice(0, 2);
  let min = times.slice(2);
  if (ampm === "PM" && hours === "12") {
    return times;
  } else if (ampm === "AM" && hours === "12") {
    return "00" + min;
  } else if (ampm === "PM") {
    let hour = parseInt(hours) + 12;
    return hour + min;
  } else if (ampm === "AM") {
    return times;
  }
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const s = readLine();

  const result = timeConversion(s);

  ws.write(result + "\n");

  ws.end();
}
