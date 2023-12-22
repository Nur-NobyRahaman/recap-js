let number = parseInt(prompt("enter a number"));
// if (number > 0) {
//     document.write("positive number")
// }
// else if (number == 0) {
//     document.write("Zero")
// }
// else {
//     document.write("negative number")
// }
const result = number > 0 ? "positive number" : number == 0 ? 'zero' :  "negative number"
document.write(result)