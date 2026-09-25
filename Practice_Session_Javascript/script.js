// //1

// console.log("Hello World!");
// console.warn("Hello World!");
// console.error("Hello World!");
// console.info("Hello World!");
// console.table({Greeting: "Hello World!", name : "Kalyanshnu"});


// //2
// console.log(35 * 2 - (10 / 2) + 7);


// //3
// console.log(typeof "123");
// console.log(typeof 123);
// console.log(typeof null); // object
// console.log(typeof {});
// console.log(typeof []);
// console.log(typeof undefined);
// console.log(typeof NaN); //number


//4
// let container1  = 12;
// let container2  = 13;
// let Temp;

// c = container2;
// container2 = container1;
// container1 = container2;

// console.log(container1,container2);

// var a = 12;
// var b = 13;

// [a,b] =[b,a]
// console.log(a,b);


//5
// console.group("AAj ka hisaab");
// console.log("a");
// console.log("b");
// console.groupEnd();

// console.groupCollapsed("alphabet");
// console.log("a");
// console.log("b");
// console.groupEnd();


//6
// const obj = {
//     name: "Kalyanshnu",
//     age: 21,
//     email: "test@gmail.com"
// };

// obj.age = 22;  // constant se aap value change nahi kr skte update kr sakte ho value ke andar ki cheeje

// console.log(obj);


// Object.freeze(obj); // aasa (objects update) nahi karne ke liye hum object freeze karte hai
// obj.name = "Martina";

// console.log(obj);


///7 //to convert string to number
// let a = "50"
// console.log(typeof a, a);

// console.log(typeof Number(a), a);
// console.log(typeof parseInt(a), a);
// console.log(typeof +a, a);


//8 // to find if a certain word is in the given string or not without using includes
// let str = "JavaScript";

// console.log(str.includes("Script"));
// console.log(str.indexOf("Script") != -1);
// console.log(str.indexOf("script") != -1);
// console.log(str.search("Script") != -1);
// console.log(str.search("script") != -1);


//9
// let arr = [1,2,3,4,5];

// let ans = arr.reduce((acc,key) =>{
//     return acc + key;
// }, 0)


//11

// for(let index = 10; index > 0; index--){
//     console.log(index);
// }


//12

// let multiple = 1;

// while (multiple <= 10) {
//     console.log(3 * multiple);
//     multiple++;
// }

// var i = 3;
// while(i < 31){
//     console.log(i);
//     i += 3;
// }


//13
// let sum = 0;

// for( let index = 1 ; index <= 100 ; index++ ){
//     sum = sum + index;
// }
// console.log(sum);


//14




//15 use a for...of loop to iterate over the string "JavaScript"
// var str = "javaScript"

// for(let i of str){
//     console.log(i);
// }


//16
// let arr = [1,2,3,4,5,1,2,3,2,1];

// let arr2 = [...arr]; // for duplicating an array ... spread operator

// var ans = [...new Set(arr)];// make a set to array for unique elements


//17
// let arr = [1,2,3,4,5,4,3,2,1];

// // let unique = [... new Set(arr)]
// // unique.sort((a,b) =>{
// //     return b-a;
// // })
// // console.log(unique[1])

// // or

// console.log([...new Set(arr)].sort(function(a,b) {
//     return b - a;
// })[1])


//18
// let arr = [1,2,3,4,5,65,67,5,45,5,857,76]

// let dsc = arr.sort(function(a,b){
//     return b-a; //descending
// })

// let asc = arr.sort(function(a,b){
//     return a-b; //ascending 
// })


//19
// let arr = [1,2,4334,5,56,44,775,432,425,3523];
// var arr2 = [];

// for (let index = arr.length-1; index >= 0; index--) {
//     arr2.push(arr[index]);
// }


//20
let arr = [1,2,3,4,4,5,6,6,54,5,6,45];

let obj = new Object();

// // showed NaN as undefined++ = NaN 
// // didn't use obj.val as we are finding directly val named property in the object
// // we are using val which is in the function parameter.

// arr.forEach((val) => {
//     console.log(obj[val] === obj.val)
//     console.log(obj.val)
//     console.log(obj[val])
//     obj[val] === undefined ? obj[val] = 1 : obj[val]++; //ternary operator (if else operation)
// })

// console.log(obj);



 //Closure
// function abcd(){
//     let a = 12;

//     return function(){
//         console.log(a);
//     }
// }



///d24 sheet
// 21
// function Callerfcn(fcn) {
//     setTimeout(fcn, 3000);
// }

// Callerfcn(function() {
//     console.log("Hey");
// })


