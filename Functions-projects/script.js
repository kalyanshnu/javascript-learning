// 🟢 Level 1 — Basic Function Projects
// Focus on function declaration, parameters, arguments, return values, and calling functions.
// 1) Simple Calculator Functions
// Challenge: Create separate functions for basic arithmetic operations.
// Requirements:
// Create add(a, b)
// Create subtract(a, b)
// Create multiply(a, b)
// Create divide(a, b)
// Each function should return the result.
// Take two numbers from the user and display the results.
// Example:
// Input: 10, 5
// Addition: 15
// Subtraction: 5
// Multiplication: 50
// Division: 2
// Bonus: Create a calculate(a, b, operator) function that uses switch.
// Concepts: Parameters, return, function calls.

// let a = Number(prompt("Enter a Number: "));
// let b = Number(prompt("Enter a 2nd Number: "));
// let op = prompt("Enter the mathematical operation( + , - , * , / ) you want to perform: ");

// function calculate(a, b, operator) {
//     switch (operator) {
//         case "+":
//             console.log(`Inputs: ${a} , ${b}`);
//             console.log(`Addition: ${a+b}`);
//             break;
//         case "-":
//             console.log(`Inputs: ${a} , ${b}`);
//             console.log(`Subtraction: ${a-b}`);
//             break;
//         case "*":
//             console.log(`Inputs: ${a} , ${b}`);
//             console.log(`Multiplication: ${a*b}`);
//             break;
//         case "/":
//             console.log(`Inputs: ${a} , ${b}`);
//             console.log(`Division: ${a/b}`);
//             break;
//         default:
//             console.log(`Inputs: ${a} , ${b}`);
//             console.log("Invalid Operation/ invalid Input");
//             break;
//     }
// }

// calculate(a,b,op);


// 2) Even/Odd & Positive/Negative Functions
// Challenge: Create reusable functions to analyze numbers.
// Requirements:
// checkEvenOdd(number)
// checkPositiveNegative(number)
// checkZero(number)
// Each function should return or print the appropriate result.
// Example:
// Input: -8
// Even
// Negative
// Bonus: Create one analyzeNumber() function that calls all three.
// Concepts: Functions + conditionals.

// 3) Grade Calculator Function
// Challenge: Create a function that calculates a grade based on marks.
// Requirements:
// Create getGrade(marks).
// Return the grade.
// Validate marks between 0–100.
// Display the returned grade.
// Example:
// getGrade(95) → "A+"
// getGrade(72) → "B"
// getGrade(35) → "F"
// Bonus: Create a separate getRemark(grade) function.
// Concepts: Parameters, return values, conditionals.



// 4) Temperature Converter
// Challenge: Create functions to convert temperatures.
// Requirements:
// celsiusToFahrenheit(celsius)
// fahrenheitToCelsius(fahrenheit)
// Take input from the user.
// Return the converted value.
// Formulas:
// Fahrenheit = (Celsius × 9/5) + 32
// Celsius = (Fahrenheit − 32) × 5/9
// Bonus: Add Kelvin conversion functions.
// Concepts: Parameters, return, arithmetic.



// 5) String Utility Functions
// Challenge: Create reusable functions for string operations.
// Requirements:
// reverseString(str)
// countCharacters(str)
// toUpperCaseText(str)
// isPalindrome(str)
// Example:
// reverseString("hello") → "olleh"
// countCharacters("JavaScript") → 10
// isPalindrome("madam") → true
// Bonus: Create a function to count vowels.
// Concepts: Strings, methods, return values.



// 🟡 Level 2 — Functions + Loops + Logic
// These projects teach you to break a bigger problem into smaller reusable functions.

// 6) Prime Number Functions
// Challenge: Create functions to work with prime numbers.
// Requirements:
// isPrime(number) → returns true or false.
// printPrimes(start, end) → prints all primes in a range.
// Use isPrime() inside printPrimes().
// Example:
// isPrime(7) → true
// isPrime(10) → false
// printPrimes(10, 20)
// → 11 13 17 19
// Bonus: Create countPrimes(start, end).
// Concepts: Functions calling functions, loops, boolean returns.



