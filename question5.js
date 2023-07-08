// Q.5 What is the difference between let and const ?


// In JavaScript, let and const are both used to declare variables, but they have some differences in terms of their behavior and usage.

// Variable reassignment:

// With let, you can assign a new value to the variable after it has been declared.
// With const, the variable is read-only and cannot be reassigned once it has been assigned a value. However, it's important to note that const does not make objects or arrays immutable. You can still modify the properties or elements of a const object or array, but you cannot assign a new object or array to the variable.
// Scope:

// Both let and const have block scope, which means they are only accessible within the block of code where they are defined. For example, inside a function, a loop, or an if statement.
// Variables declared with let and const are not hoisted to the top of their scope like variables declared with var. This means you need to declare them before accessing them in your code.
// Temporal Dead Zone (TDZ):

// When you declare a variable with let or const, it is hoisted to the top of its block but not initialized. This means there is a period between the start of the block and the actual declaration where accessing the variable results in a reference error. This period is known as the Temporal Dead Zone (TDZ).
// With let, you can still assign a value to the variable inside the block, but accessing it before the declaration will result in a reference error.
// With const, you must assign a value to the variable when declaring it. Otherwise, it will throw a syntax error.
// Declaration and initialization:

// With let, you can declare a variable without initializing it. Later, you can assign a value to it.
// With const, you must initialize the variable when declaring it. It cannot be left uninitialized.
// In general, it's recommended to use const for variables that you know will not be reassigned, as it helps enforce immutability and prevents accidental reassignments. Use let for variables that you intend to reassign or modify their values.


