// Q.3 Difference between var & let?
// In JavaScript, both var and let are used for variable declaration, but they have some differences in terms of scope and hoisting:
//  Variables declared with var have function scope, meaning they are accessible throughout the entire function in which they are declared, regardless of block scope. On the other hand, variables declared with let have block scope, which means they are only accessible within the block they are defined in, such as within loops or conditional statements.
// Example with var:

// javascript
// Copy code
// function example() {
//   if (true) {
//     var x = 10;
//   }
//   console.log(x); // Output: 10
// }
// Example with let:

// javascript
// Copy code
// function example() {
//   if (true) {
//     let x = 10;
//   }
//   console.log(x); // Output: ReferenceError: x is not defined
// }
// Hoisting: Variables declared with var are hoisted to the top of their scope and can be accessed before they are declared. This means you can use the variable before it appears in the code. However, the initial value will be undefined until the assignment is made. On the other hand, variables declared with let are not hoisted and cannot be accessed before they are declared.
// Example with var:
// javascript
// console.log(x); // Output: undefined
// var x = 10;
// console.log(x); // Output: 10
// Example with let:
// javascript
// console.log(x); // Output: ReferenceError: x is not defined
// let x = 10;
// console.log(x); // Output: 10





