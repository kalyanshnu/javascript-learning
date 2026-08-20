

// var age = +(prompt("Enter Your Age")) // this is also a way to take input as numbers and not as string

// let a = 10;
// let b = 10.00;

// if(a === b){
//     console.log("True");
// }
// else{
//     console.log("False");
    
// }

// var a = Number(prompt("Enter your answer"))
// var b = Number(prompt("Enter Your guess"))

// a>=b?console.log("Hello"):console.log("HiHIhi");

//ternary operator: a condition b ? True : False


// var a = 1;

// while(a<=100){
//     console.log("Sorry", a);
//     a++;
// }

// for(let a = 10; a > 0; a--){
//     console.log(a);
    
// }

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}
const head = new Node(10);
head.next = new Node(20);
head.next.next = new Node(30);
console.log(head.next.next.data);
