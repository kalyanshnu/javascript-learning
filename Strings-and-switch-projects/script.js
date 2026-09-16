// 1. Username Validator
// Challenge: Create a program that validates a username.
// Requirements:
// Ask the user to enter a username.
// Check whether the username is at least 5 characters long.
// Check whether it contains spaces.
// Check whether it starts with a number.
// Display whether the username is valid or invalid.
// Example:
// Input: coder123
// Output: Valid username
// Input: 12 coder
// Output: Username cannot contain spaces
// Concepts: length, includes(), startsWith(), conditionals.


// let UserName = prompt("Enter your user name: ");
// let numbers = "0123456789"

// if(UserName.length >= 5){
//     if(!UserName.includes(" ")){
//         if(!numbers.includes(UserName[0])){
//             console.log("Valid username");
//         }
//         else{
//             console.log("username cannot start with number.");
//         }
//     }
//     else{
//         console.log("username cannot includes spaces.");
//     }
// }
// else{
//     console.log("username must be 5 character long.")
// }


// 2) Palindrome Checker
// Challenge: Check whether a word reads the same backward and forward.
// Requirements:
// Take a word as input.
// Reverse the word.
// Compare it with the original.
// Print whether it is a palindrome.
// Example:
// Input: madam
// Output: Palindrome
// Input: hello
// Output: Not a palindrome
// Bonus: Make it case-insensitive and ignore spaces.
// Concepts: toLowerCase(), split(), reverse(), join().


// 3) Character Counter
// Challenge: Analyze a sentence and count different types of characters.
// Requirements:
// Take a sentence as input.
// Count the number of vowels.
// Count the number of consonants.
// Count the number of spaces.
// Count the number of digits.
// Example:
// Input: Hello World 123
// Output:
// Vowels: 3
// Consonants: 7
// Spaces: 2
// Digits: 3
// Bonus: Also count special characters.
// Concepts: String traversal, includes(), length, conditionals.


// 4) Word & Sentence Analyzer
// Challenge: Analyze a sentence entered by the user.
// Requirements:
// Count the total characters.
// Count the number of words.
// Display the first word.
// Display the last word.
// Convert the sentence to uppercase.
// Check whether a particular word exists in the sentence.
// Example:
// Input: JavaScript is fun
// Output:
// Characters: 18
// Words: 3
// First word: JavaScript
// Last word: fun
// Uppercase: JAVASCRIPT IS FUN
// Bonus: Find the longest word.
// Concepts: trim(), split(), toUpperCase(), includes().


// 5) Password Strength Checker
// Challenge: Create a basic password strength checker.
// Requirements:
// Ask the user to enter a password.
// Check whether it has at least 8 characters.
// Check whether it contains uppercase letters.
// Check whether it contains lowercase letters.
// Check whether it contains a number.
// Check whether it contains a special character.
// Output:
// Weak
// Medium
// Strong
// Bonus: Display exactly which requirements are missing.
// Concepts: String methods, conditions, regular expressions (optional).



// 6) Text Formatter
// Challenge: Build a small text-formatting utility.
// Requirements:
// Take a sentence as input.
// Convert it to uppercase.
// Convert it to lowercase.
// Remove extra spaces from the beginning and end.
// Replace a word with another word.
// Display the number of characters.
// Example:
// Input: "  I love JavaScript  "
// Output:
// Uppercase: I LOVE JAVASCRIPT
// Lowercase: i love javascript
// Trimmed: I love JavaScript
// Bonus: Create a username from a person's full name.
// Concepts: trim(), replace(), toUpperCase(), toLowerCase().



// 🟡 Switch Case Projects
// These are especially useful for understanding menu-driven programs and choosing one action from multiple fixed options.
// 7) Day of the Week
// Challenge: Take a number from 1–7 and display the corresponding day.
// 1 → Monday
// 2 → Tuesday
// 3 → Wednesday
// 4 → Thursday
// 5 → Friday
// 6 → Saturday
// 7 → Sunday
// Requirements:
// Use switch.
// Display "Invalid day" for any other number.
// Bonus: Display whether it is a weekday or weekend.
// Concepts: switch, case, break, default.


// 8) Simple Calculator
// Challenge: Create a calculator using switch.
// Requirements:
// Ask for two numbers.
// Ask for an operator: +, -, *, /, %.
// Use switch to perform the operation.
// Handle division by zero.
// Display an error for an invalid operator.
// Example:
// Input: 10, 5, *
// Output: 50
// Bonus: Add ** for exponentiation.
// Concepts: switch, arithmetic operators, validation.



// 9) Month & Season Finder
// Challenge: Take a month number and display its name and season.
// Requirements:
// Use switch for month names.
// Display the season:
// December, January, February → Winter
// March, April, May → Spring
// June, July, August → Summer
// September, October, November → Autumn
// Bonus: Display the number of days in the month.
// Concepts: Grouped case statements, break, nested logic.


// 10) Food Ordering Menu
// Challenge: Create a simple food-ordering system.
// Menu:
// 1. Pizza → ₹200
// 2. Burger → ₹100
// 3. Pasta → ₹150
// 4. Sandwich → ₹80
// 5. Exit
// Requirements:
// Ask the user to select an item.
// Use switch to display the item and price.
// Handle invalid choices.
// Ask for quantity and calculate the total.
// Bonus: Add a discount based on the total bill.
// Concepts: switch, arithmetic, user input.



// 11) Traffic Light Simulator
// Challenge: Take a traffic-light color as input.
// Requirements:
// "red" → Stop
// "yellow" → Get ready
// "green" → Go
// Anything else → Invalid color
// Bonus: Make the input case-insensitive so "RED", "Red", and "red" all work.
// Concepts: String methods + switch.



// 12) ATM Menu Using Switch
// Challenge: Rebuild your ATM project using switch.
// Requirements:
// Ask for a PIN.
// If correct, display:
// 1. Check Balance
// 2. Withdraw
// 3. Deposit
// 4. Exit
// Use switch to perform the selected operation.
// Validate withdrawal and deposit amounts.
// Bonus: Add a transaction receipt message.
// Concepts: switch, nested conditionals, arithmetic, menu logic.



// Combined String + Switch Projects
// These are the best ones to attempt after completing the basics.
// 13) Mini Chatbot
// Create a chatbot that responds to basic user messages.
// Requirements:
// Ask the user to enter a message.
// Convert it to lowercase.
// Use switch to respond to fixed messages.
// "hello" → "Hi! How are you?"
// "how are you" → "I'm doing great!"
// "bye" → "Goodbye!"
// "help" → "I can respond to basic messages."
// Bonus: Use switch(true) to handle more flexible conditions, or use includes() to detect keywords.
// Concepts: Strings, toLowerCase(), switch, includes().



// 14) Restaurant Order System
// Build a small restaurant ordering program.
// Requirements:
// Ask for the customer's name.
// Display a food menu.
// Use switch to select the food.
// Ask for quantity.
// Calculate the total.
// Print a formatted order summary.
// Bonus: Apply a discount code using string comparison.
// "SAVE10" → 10% discount
// "WELCOME" → 5% discount
// Concepts: Strings, switch, arithmetic, formatting.



// 15) Text Adventure Game
// Create a simple text-based adventure game.
// Requirements:
// Ask the player to choose a direction: "left", "right", or "forward".
// Use switch to determine what happens.
// Ask additional questions based on the choice.
// Use conditions to determine whether the player wins or loses.
// Example:
// Choose a direction: left
// You found a treasure chest!
// Do you open it? yes/no
// Bonus: Add health points, inventory, and multiple endings.
// Concepts: Strings, switch, nested conditionals, logical operators.



