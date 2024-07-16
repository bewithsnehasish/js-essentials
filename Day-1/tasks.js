console.log("Activity 1");
var n1 = 23;
console.log(n1);
let n2 = "ChaiAurCode";
console.log(n2);

console.log();
console.log("Activity 2");
const num3 = true;
console.log(num3);

console.log();
console.log("Activity 3");
var m1 = 23;
var m2 = "Sneahsish";
var m3 = false;
var m4 = { name: "Hitesh", Profession: "Teaching" };
var m5 = [12, 2, 42, 12, 3];

console.log("Value of m1 is " + m1 + " and the type of m1 " + typeof m1);
console.log("Value of m2 is " + m2 + " and the type of m2 " + typeof m2);
console.log("Value of m3 is " + m3 + " and the type of m3 " + typeof m3);
console.log("Value of m4 is " + m4 + " and the type of m4 is " + typeof m4);
console.log("Value of m5 is " + m5 + " and the type of m5 is " + typeof m5);

console.log();
console.log("Activity 4");
let dec1 = 2324;
dec1 = 23;
console.log("Reassigned Value is " + dec1);

console.log();
console.log("Activity 5");
const me1 = "Snehasish";
console.log("We cannot change or reassign a value to a constant variable");
// me1 = "Mandal";
console.log(me1);

console.log();
console.log("Feature Request");
console.log("Variable Types Console Log:");
let num = 10;
let str = "JavaScript";
let bool = true;
let obj = { key: "value" };
let arr = [1, 2, 3];

console.log(num, typeof num); // Output: 10 number
console.log(str, typeof str); // Output: JavaScript string
console.log(bool, typeof bool); // Output: true boolean
console.log(obj, typeof obj); // Output: { key: "value" } object
console.log(arr, typeof arr); // Output: [1, 2, 3] object
console.log();
console.log("Request Demo");
// Using let
let reassignLet = "Initial value";
console.log(reassignLet); // Output: Initial value
reassignLet = "New value";
console.log(reassignLet); // Output: New value

// Using const
const reassignConst = "Initial value";
console.log(reassignConst); // Output: Initial value
// Uncommenting the following line will cause an error
// reassignConst = "New value"; // TypeError: Assignment to constant variable.
