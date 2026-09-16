// 🟢 Level 1 — IIFE & Scope
// These projects focus on immediately executed functions, global scope, local scope, and avoiding variable conflicts.

// 1) Private Counter Using IIFE
// Challenge: Create a counter whose internal value cannot be accessed or modified directly from outside.
// Requirements:
// Use an IIFE to create a private count variable.
// Return an object containing:
// increment()
// decrement()
// getCount()
// Ensure the counter works through these methods only.
// Example:
// counter.increment();
// counter.increment();
// counter.getCount(); // 2
// Bonus: Add a reset() method.
// Concepts: IIFE, closure, local scope, data privacy.



// 2) Global vs Local Scope Playground
// Challenge: Create a program that demonstrates how variables behave in different scopes.
// Requirements:
// Create a global variable appName.
// Create a function containing a local variable userName.
// Access the global variable inside and outside the function.
// Try accessing the local variable outside the function and observe what happens.
// Create a nested function and test whether it can access variables from its parent.
// Bonus: Create variables with the same name in different scopes and observe shadowing.
// Concepts: Global scope, local scope, lexical scope, shadowing.



// 3) App Configuration Module
// Challenge: Create a configuration module using an IIFE.
// Requirements:
// Store private configuration values such as:
// App name
// Version
// Environment
// API URL
// Return only selected methods:
// getAppName()
// getVersion()
// getEnvironment()
// Prevent direct access to the internal variables.
// Example:
// AppConfig.getVersion(); // "1.0.0"
// Bonus: Add a method to update the environment safely.
// Concepts: IIFE, closure, private variables, module pattern.


// 🟡 Level 2 — Rest Parameters & First-Class Functions
// These projects focus on handling flexible arguments and treating functions as values.



// 4) Flexible Calculator Using Rest Parameters
// Challenge: Create calculator functions that accept any number of arguments.
// Requirements:
// Create sum(...numbers).
// Create average(...numbers).
// Create findMax(...numbers).
// Create findMin(...numbers).
// Return the calculated result.
// Example:
// sum(10, 20, 30); // 60
// average(10, 20, 30); // 20
// findMax(5, 12, 3, 9); // 12
// Bonus: Create a function that accepts a mathematical operation and numbers.
// Concepts: Rest parameters, arrays, loops, return values.



// 5) Function-Based Calculator
// Challenge: Treat functions as values and store operations in variables.
// Requirements:
// Create separate functions:
// add
// subtract
// multiply
// divide
// Store one of these functions in a variable.
// Pass a function into another function called calculate().
// Execute the passed function.
// Example:
// calculate(10, 5, add); // 15
// calculate(10, 5, multiply); // 50
// Bonus: Store operations in an object and select them dynamically.
// Concepts: First-class functions, callbacks, higher-order functions.



// 6)Custom Array Processor
// Challenge: Build your own simplified versions of array methods using functions.
// Requirements: - Create myForEach(array, callback). - Create myMap(array, callback). - Create myFilter(array, callback). - Use loops internally. - Pass functions as callbacks.
// Example: js     myMap([1, 2, 3], function (num) {         return num * 2;     }); // [2, 4, 6]     
// Bonus: Create myReduce().
// Concepts: First-class functions, callbacks, HOFs, loops.


// 🔵 Level 3 — Pure & Impure Functions
// These projects help you understand side effects, predictable outputs, and why pure functions are easier to test.



// 7) Pure Math Utility Library
// Challenge: Create a collection of pure mathematical functions.
// Requirements:
// add(a, b)
// square(n)
// cube(n)
// factorial(n)
// isPrime(n)
// calculatePercentage(value, total)
// Each function should:
// Return the same output for the same input.
// Avoid changing external variables.
// Avoid printing directly inside the function.
// Bonus: Write test cases for each function.
// Concepts: Pure functions, determinism, no side effects.



// 8) Pure vs Impure Expense Calculator
// Challenge: Build two versions of an expense calculator.
// Requirements:
// Part A — Pure version
// calculateTotal(expenses) returns the total.
// calculateAverage(expenses) returns the average.
// getHighestExpense(expenses) returns the highest value.
// Part B — Impure version
// Create a global totalExpenses.
// Write a function that modifies this global variable.
// Observe how calling the function changes external state.
// Example:
// let totalExpenses = 0;
// function addExpense(amount) {
//     totalExpenses += amount;
// }
// Bonus: Refactor the impure version into a pure version.
// Concepts: Pure functions, impure functions, global state, side effects.



// 9) Shopping Cart Calculator
// Challenge: Calculate shopping cart totals using pure functions.
// Requirements:
// Create a list of products with prices and quantities.
// calculateSubtotal(cart)
// calculateDiscount(subtotal, discountPercent)
// calculateTax(amount, taxPercent)
// calculateFinalTotal(subtotal, discount, tax)
// Rules:
// Functions should return values rather than modifying the cart.
// Avoid global variables.
// Bonus: Create an impure version that modifies a global cart and compare the behavior.
// Concepts: Pure functions, function composition, avoiding side effects.


