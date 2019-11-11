/* 

variable for Grants health and User health

while(userHealth > 0 && grantDeaths < 3) {
    2 random numbers
    grantHealth -= .....
    userHealth -= ......

// log out damage and health

if(grantHealth <= 0){
    grantDeaths++;
    grantHealth = 10
}
// determine winner
}

*/

let answer = prompt("Do you want to play?");

 let name;
if (answer === "yes") {
    name = prompt("What is your name?")
}

let userHealth = 40;
let grantHealth = 10;
let grantDeath = 0;
let userName = name;
let grantName = "Grant the Mighty Chicken";

let min = 1;
let max = 2;

function getRandomNumber(min, max){
   return Math.floor(Math.random() * (max - min + 1)) + min;
}


while(userHealth > 0 && grantDeath < 3){
    userHealth -= getRandomNumber(min, max);
    grantHealth -= getRandomNumber(min, max);
 console.log(name + " has ", userHealth, " left.")
 console.log(grantName + " has ", grantHealth, " left. ")

if(grantHealth <= 0){
    grantDeath++;
    grantHealth = 10;
}
}

if(grantDeath === 3){
    console.log(userName + " is the winner!")
}
else{
    console.log(grantName + " is the winner!")
}