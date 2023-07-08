// Q.6  What is template literals in ES6 and how do you use them?

// Template literals, also known as template strings, are a feature introduced in ECMAScript 2015 (ES6) that allows for more flexible and readable string formatting in JavaScript. They provide a way to embed expressions and variables within strings, making string interpolation and multiline strings easier to work with.

// Template literals are created using backticks () instead of single or double quotes. Inside a template literal, you can include placeholders, indicated by ${expression}`, where expressions can be variables, function calls, or any valid JavaScript expression. These placeholders are evaluated and their values are inserted into the resulting string.

// Here's an example of using template literals:

// javascript

// const name = "Alice";
// const age = 30;

// const message = `Hello, my name is ${name} and I am ${age} years old.`;
// console.log(message);
// In the example above, the variables name and age are interpolated into the string using ${} within the template literal. The resulting string assigned to the message variable would be: "Hello, my name is Alice and I am 30 years old."

// Template literals also support multiline strings without the need for explicit line breaks. You can write multiline strings directly within the backticks:
// javascript
// const multiline = `
//   This is a 
//   multiline string.
// `;
// console.log(multiline);
// In this case, the resulting string will preserve the formatting and include the line breaks:

// csharp
// Copy code
//   This is a 
//   multiline string.
// Teuseful when generating dynamic HTML, constructing complex strings, or formatting log messages.