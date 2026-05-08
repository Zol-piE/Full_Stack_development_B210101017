"use strict";
/*
let js = "working";
if (js == "working") alert("Hello World");
else alert("World not Working");
js = 2026;
console.log(js);

// Working with string
let firstName = "Tomal";
console.log(firstName);
let lastName = "islam";
console.log(firstName + " " + lastName);
// template Literals
let str = `hello , i am ${firstName} ${lastName} `;
console.log(str);

let mark = 72;
if (mark >= 80) console.log(`A+`);
else if (mark >= 70) console.log(`A`);
else console.log(`fail`);
console.log(true + true);
// truthy and falsy value
// (0,null,'',undefined,Nan)) are falsy values
let height;
if (height) console.log(`My height is ${height}`);
else console.log(height);
//function learning
let addNumber;
function add(a, b) {
  return a + b;
}
addNumber = add(2, 3);
console.log(addNumber);
// function expression
let add2 = function (a, b) {
  return a + b;
};
addNumber = add2(2, 3);
//arrow function
let add3 = (a, b) => {
  return a + b;
};
addNumber = add3(2, 3);
console.log(addNumber);
*/
let arr = [1, 2, "tomal", "c", , `gp`];
arr.push(`islam`);
console.log(arr);
arr.unshift("Sohan");
console.log(arr);
arr.shift();
console.log(arr);

console.log(arr.indexOf("tomal"));
console.log(arr.includes("tomal"));
//2D array
let brr = [
  [`tomal`, 17, `cse`],
  [`Sohan`, 4, `cse`],
];
console.log(brr[0]);
console.log(brr[1]);
//objects
let person = {
  name: "tomal",
  id: 17,
  department: "cse",
  friends: ["sohan", "sohag", "tahmid"],
  job: "student",
};
for (let key in person) {
  console.log(`${key} => ${person[key]}`);
}
let key = prompt("What do know About this Person?");

if (person[key] === undefined) console.log("Data is not Available");
else console.log(`His ${key} is => ${person[key]}`);
