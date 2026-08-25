// 1. Age Eligibility Checker:
// Create a JavaScript program that takes a person's age as input and:
// Prints "Child" if age is below 13.
// Prints "Teenager" if age is between 13 and 19.
// Prints "Adult" if age is 20 or above.
// Additionally, check whether the person is eligible to vote.
// Handle invalid ages such as negative numbers.
// Bonus: Also check driving-license eligibility.

let age = Number(prompt("Enter Your Age:"));
console.log(age)

if(age >= 20){
    console.log("Adult");
    console.log("Can Vote.");
    console.log("Eligible for Driver Liscense.");
}
else if( 13 >= age >= 19 ){
    console.log("Teenager");
    if(age >= 18){
        console.log("Can Vote.");
        console.log("Eligible for Driver Liscense.")
    }
    else{
        console.log("Can't Vote.");
        console.log("Not Eligible for Driver Liscense.");
    }
}
else if( age <= 13){
    console.log("Child");
    console.log("Can't Vote.");
    console.log("Not Eligible for Driver Liscense.");
}
else{
    console.log("Invalid Age");
}