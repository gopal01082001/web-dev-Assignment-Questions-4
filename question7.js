// // Q.7 What’s difference between map & forEach?
// Both map() and forEach() are array methods in JavaScript that allow you to iterate over an array and perform actions on its elements. However, they have some differences in terms of their return value and how they can be used.

// Return value:

// The forEach() method iterates over each element of the array and performs a provided callback function on each element. It does not return anything.
// The map() method also iterates over each element of the array and performs a provided callback function on each element. However, it creates a new array with the results of calling the callback function on each element. It returns this new array.
// Usage:

// forEach() is used when you want to perform an action on each element of an array without modifying the array itself. For example, logging each element to the console or updating the UI with each element's value.
// map() is used when you want to transform each element of an array and create a new array with the transformed values. It's commonly used when you need to modify or extract specific properties from the elements of an array.
// Here are examples to illustrate the differences:

// Using forEach():

// javascript
// Copy code
// const numbers = [1, 2, 3, 4, 5];
// numbers.forEach((num) => {
//   console.log(num * 2);
// });
// Output:
// 2
// 4
// 6
// 8
// 10
// Using map():
// javascript
// const numbers = [1, 2, 3, 4, 5];
// const doubledNumbers = numbers.map((num) => {
//   return num * 2;
// });
// console.log(doubledNumbers);
// Output:
// [2, 4, 6, 8, 10]
// In the forEach() example, the callback function is called for each element in the numbers array, but it doesn't create a new array. It just logs the doubled value of each element to the console.

// In the map() example, the callback function is also called for each element, but it returns a new array with the doubled values. The resulting array doubledNumbers contains the transformed values.

// Overall, forEach() is used for iteration and performing actions, while map() is used for transforming elements and creating a new array based on the original array.
