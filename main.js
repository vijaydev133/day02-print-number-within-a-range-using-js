/********************************** */
// Print prime number within a range
/********************************** */

let lowNum = 4,
  hiNum = 12;
if (lowNum > 0 && hiNum > 0) {
  for (let i = lowNum; i <= hiNum; i++) {
    let flag = 0;
    for (let j = 2; j < i; j++) {
      if (i % j == 0) {
        flag = 1;
        break;
      }
    }
    if (i > 1 && flag == 0) {
      console.log(`the number ${i} is prime number`);
    }
  }
} else {
  console.log("Enter both number as positive number");
}
