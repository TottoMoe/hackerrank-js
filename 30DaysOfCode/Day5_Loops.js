function main() {
  const n = parseInt(readLine().trim(), 10);
  for (let x = 1; x <= 10; x++) {
    let result = n * x;
    console.log(n.toString() + " x " + x + " = " + result.toString());
  }
}
