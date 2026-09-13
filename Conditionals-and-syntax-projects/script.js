// 1. Age Eligibility Checker:
// Create a JavaScript program that takes a person's age as input and:
// Prints "Child" if age is below 13.
// Prints "Teenager" if age is between 13 and 19.
// Prints "Adult" if age is 20 or above.
// Additionally, check whether the person is eligible to vote.
// Handle invalid ages such as negative numbers.
// Bonus: Also check driving-license eligibility.

// let age = Number(prompt("Enter Your Age:"));
// console.log(age)

// if(age >= 20){
//     console.log("Adult");
//     console.log("Can Vote.");
//     console.log("Eligible for Driver Liscense.");
// }
// else if( 13 >= age >= 19 ){
//     console.log("Teenager");
//     if(age >= 18){
//         console.log("Can Vote.");
//         console.log("Eligible for Driver Liscense.")
//     }
//     else{
//         console.log("Can't Vote.");
//         console.log("Not Eligible for Driver Liscense.");
//     }
// }
// else if( age <= 13){
//     console.log("Child");
//     console.log("Can't Vote.");
//     console.log("Not Eligible for Driver Liscense.");
// }
// else{
//     console.log("Invalid Age");
// }


// 2. Even/Odd + Positive/Negative Checker
// Take a number from the user and determine:
// Whether it is positive, negative, or zero.
// Whether it is even or odd.
// Example:
// Input: -7
// Output:
// Negative number
// Odd number
// Bonus: Try solving it using the minimum number of if statements possible.

// let Num = Number(prompt("Enter a Number:"))

// if(Num > 0){
//     console.log("Positive number");
//     if(Num%2 === 0){
//         console.log("Even number");
//     }
//     else{
//         console.log("Odd number");
//     }
// }
// else if(Num === 0){
//     console.log("Zero");
// }
// else if(Num < 0){
//     console.log("Negative number");
//     if(Num%2 === 0){
//         console.log("Even number");
//     }
//     else{
//         console.log("Odd number");
//     }
// }
// else{
//     console.log("invalid Input");
// }


// 3. Grade Calculator
// Create a program that accepts marks from 0–100 and assigns:
// 90–100 → A+
// 80–89  → A
// 70–79  → B
// 60–69  → C
// 50–59  → D
// Below 50 → F
// Also:
// Reject marks below 0 or above 100.
// Display "Pass" or "Fail".
// Bonus: Add different remarks for each grade.

// let marks = Number(prompt("Enter your Marks:"))

// if(marks >= 90 && marks <= 100 ){
//     console.log("A+");
// }
// else if(marks >= 80 && marks < 90){
//     console.log("A");
// }
// else if(marks >= 70 && marks < 80){
//     console.log("B");
// }
// else if(marks >= 60 && marks < 70){
//     console.log("C");
// }
// else if(marks >= 50 && marks < 60){
//     console.log("D");
// }
// else if(marks < 50){
//     console.log("F");
// }
// else{
//     console.log("Invalid Marks");
// }


// 4. Login Authentication
// Create a simple login system.
// Given:
// username = "admin"
// password = "12345"
// Ask the user for their username and password.
// Display:
// "Login successful" if both are correct.
// "Incorrect password" if username is correct but password is wrong.
// "User not found" if username is incorrect.
// Bonus: Add an account-lock condition after 3 failed attempts.

// let user = "admin"
// let pass = "12345"
// let attempt = 0;
// let maxAttempt = 3;

// do {

//     if (attempt < maxAttempt){
//         console.log("Your Account is locked for 24 hours");
//         break;
//     }

//     let Username = prompt("Enter Your UserName:");
//     let password = prompt("Enter Your Password");

//     if( Username === user){
//         if (password === pass) {
//             console.log("Login successful");
//             break;
//         }
//         else {
//             console.log("Incorrect password");
//             attempt++;
//             continue;
//         }
//     }
//     else{
//         console.log("User not found");
//         attempt++;
//         continue;
//     }

// }while (attempt < 3);



// 5. Largest of Three Numbers
// Take three numbers as input and determine the largest number using conditional statements.
// Example:
// Input:
// 25
// 72
// 41
// Output:
// 72 is the largest number.
// Bonus: Handle the case where two or all three numbers are equal.

// let n1 = Number(prompt("Enter the first Number: "));
// let n2 = Number(prompt("Enter the second Number: "));
// let n3 = Number(prompt("Enter the third Number: "));

// if(n1 >= n2 && n1 >= n3){
//     console.log(`${n1} is the largest number.`);
// }
// else if(n2 >= n1 && n2 >= n3){
//     console.log(`${n2} is the largest number.`);
// }
// else if(n3 >= n1 && n3 >= n2){
//     console.log(`${n3} is the largest number.`);
// }
// else if( n1 === n2 === n3){
//     console.log(`${n1} is the largest number.`);
// }
// else{
//     console.log(NaN);
// }


// 6. Leap Year Checker
// Create a program that takes a year and determines whether it is a leap year.
// Rules:
// A year divisible by 400 is a leap year.
// A year divisible by 100 is not a leap year.
// A year divisible by 4 is a leap year.
// Otherwise, it isn't.
// Bonus: Reject years less than 1.

// let Year = Number(prompt("Enter a Year: "));

// if(Year < 1){
//     console.log("Not a Valid Year");
// }
// else{
//     if((Year % 400 === 0) ||(Year % 4 === 0 && Year % 100 !=0 )){
//         console.log(`${Year} is a Leap Year`);
//     }
//     else{
//         console.log(`${Year} is not a Leap Year`);
//     }
// }


// 7. Temperature Advisor
// Take the current temperature as input.
// Display:
// Below 10      → Very Cold
// 10–20         → Cold
// 21–30         → Pleasant
// 31–40         → Hot
// Above 40      → Extremely Hot
// Bonus: Add advice:
// Very Cold → Wear warm clothes.
// Hot → Drink plenty of water.
// Extremely Hot → Avoid going outside.


// let Temperature = Number(prompt("Enter the Current Temperature in degree celsius: "));

// if(Temperature < 10){
//     console.log("Very Cold");
//     console.log("Wear warm clothes.");    
// }
// else if( 10 < Temperature && Temperature <= 20){
//     console.log("Cold");
// }
// else if( 20 < Temperature && Temperature <= 30){
//     console.log("Pleasant");
// }
// else if( 30 < Temperature && Temperature <= 40){
//     console.log("Hot");
//     console.log("Drink plenty of water.");
// }
// else if(Temperature > 40){
//     console.log("Extremely");
//     console.log("Avoid going outside.");
// }
// else{
//     console.log("Not a valid temperature");
// }


// 🟡 Level 2 — Combining Conditions
// 8. Simple ATM
// Create a simple ATM program.
// Start with:
// Balance = ₹10,000
// PIN = 1234
// Ask the user for their PIN.
// If the PIN is correct, show:
// 1. Check Balance
// 2. Withdraw Money
// 3. Deposit Money
// Implement the following:
// Check balance.
// Withdraw money.
// Deposit money.
// Don't allow withdrawal greater than balance.
// Don't allow negative/zero deposits.
// Display an error for an invalid menu choice.
// Bonus: Add a daily withdrawal limit.

