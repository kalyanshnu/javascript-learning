let arr = [21, 22, 36,2,3,435,35,5,353,535,35,1,1,2,3];

let a = [...new Set(arr)].sort((a,b) =>{
    console.log(a - b);
})

console.log(a);
console.log(arr);
