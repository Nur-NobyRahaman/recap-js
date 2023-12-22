// let number = 1.33;
// console.log(number.toPrecision(1));
// let text = "bangladesh";
// console.log(text.charAt(2));
//concat

// let text1 = "is beautiful country";
// console.log(text.concat(text1));

// slice
// let newText = text.slice(0, 2);
// console.log(newText);

//  task 2

// let firstName = prompt("Enter First Name : ");
// let lastName = prompt("Enter Last Name : ");
// const fullName = firstName + lastName;
// console.log("fullName", fullName);
// console.log("length", fullName.length);
// console.log("full name uppercase", fullName.toUpperCase());
// console.log("full name 2nd position", fullName.charAt(2))
// console.log("full name 2nd position", fullName.slice(2, 3))

// task 3
// let firstNumber = prompt("Enter First number : ");
// let lastNumber = prompt("Enter Last number : ");
// firstNumber = PaymentResponse(firstNumber);
// lastNumber = PaymentResponse(lastNumber);
// let sum = firstNumber + lastNumber;
// let sub = firstNumber - lastNumber;
// let mul = firstNumber * lastNumber;
// let div = firstNumber / lastNumber;
// let mod = firstNumber % lastNumber;

// console.log(firstNumber, "+", lastNumber, "=", sum);
// console.log(firstNumber, "-", lastNumber, "=", sub);
// console.log(firstNumber, "*", lastNumber, "=", mul);
// console.log(firstNumber, "/", lastNumber, "=", div);
// console.log(firstNumber, "%", lastNumber, "=", mod);

// task 4

let mark = parseInt(prompt("write your mark"));

if (mark >= 80 && mark <= 100) {
    console.log("A+")
    document.write("A+")
}
else if (mark >= 70 && mark <= 79) {
    console.log("A")
    document.write("A")
}
else if (mark >= 60 && mark <= 69) {
    console.log("A-")
    document.write("A-")
}
else if (mark >= 50 && mark <= 59) {
    console.log("B")
    document.write("B")
}
else if (mark >= 40 && mark <= 49) {
    console.log("C")
    document.write("C")
}
else if (mark >= 33 && mark <= 39) {
    console.log("D")
    document.write("D")
}
else if (mark >= 0 && mark <= 32) {
    console.log("Fail")
    document.write("Fail")
}
    
else {
    document.write("write into 1-100")
}


