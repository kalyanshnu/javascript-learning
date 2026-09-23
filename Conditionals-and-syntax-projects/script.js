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


// let Balance = 10000
// let F_PIN = 1234

// let PIN = Number(prompt("Enter your PIN: "));
// let count = 0;

// if(PIN === F_PIN){
//     let Choice = Number(prompt("Welcome User, \n" +
//         "What do you want to do Choose? \n " +
//         "1. Check Balance \n" +
//         " 2. Withdraw Money \n" +
//         " 3. Deposit Money"));

//     if(Choice === 1){
//         console.log(`Your account Balance: ${Balance}`);
//     }
//     else if(Choice === 2){
//         let withdraw = Number(prompt("Enter the Withdraw Amount: "));
        
//         if(count < 5){
//             if(withdraw > 0 && withdraw <= Balance){
//                 Balance = Balance - withdraw;
//                 console.log(`${withdraw} has been withdrawn.`);
//                 console.log(`Your current Balance: ${Balance}`);
//                 count++;
//             }
//             else{
//                 console.log("invalid amount or insufficient Balance.");
//             }
//         }
//         else{
//             console.log("Daily withdrawal limit reached.");
//         }
//     }
//     else if(Choice === 3){
//         let deposit = Number(prompt("Enter the Deposit Amount: "));

//         if(deposit > 0){
//             Balance = Balance + deposit;
//             console.log(`${deposit} amountconsole.log("Daily withdrawal limit reached"); has been deposited to your account.`);
//         }
//         else{
//             console.log("Invalid deposit!!!!");
//         }
//     }
//     else{
//         console.log("Invalid menu choice");
//     }
// }
// else{
//     console.log("Incorrect PIN!");
// }



// 9. Movie Ticket Price Calculator
// Create a ticket-price calculator.
// Ask for:
// Age
// Whether today is a weekend
// Whether the person is a student
// Rules:
// Normal ticket = ₹200
// Child (<13) = ₹100
// Senior citizen (60+) = ₹120
// Student = ₹150
// Weekend surcharge = ₹50
// Calculate the final ticket price based on the conditions.
// Bonus: Decide how the weekend surcharge interacts with discounts.



// let Age = Number(prompt("Enter Your Age: "));
// let IsStudent = confirm("Are you a student?");
// let IsWeekend = confirm("is today weekend?");
// let BasePrice;

// if(Age < 13 ){
//     BasePrice = 100; 
// }
// else if(Age >= 60){
//     BasePrice = 120;
// }
// else if(IsStudent){
//     BasePrice = 150;
// }
// else{
//     BasePrice = 200;
// }

// let FinalPrice = BasePrice;
// if(IsWeekend){
//     FinalPrice += 50;
// }

// console.log(`Price of the Ticket is: ₹${FinalPrice}`)



// 10. Electricity Bill Calculator
// Create an electricity bill calculator.
// Use these rates:
// 0–100 units       → ₹2/unit
// 101–200 units     → ₹3/unit
// 201–300 units     → ₹5/unit
// Above 300 units   → ₹7/unit
// Ask the user for the number of units consumed and calculate the bill.
// Important: Use slab-based calculation.
// For example, 250 units should not simply be:
// 250 × ₹5
// Instead, calculate each slab separately.
// Bonus: Add a fixed ₹100 service charge.

// let nunits = Number(prompt("Enter the no. of units consumed: "));

// if(nunits > 300){
//     console.log(`Your Elctricity Bill: ${(nunits % 300) * 7 + 500 + 300 + 200 + 100}`);
// }
// else if(nunits > 200 && nunits <= 300){
//     console.log(`Your Elctricity Bill: ${(nunits % 200) * 5 + 300 + 200 + 100}`);
// }
// else if(nunits > 100 && nunits <= 200){
//     console.log(`Your Elctricity Bill: ${(nunits % 100) * 3 + 200 + 100}`);
// }
// else{
//     console.log(`Your Elctricity Bill: ${nunits * 2 + 100}`);
// }


// Level 3 — Logic Projects
// 11. Rock Paper Scissors
// Create a Rock-Paper-Scissors game.
// The user chooses:
// rock
// paper
// scissors
// The computer randomly chooses one.
// Determine:
// Player wins
// Computer wins
// Draw
// Rules:
// Rock beats Scissors
// Scissors beats Paper
// Paper beats Rock
// Bonus: Add score tracking for 5 rounds.

// let Computer = ["rock","paper","scissor"];
// let Round = 1;
// let PlayerScore = 0;
// let ComputerScore = 0;
// let draw = 0;


// while (Round <= 5) {

