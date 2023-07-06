//Create 5 if statements 
//Create 5 switch cases
//Create a switch statement for arrays
           

                  //IF STATEMENTS
//NO.1
let day = "Monday";

if (day == "Wednesday"){
    console.log("Yay...Football");
}else{
    console.log("Aww...No Football");}

//NO.2
let food = "Rice";

if (food == "rice"){
    console.log("EAT");
}else{
    console.log("DON'T EAT");
}
    
//NO.3
let match = "True";
if (match == "true"){
    console.log("Buy Me food");
}else{
        console.log("Don't buy me food");
    }

//NO.4
let num1 = 33;
if (num1 <= 24){
    console.log("try again");
}else{
    console.log("Good job");
}

// NO.5
let num2 = 62;
if (num2 >= 90){
    console.log("Winner winner chicken dinner");
}else{
    console.log("Loser chicken dinner");
}
 
                        //SWITCH CASES
//NO.1 
let anime = "Noragami";
switch(anime){
    case "Gamers":
        console.log("abomination");
        break;
    case "HXH":
        console.log("It's alright");
        break;
    case "SpyXFamily":
        console.log("Average");
        break;
    case "Bleach":
        console.log("Anime of the year");
        break;
    case "Noragami":
        console.log("Excellent"); 
        break;
    default:
        console.log("TRY AGAIN")                                
}

//NO.2
let GOAT = "Messi";
switch(GOAT){
    case "Mbappe":
        console.log("Laughable");
        break;
    case "Ronaldo":
        console.log("2nd place but acceptable ");
        break;
    case "Messi":
        console.log("YES, YOU ARE CORRECT!");
        break;
    case "Xavi":
        console.log("Underated");
        break;
    case "Haaland":
        console.log("ROBOT"); 
        break;
    default:
        console.log("TRY AGAIN")                                
}

//NO.3

let Sport = "Rugby";
switch(Sport){
    case "football":
        console.log("The beatiful game");
        break;
    case "rugby":
        console.log("Rough game");
        break;
    case "american-football":
        console.log("rugby with protection");
        break;
    case "basketball":
        console.log("Underated");
        break;
    case "baseball":
        console.log("i dont even know"); 
        break;
    default:
        console.log("TRY AGAIN")                                
}

//NO.4
let Jobs = "Actor";
switch(Jobs){
    case "Animator":
        console.log("If you dont mind spending weeks on end with out seeing your family");
        break;
    case "Actor":
        console.log("only if you are passionate and willing to devote yourself");
        break;
    case "gardener":
        console.log("Average");
        break;
    case "Enterprenure":
        console.log("Anime of the year");
        break;
    default:
        console.log("TRY AGAIN")                                
}

//NO.5
let Food = "Chicken";
switch(Food){
    case "beans":
        console.log("reliable");
        break;
    case "potatoes":
        console.log("Versatile");
        break;
    case "chicken":
        console.log("Delicious");
        break;
    case "meat":
        console.log("Also delicious");
        break;
    default:
        console.log("TRY AGAIN")                                
}
 
//NO.6               SWITCH STATEMENT FOR ARRAYS
let games = ["GOW" , "Spiderman","Witcher","Ghost","GTA"];
for(let game of games){
switch(games){
    case "GOW":
        console.log("Amazing story");
        break;
    case "Spiderman":
        console.log("Amazing game play");
        break;
    case "Witcher":
        console.log("Gorry");
        break;
    case "Ghost":
        console.log("Visuals are amazing");
        break;
    case "GTA":
        console.log("Amazing free roam"); 
        break;
    default:
        console.log("TRY AGAIN") 
}
}