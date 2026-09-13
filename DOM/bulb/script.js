var b = document.querySelector("#bulb")
var but = document.querySelector("button")

var flag = 0;

but.addEventListener("click", function(){
    if(flag == 0){
        b.style.backgroundColor = "Yellow";
        but.innerHTML = "OFF";
        console.log("Cliocked")
        flag = 1;
    }
    else{
        b.style.backgroundColor = "White";
        but.innerHTML = "ON";
        console.log("Again Clieckedf")
        flag = 0;
    }
})