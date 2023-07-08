
// Q.10 What is the purpose of the spread operator (...) in ES6?
// ChatGPT
// In ES6 (ECMAScript 2015) and later versions, the spread operator (...) serves multiple purposes and provides several useful functionalities. Here are some of the main purposes of the spread operator:

// Array/Object Spread: The spread operator can be used to spread the elements of an array or the properties of an object into another array or object. It allows you to create new arrays or objects by combining existing ones.

// javascript
// const array1 = [1, 2, 3];
// const array2 = [...array1, 4, 5, 6];
// console.log(array2); // Output: [1, 2, 3, 4, 5, 6]
// const obj1 = { x: 1, y: 2 };
// const obj2 = { ...obj1, z: 3 };
// console.log(obj2); // Output: { x: 1, y: 2, z: 3 }
// Function Arguments: The spread operator can be used to pass an array of values as arguments to a function. It "spreads" the elements of the array into individual arguments.

// javascript
// Copy code
// function myFunction(a, b, c) {
//   console.log(a, b, c);
// }

// const myArray = [1, 2, 3];
// myFunction(...myArray); // Output: 1 2 3
// Rest Parameters: The spread operator can be used as a rest parameter to collect multiple function arguments into an array. It allows you to handle a variable number of arguments more easily.

// javascript
// function myFunction(...args) {
//   console.log(args);
// }

// myFunction(1, 2, 3); // Output: [1, 2, 3]
// Array/Object Destructuring: The spread operator can be used in array or object destructuring to assign remaining elements to a new variable. It allows you to extract a subset of elements and store the remaining ones in a separate variable.

// javascript
// const [first, second, ...rest] = [1, 2, 3, 4, 5];
// console.log(first); // Output: 1
// console.log(second); // Output: 2
// console.log(rest); // Output: [3, 4, 5]

// const { x, y, ...rest } = { x: 1, y: 2, z: 3, w: 4 };
// console.log(x); // Output: 1
// console.log(y); // Output: 2
// console.log(rest); // Output: { z: 3, w: 4 }
// These are some of the main use cases for the spread operator in ES6. It provides a concise and flexible way to manipulate arrays, objects, and function arguments in JavaScript.




