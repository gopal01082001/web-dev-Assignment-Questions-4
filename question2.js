// Q.2 Explain Temporal Dead Zone?
// The Temporal Dead Zone (TDZ) is a behavior in JavaScript that occurs when using variables declared with let and const before they are actually declared in the code. It is a period between the start of the scope (block or function) and the actual declaration where the variable exists but cannot be accessed. Any attempt to access the variable during this period will result in a runtime error.
// To understand the Temporal Dead Zone, let's consider an example:
// javascript
// console.log(x); // Output: ReferenceError: x is not defined
// let x = 5;
// console.log(x); // Output: 5
// In the above code snippet, we are trying to access the variable x before it is declared. However, instead of returning undefined as it would with a hoisted var variable, it throws a ReferenceError because x is not yet defined. This is because variables declared with let and const are hoisted to the top of their block scope but remain in the TDZ until the declaration statement is encountered.
// The TDZ prevents the usage of variables before their declaration, promoting better code quality by catching potential errors. It also encourages declaring variables at the beginning of their scope, making the code more predictable and easier to understand.
// For example:
// javascript

// function example() {
//   console.log(x); // Output: ReferenceError: x is not defined
//   let x = 10;
//   console.log(x); // Output: 10
// }
// example();In this code snippet, the x variable is accessed within the example function before 
// it is declared. As a result, it throws a ReferenceError. Once the declaration statement let x = 10; is encountered, the variable x comes out of the TDZ, and subsequent references to it work as expected.
// It's important to note that the TDZ applies only to variables declared with let and const and not to variables declared with var. var variables are hoisted to the top of their scope and are initialized with undefined, allowing them to be used before their actual declaration.

// In summary, the Temporal Dead Zone is a behavior in JavaScript where variables declared with let and const are inaccessible and result in a ReferenceError if accessed before their declaration statement. The TDZ promotes better coding practices by preventing the use of variables before they are properly initialized.






