let name = "Spencer";
let age = 27;
let birthday = "June 30";
let detroitGC = false;
let lifeEvents = ["I was born in Ludington, Michigan.", "I went to NMU.", "I lived in Dublin, Ireland for three months.", "I'm currently in Front-End Bootcamp"]

if (detroitGC){
    console.log("My name is", name, "and I am a student at Grand Circus in Detroit, Michigan. I am currently", age, "years old and my birthday is on", birthday, ".");
} else {
    console.log("My name is", name, "and I am a student at Grand Circus in Grand Rapids, Michigan. I am currently", age, "years old and my birthday is on", birthday, ".");
}



for (let i = 0; i<lifeEvents.length; i++ ){
    console.log(lifeEvents[i]);

}

var counter = 0;

while(true) {

var randomNumber = Math.floor(Math.random() * (11 - 1) + 1); 

if (randomNumber !== 5 ){
    counter++;
    console.log(`randomNumber(${randomNumber}) !== 5`);
} else {
    counter++;
    console.log("5 === 5. It took", counter, "iterations to randomly generate the number 5.");
    break;
}
}


