// Q.8 How can you destructure objects and arrays in ES6?
// In ES6 (ECMAScript 2015) and onwards, destructuring assignment is a powerful feature that allows you to extract values from arrays and properties from objects into distinct variables. It provides a concise syntax for working with arrays and objects. Here's how you can destructure objects and arrays in ES6:

// Destructuring Objects:

// javascript
// const person = {
//   name: 'Alice',
//   age: 30,
//   city: 'New York'
// };

// // Destructuring assignment
// const { name, age, city } = person;

// console.log(name);  // Output: 'Alice'
// console.log(age);   // Output: 30
// console.log(city);  // Output: 'New York'
// In the example above, we have an object person with properties name, age, and city. By using destructuring assignment with curly braces {}, we extract the values of those properties into separate variables with the same names.

// Destructuring Arrays:
// const numbers = [1, 2, 3, 4, 5];

// // Destructuring assignment
// const [first, second, ...rest] = numbers;

// console.log(first);  // Output: 1
// console.log(second); // Output: 2
// console.log(rest);   // Output: [3, 4, 5]
// In this example, we have an array numbers. Using destructuring assignment with square brackets [], we assign the first element to the variable first, the second element to the variable second, and the remaining elements as an array to the variable rest using the rest parameter (...).

// You can also assign default values during the destructuring process, in case the property or array element is undefined or missing:

// javascript
// const person = {
//   name: 'Alice',
//   age: 30
// };

// // Destructuring assignment with default values
// const { name, age, city = 'Unknown' } = person;

// console.log(name);  // Output: 'Alice'
// console.log(age);   // Output: 30
// console.log(city);  // Output: 'Unknown'
// In this case, since the person object does not have the city property, the default value 'Unknown' is assigned to the city variable during destructuring.

// Destructuring can also be combined with function parameter definitions to extract values directly from function arguments. This can provide a more concise and readable way of accessing specific properties or elements within complex objects or arrays.

// Overall, destructuring assignment is a versatile feature that simplifies working with objects and arrays in JavaScript, making code more concise and readable.