//     let Player = prompt("Choose from Rock, Paper and Scissor").toLowerCase();
//     let Comp_Choice = Computer[Math.floor(Math.random() * Computer.length)];

//     console.log(`\n Round ${Round}`);
//     console.log(`\n Player: ${Player}`);
//     console.log(`\n Computer: ${Comp_Choice}`);

    
//     if (!Computer.includes(Player)){
//         console.log("Invalid Choice, Choose Rock, Paper or scissor");
//         continue;
//     }
//     else if((Player == "rock" && Comp_Choice == "scissor") ||
//     (Player == "paper" && Comp_Choice == "rock") ||
//     (Player == "scissor" && Comp_Choice == "paper")){
//         console.log("Player Wins");
//         PlayerScore++;
//     }
//     else if(Player == Comp_Choice){
//         console.log("Draw");
//         draw++;
//     }
//     else{
//         console.log("Computer Wins");
//         ComputerScore++;
//     }

//     Round++
// }

// console.log("\n______FINAL SCORE________\n");
// console.log(`Player Score: ${PlayerScore}`);
// console.log(`Computer Score: ${ComputerScore}`);
// console.log(`Draw: ${draw}`);

// if(PlayerScore > ComputerScore){
//     console.log("Player wins the game!");
// }
// else if(PlayerScore < ComputerScore){
//     console.log("Computer wins the game!");
// }
// else{
//     console.log("The game is a draw!");
// }



// 12. Mini Quiz Game
// Create a quiz containing at least 5 questions.
// For every correct answer:
// +1 point
// For every wrong answer:
// 0 points
// At the end:
// 5 → Excellent
// 4 → Very Good
// 3 → Good
// 1–2 → Needs Improvement
// 0 → Try Again
// Bonus:
// Show the correct answer after a wrong response.
// Add different difficulty levels.
// Give bonus points for difficult questions.

// let Questions = ["1. Which chemical element and gas makes up approximately 78% of Earth's atmosphere?",
//     "2. What is the capital city of Australia? (*)",
//     "3. Which ancient South American civilization built the famous mountaintop citadel of Machu Picchu? (*)",
//     "4. What subatomic particle carries a negative electrical charge? ",
//     "5. What is traditionally recognized as the longest river in the world?"
// ];
// let Answer = ["nitrogen",
//     "canberra",
//     "inca",
//     "electron",
//     "nile"
// ];
// let Points = 0;
// let Bonus = 0;
// let ans;

// console.log("Difficulty levels Denoted from (*)");
// console.log("\n For answering Difficult Questions you will get +0.5");

// for (let index = 0; index < Questions.length; index++) {

//     console.log(Questions[index]);
//     ans = prompt(`Write the answer to this question: `).toLowerCase().trim();

//     if(Answer[index] === ans){
//         Points++;
//         if(Questions[index].includes("*")){
//             Bonus += 0.5;
//         }
//     }
//     else{
//         console.log(`${ans} is wrong.`);
//         console.log(`Correct Answer is: ${Answer[index]}`);
//     }
// }

// let FinalScore = Points + Bonus;

// console.log("\n________Final Score__________\n");
// console.log("Final evaluation is based on only points");
// console.log(`Points : ${Points}`)
// console.log(`Bonus Points : ${Bonus}`)
// console.log(`Your Score is: ${FinalScore}`);


// if(Points >=  5){
//     console.log("Excellent");
// }
// else if(Points >= 4){
//     console.log("Very Good");
// }
// else if(Points >= 3){
//     console.log("Good");
// }
// else if(Points > 0){
//     console.log("Need Improvement");
// }
// else{
//     console.log("Try Again");
// }



// 🚀 Final Challenge
// 13. Student Result & Eligibility System
// Build a complete student evaluation system.
// Take:
// Student name
// Marks in 5 subjects
// Attendance percentage
// Age
// Calculate:
// Total marks
// Percentage
// Grade
// Pass/fail status
// Grade system:
// 90+ → A+
// 80–89 → A
// 70–79 → B
// 60–69 → C
// 50–59 → D
// Below 50 → F
// Then determine:
// Exam eligibility
// Student is eligible if:
// Attendance >= 75%
// AND
// All subjects are passed
// Scholarship eligibility
// Student gets scholarship if:
// Percentage >= 85%
// AND
// Attendance >= 80%
// Final category
// A+ → Outstanding
// A  → Excellent
// B  → Very Good
// C  → Good
// D  → Average
// F  → Fail
// Bonus challenge: Add different scholarship levels:
// 90%+ → 100% scholarship
// 85–89% → 50% scholarship
// 80–84% → 25% scholarship
// Below 80% → No scholarship