// 7) Factorial & Fibonacci Functions
// Challenge: Create mathematical functions.
// Requirements:
// factorial(n) → returns factorial.
// fibonacci(n) → returns the first n terms.
// Use loops inside the functions.
// Example:
// factorial(5) → 120
// fibonacci(7) → 0 1 1 2 3 5 8
// Bonus: Create sumOfDigits(number) and reverseNumber(number).
// Concepts: Loops inside functions, return values.



// 8) Number Guessing Game with Functions
// Challenge: Build a guessing game using separate functions.
// Requirements:
// generateRandomNumber()
// getHint(guess, target) → returns "Too high", "Too low", or "Correct".
// playGame() → controls the game loop.
// Count attempts.
// Bonus: Create getScore(attempts).
// Concepts: Function decomposition, loops, conditions.



// 9) Student Result System
// Challenge: Refactor your earlier student result project using functions.
// Requirements:
// calculateTotal(marks)
// calculatePercentage(total, numberOfSubjects)
// getGrade(percentage)
// isEligible(attendance, marks)
// getScholarship(percentage, attendance)
// Example:
// Total: 425
// Percentage: 85%
// Grade: A
// Eligible: Yes
// Scholarship: 50%
// Bonus: Create a single generateResult() function that combines everything.
// Concepts: Multiple functions, return values, reusable logic.




// 10) Expense Calculator
// Challenge: Create functions to analyze expenses.
// Requirements:
// calculateTotal(expenses)
// calculateAverage(expenses)
// findHighestExpense(expenses)
// findLowestExpense(expenses)
// Example:
// Expenses: [100, 250, 50, 400]
// Total: 800
// Average: 200
// Highest: 400
// Lowest: 50
// Bonus: Add a function to categorize expenses.
// Concepts: Functions, loops, arrays (if learned).


// 🔥 Level 3 — Practical Function-Based Projects
// These are closer to small applications and teach you how to structure a program.

// 11) ATM System Using Functions
// Challenge: Rebuild your ATM project using separate functions.
// Requirements:
// checkBalance()
// deposit(amount)
// withdraw(amount)
// showMenu()
// startATM()
// Use a loop to keep the ATM running and switch to handle menu choices.
// Bonus: Add validatePIN() and printReceipt().
// Concepts: Functions, loops, switch, shared state.



// 12) Quiz Game with Functions
// Challenge: Build a quiz game where each responsibility is handled by a function.
// Requirements:
// askQuestion(question)
// checkAnswer(userAnswer, correctAnswer)
// calculateScore()
// displayResult(score)
// startQuiz()
// Bonus: Add difficulty levels and a retry function.
// Concepts: Functions, loops, strings, conditions.


// 13) Mini Banking System
// Challenge: Create a banking system where each operation is a function.
// Requirements:
// createAccount()
// deposit()
// withdraw()
// checkBalance()
// showTransactionHistory()
// startBankingApp()
// Bonus: Add multiple accounts using arrays and objects.
// Concepts: Functions, loops, switch, data management.


// 14) Text Adventure Game with Functions
// Challenge: Build a text adventure game with multiple functions.
// Requirements:
// startGame()
// showIntroduction()
// makeChoice()
// exploreForest()
// openTreasure()
// gameOver()
// Use conditions and loops to control the story.
// Bonus: Add health, inventory, and multiple endings.
// Concepts: Functions, strings, switch, loops, conditions.



// 15) Utility Toolkit
// Challenge: Create a single program containing multiple reusable utilities.
// Requirements:
// A menu using switch.
// Functions for:
// Factorial
// Prime check
// Palindrome check
// Reverse string
// Temperature conversion
// Even/odd check
// The user selects an operation, enters input, and gets the result.
// Bonus: Keep the program running until the user chooses Exit.
// Concepts: Functions + switch + loops + strings + conditionals.

