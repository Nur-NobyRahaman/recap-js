let names = ["nurnoby","nuralom","robart","tom","jerray","apple"];
let age = [25, 15,10,45];
// names.push("rahim")
// console.log(names);
// names.pop();
// console.log(names);
// let details = names.concat(age);
// console.log(details)
// names.unshift("zinnah");
// console.log(names);
// names.shift();
// console.log(names);
// // splice add element
// names.splice(2, 0, "rahim","korim");
// console.log(names);
// // splice remove 
// names.splice(2,3)
// console.log(names);
// slice
let newArray = names.slice(2,5);
console.log(newArray)

// sort
let sortArray = names.sort();
console.log(names)
let reverseArray = names.reverse();
console.log(reverseArray)
// number short 
let numSort = age.sort( (a,b)=> {
    return a-b
    // a the b biyog korbe. jodi biyog fol + ase tohole b age chole ase and biyog foll - hole a , a ar jaygay e thakbe.
})
console.log(age)
let numReverse = age.sort( (a,b)=> {
    return b-a
    // a the b biyog korbe. jodi biyog fol + ase tohole b age chole ase and biyog foll - hole a , a ar jaygay e thakbe.
})
console.log(age)