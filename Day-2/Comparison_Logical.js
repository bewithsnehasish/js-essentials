let p = 15;
let q = 20;

console.log(`Is p > q? ${p > q}`);
console.log(`Is p < q? ${p < q}`);
console.log(`Is p >= q? ${p >= q}`);
console.log(`Is p <= q? ${p <= q}`);
console.log(`Is p == q? ${p == q}`);
console.log(`Is p === q? ${p === q}`);

let isValid = p > 10 && q < 30;
console.log(`Are both conditions true? ${isValid}`);

let isAnyValid = p < 10 || q > 15;
console.log(`Is any one of the conditions true? ${isAnyValid}`);

console.log(`Is p not equal to q? ${!(p === q)}`);

//Ternary Operator request

let num = 0;
let resultTernary = num > 0 ? "Positive" : num < 0 ? "Negative" : "Zero";
console.log(`The number is: ${resultTernary}`);
