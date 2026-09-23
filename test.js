function chkAgeForVote(age) {
    if(age < 18){
        console.log("this age is not valid");
        return;
    }

    console.log("You're eligible for vote");
}

// chkAgeForVote(3);
// console.log("End of js program");

function chkAgeForVoteX(age){
    if(age < 18){
        return -1;
    }

    return 123;
}

// let result = chkAgeForVoteX(3);
// console.log(result)

// return means stop function or exit function with or without any value
// jab function kuch return nahi karega tab agar return likha toh simply function stop hokr function call ki next line chalayega
