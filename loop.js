// let i = 2;
// let sum = 0;
// while (i <= 100) {
//   sum = sum + i;
//   i = i + 2;
// }
// document.write(sum + " ");

// task 6  sum all number that are divided  by 3 and 5 from 1-100;

// let i = 1;
// let sum = 0;
// while (i <= 50) {
//   if (i % 3 == 0 && i % 5 == 0) {
//       sum += i;
//   }
//   i++;
// }
// document.write(sum)

// do {
//     if (i % 3 == 0 && i % 5 == 0) {
//         sum += i;
//     }
//     i++;
// } while (i <= 50)
// document.write(sum)

// break and continue

let i ;
for (i = 1; i < 50; i++) {
  if (i % 2 != 0) {
    continue;
  }
  document.write(" ", +i);
}