// 🟣 Level 4 — Higher-Order Functions (HOFs)
// A higher-order function is a function that takes another function as an argument or returns a function.
// These projects will make that concept practical.



// 10) Custom Filter & Search Engine
// Challenge: Create a reusable filtering system.
// Requirements:
// Create an array of products or students.
// Write a function filterItems(items, condition).
// Pass different callback functions to filter:
// Items above a certain price.
// Students who passed.
// Names starting with "A".
// Example:
// filterItems(products, product => product.price > 500);
// Bonus: Create a function that returns a filter function.
// Concepts: HOFs, callbacks, closures, array processing.



// 11) Function Factory
// Challenge: Create functions that generate other functions.
// Requirements:
// Create createMultiplier(factor).
// It should return a function that multiplies a number by that factor.
// Example:
// const double = createMultiplier(2);
// const triple = createMultiplier(3);
// double(5); // 10
// triple(5); // 15
// Bonus: Create:
// createDiscount(percent)
// createGreeting(greeting)
// createPower(exponent)
// Concepts: HOFs, closures, returned functions.



// 12) Custom Sort Utility
// Challenge: Create a reusable sorting function.
// Requirements:
// Create sortItems(items, compareFunction).
// Accept an array and a comparison callback.
// Sort numbers in ascending or descending order.
// Sort strings alphabetically or by length.
// Example:
// sortItems([5, 2, 8, 1], (a, b) => a - b);
// Bonus: Sort students by marks, name, or age using different callbacks.
// Concepts: HOFs, callbacks, comparison functions.


// 🔴 Level 5 — Closures & Advanced Function Projects
// These are especially useful because closures are one of the most important JavaScript interview concepts.



// 13) Bank Account Closure
// Challenge: Create a bank account function that keeps its balance private.
// Requirements:
// Create createAccount(initialBalance).
// Return methods:
// deposit(amount)
// withdraw(amount)
// getBalance()
// The balance must be accessible only through these methods.
// Prevent withdrawal if funds are insufficient.
// Example:
// const account = createAccount(1000);
// account.deposit(500);
// account.withdraw(200);
// account.getBalance(); // 1300
// Bonus: Add transaction history using a private array.
// Concepts: Closures, local scope, HOFs, encapsulation.



// 14) Login Attempt Tracker
// Challenge: Create a login system where the attempt count is private.
// Requirements:
// Create createLoginManager(username, password).
// Return:
// login(inputUser, inputPass)
// getAttempts()
// isLocked()
// Store attempts in a private variable.
// Lock after 3 failed attempts.
// Don't allow login after lock.
// Bonus: Add a reset function that requires an admin key.
// Concepts: Closures, private state, HOFs, conditionals.



// 15) Memoization Function
// Challenge: Create a function that remembers previous results to avoid repeated calculations.
// Requirements:
// Create memoize(fn).
// It should return a new function.
// Store previously calculated results.
// If the same input is passed again, return the stored result.
// Example:
// const square = memoize(n => n * n);
// square(5); // Calculates
// square(5); // Returns cached result
// Bonus: Add a counter to track how many times the original function executes.
// Concepts: HOFs, closures, caching, pure functions.



// 🏆 Final Challenge — Combine Everything
// 16. Build a Functional JavaScript Utility Library
// Create a small library that combines all the concepts you've learned.
// Requirements:
// Use an IIFE to create a private module.
// Inside it, implement:
// sum(...numbers) → Rest parameters.
// calculateTotal(numbers) → Pure function.
// logActivity(message) → Impure function.
// createMultiplier(factor) → HOF + closure.
// filterItems(items, callback) → HOF.
// getVersion() → Closure/private variable.
// getStats() → Return internal statistics safely.
// Example usage:
// const Utils = (function () {
//     // Your implementation
// })();
// Utils.sum(10, 20, 30);
// Utils.createMultiplier(2)(5);
// Utils.getVersion();
// Bonus: Add a private call counter that tracks how many utility methods have been used.



// Callback Function



// 1. Custom Greeting System
// Task
// Create a function processUser(name, callback) that:
// Accepts a user's name.
// Prints a welcome message.
// Executes the callback function.
// Expected Output
// Welcome, Kalyanshnu!
// Have a great day!
// Requirements
// Create different callbacks:
// morningMessage()
// eveningMessage()
// motivationMessage()
// Example:
// function processUser(name, callback) {
//   console.log(`Welcome, ${name}!`);
//   callback();
// }



// 2. Calculator Using Callbacks
// Task
// Create a calculator function that accepts:
// Two numbers
// An operation callback
// The calculator should support:
// Addition
// Subtraction
// Multiplication
// Division
// Example
// function calculate(a, b, operation) {
//   return operation(a, b);
// }
// function add(a, b) {
//   return a + b;
// }
// console.log(calculate(10, 5, add));
// Expected Output
// 15
// Bonus
// Add callbacks for:
// Modulus
// Power
// Average



