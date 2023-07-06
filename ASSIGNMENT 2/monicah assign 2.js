// Assignment
// 1.create five if statements
1.
let water = "Drinks";
if(water == "Drinks" ){
    console.log("It is a liquid");
}else{
    console.log("It is a solid");
}

2.
let History = "science suject";
if(History == "science subject"){
    console.log("It is a science");
}else{
    console.log("it is an art");
}

3.
let bettingAge = 30;
if(bettingAge == 25){
    console.log("You are breaking laws")
}else if(bettingAge > 25){
    console.log("You are not breaking laws")
}else{
    console.log("You should not try participating")
}

4.
let yorghurt = "diary product";
if(yorghurt == "diary product"){
    console.log("It is high in protein")
}else{
    console.log("It is non-nutrious")
}

5.
let month = "31 days";
if(month == "31 days"){
    console.log("The month is January");
}else if(month == "28 days"){
    console.log("The month is February");
}else{
    console.log("The month is August");
}



// 2.create 5 switch statement
1.
let age = 20
switch(age){
    case 17:
        console.log("Born in 2006");
        break;
    case 20:
        console.log("Born in 2003");
        break;
    case 13:
        console.log("Born in 2010");
        break;
    default:
        console.log("Born in 19's")
}

2.
let Pass = 50;
switch(Pass){
    case 40:
        console.log("Failed exams");
        break;
    case 50:
        console.log("Passed the exam");
        break;
    case 90:
        console.log("Excelled in exam");
        break;
    default:
        console.log("Average perfomance")
}

3.
let day = "Wednesday"
switch(day){
    case "Monday":
        console.log("Office work");
        break;
    case "Wednesday":
        console.log("Movie Night");
        break;
    case "Sunday":
    case "Saturday":
        console.log("Beach party");
        break;
    default:
        console.log("Reviews")
}


4.
let food = "Cooked";
switch(food){
    case "raw":
        console.log("Not eatable");
        break;
    case "steamed":
        console.log("Half cooked");
        break;
    case "Cooked":
        console.log("Ready to eat");
        break;
    default:
        console.log("Expired")
}

5.
let girlName = "Monixquello";
switch(girlName){
    case "Brian":
        console.log("Elegant");
        break;
    case "Monixquello":
        console.log("Beautiful and Innocent");
        break;
    case "Martha":
        console.log("Stubborn");
        break;
    default:
        console.log("Not known")

}


3.
// 3.create a switch case for arrays
let months = ["January", "March", "April", "August"]
for(let month of months){
    switch(month){
        case "May":
            console.log("sunny");
            break;
        case "March":
            console.log("rainny");
            break;
        case "December":
            console.log("cloudy");
            break;
        default:
            console.log("what's the weather")
    }
}


2.
let tomatoes = ["ripe", "raw", "rotten"]
for(let tomato of tomatoes){
    switch(tomatoes){
        case "Not ready":
            console.log("Bad");
            break;
        case "rotten":
            console.log("very bad");
            break;
        case "broken":
            console.log("harmful");
            break;
        default:
            console.log("Condition not known")
    }
}


3.
let pencilTypes = ["nataraj", "led", "picfare"]
for(let pencilType of pencilTypes){
    switch(pencilTypes){
        case "bic":
            console.log("classy");
            break;
        case "nataraj":
            console.log("formal");
            break;
        default:
            console.log("choose your pen type")
    }
}