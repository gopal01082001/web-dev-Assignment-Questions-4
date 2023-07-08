// Q.9 How can you define default parameter values in ES6 functions?
// In ES6 (ECMAScript 2015) and later versions, you can define default parameter values for function parameters using a concise syntax. Here's how you can define default parameter values in ES6 functions:

// javascript
// function myFunction(param1 = defaultValue1, param2 = defaultValue2) {
//   // Function body
// }
// In the code snippet above, param1 and param2 are the parameters of the myFunction function, and defaultValue1 and defaultValue2 are the respective default values assigned to those parameters.

// If an argument is not provided for a parameter when the function is called or if the argument is explicitly passed as undefined, the default value will be used instead. However, if null is passed as an argument, it will override the default value and the parameter will be set to null.

// Here's an example demonstrating the usage of default parameter values:

// javascript
// function greet(name = "Anonymous") {
//   console.log(`Hello, ${name}!`);
// }
// greet(); // Output: Hello, Anonymous!
// greet("John"); // Output: Hello, John!
// In the greet function, if no argument is provided when calling the function, the default value "Anonymous" will be used for the name parameter