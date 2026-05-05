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