// 3. Student Result Processor
// Task
// Create a function that accepts a student's marks and a callback.
// The callback should determine whether the student:
// Passed
// Failed
// Got distinction
// Example
// function processResult(marks, callback) {
//   callback(marks);
// }
// function checkResult(marks) {
//   if (marks >= 40) {
//     console.log("Passed");
//   } else {
//     console.log("Failed");
//   }
// }
// processResult(75, checkResult);
// Bonus
// Create separate callbacks:
// checkPassFail
// checkGrade
// checkDistinction



// 4. Shopping Cart Bill Generator
// Task
// Create a function that accepts a cart total and a callback.
// The callback should apply a specific discount.
// Discount Callbacks
// Student discount: 10%
// Festival discount: 20%
// Premium customer discount: 15%
// No discount
// Example
// function generateBill(amount, discountCallback) {
//   const discount = discountCallback(amount);
//   const finalAmount = amount - discount;
//   console.log(`Original Amount: ₹${amount}`);
//   console.log(`Discount: ₹${discount}`);
//   console.log(`Final Amount: ₹${finalAmount}`);
// }
// function festivalDiscount(amount) {
//   return amount * 0.20;
// }
// generateBill(2000, festivalDiscount);
// Expected Output
// Original Amount: ₹2000
// Discount: ₹400
// Final Amount: ₹1600



// 5. Custom Array Processor
// Task
// Create your own version of forEach() using a callback.
// Example
// function myForEach(array, callback) {
//   for (let i = 0; i < array.length; i++) {
//     callback(array[i], i);
//   }
// }
// const numbers = [10, 20, 30];
// myForEach(numbers, function (value, index) {
//   console.log(`Index ${index}: ${value}`);
// });
// Expected Output
// Index 0: 10
// Index 1: 20
// Index 2: 30
// Bonus
// Create your own versions of:
// myMap()
// myFilter()
// myFind()



// 6. Login System with Callback
// Task
// Create a login system that accepts:
// Username
// Password
// Success callback
// Failure callback
// Example
// function login(username, password, onSuccess, onFailure) {
//   if (username === "admin" && password === "1234") {
//     onSuccess(username);
//   } else {
//     onFailure();
//   }
// }
// function successMessage(username) {
//   console.log(`Welcome back, ${username}!`);
// }
// function failureMessage() {
//   console.log("Invalid username or password.");
// }
// login("admin", "1234", successMessage, failureMessage);
// Bonus
// Add:
// Maximum three attempts
// Account lock message
// Different callback for locked accounts



// 7. Food Delivery Order System
// Task
// Simulate a food delivery process using callbacks.
// The process should be:
// Place order
// Confirm order
// Prepare food
// Deliver food
// Example
// function placeOrder(item, callback) {
//   console.log(`Order placed for ${item}`);
//   callback();
// }
// function confirmOrder() {
//   console.log("Order confirmed.");
// }
// placeOrder("Pizza", confirmOrder);
// Advanced Version
// Use nested callbacks:
// function placeOrder(item, callback) {
//   console.log(`Order placed: ${item}`);
//   callback();
// }
// function confirmOrder(callback) {
//   console.log("Order confirmed.");
//   callback();
// }
// function prepareFood(callback) {
//   console.log("Food is being prepared.");
//   callback();
// }
// function deliverFood() {
//   console.log("Food delivered.");
// }
// Call them in sequence.
// Challenge
// Understand how excessive nesting can lead to callback hell.



// 8. Notification System
// Task
// Create a function that sends a notification using different callbacks.
// Notification types:
// Email
// SMS
// WhatsApp
// Push notification
// Example
// function sendNotification(message, callback) {
//   callback(message);
// }
// function sendEmail(message) {
//   console.log(`Email sent: ${message}`);
// }
// function sendSMS(message) {
//   console.log(`SMS sent: ${message}`);
// }
// sendNotification("Your order has been shipped.", sendEmail);
// sendNotification("Your OTP is 4567.", sendSMS);



// 9. Employee Salary Processor
// Task
// Create a function that calculates an employee's final salary using a callback.
// The callback can apply:
// Bonus
// Tax
// Performance incentive
// Salary deduction
// Example
// function processSalary(salary, callback) {
//   const result = callback(salary);
//   console.log(`Final Salary: ₹${result}`);
// }
// function addBonus(salary) {
//   return salary + 5000;
// }
// function deductTax(salary) {
//   return salary - salary * 0.10;
// }
// processSalary(30000, addBonus);
// processSalary(30000, deductTax);
// 10. Mini Task Scheduler
// Task
// Create a function that accepts a task name and a callback.
// The callback should execute the task.
// Example
// function runTask(taskName, callback) {
//   console.log(`Starting task: ${taskName}`);
//   callback();
//   console.log(`Task completed: ${taskName}`);
// }
// runTask("Download File", function () {
//   console.log("File downloaded successfully.");
// });
// Bonus
// Create callbacks for:
// Upload file
// Send email
// Backup data
// Generate report



