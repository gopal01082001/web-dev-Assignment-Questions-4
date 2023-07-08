// Q.1 Explain Hoisting in JavaScript
// Hoisting is a concept in JavaScript that describes how variable and function declarations are processed during the compilation phase before the code is executed. It allows you to use variables and functions before they are declared in your code. However, it's important to understand that hoisting doesn't actually move the code to the top of the file or function; instead, it's a way of understanding how the JavaScript interpreter handles these declarations.

// In JavaScript, variable declarations using the var keyword are hoisted to the top of their scope, whether it's the global scope or the scope of a function. This means that you can use a variable before it is declared, and it will not produce an error. However, the variable will be initialized with the value undefined until the assignment is made.

// For example:

// javascript
// console.log(x); // Output: undefined
// var x = 5;
// console.log(x); // Output: 5
// In the above code snippet, the variable x is declared using var after the first console.log statement, but it still doesn't produce an error. This is because the declaration of x is hoisted to the top of the scope, but the assignment (x = 5) happens at the line where it is written.

// Function declarations are also hoisted in JavaScript. This means that you can call a function before it is declared in your code. For example:

// javascript
// Copy code
// hoistedFunction(); // Output: "I am a hoisted function"

// function hoistedFunction() {
//   console.log("I am a hoisted function");
// }
// In the above code snippet, the function hoistedFunction is called before it is declared, but it still works correctly. This is because function declarations are hoisted to the top of their scope, allowing them to be used anywhere within the scope.

// It's important to note that hoisting applies only to function declarations and variables declared with var. Variables declared with let and const are hoisted to the top of their block scope but are not initialized with undefined like var variables. Instead, they remain in the "temporal dead zone" until the actual declaration is reached.
// In summary, hoisting in JavaScript is the process of moving variable and function declarations to the top of their respective scopes during the compilation phase, allowing them to be used before they are physically declared in the code. However, it's good practice to declare your variables and functions before using them to avoid confusion and make your code more readable.





