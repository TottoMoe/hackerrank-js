function processData(input) {
  //Enter your code here
  let arr = input.split("\n").slice(1); // arr = ['hacek', 'rank']
  arr.forEach((word) => {
    let even = "";
    let odd = "";
    for (let i = 0; i < word.length; i++) {
      if (i % 2 === 0) {
        even += word[i];
      } else {
        odd += word[i];
      }
    }
    console.log(`${even} ${odd}`);
  });
}
