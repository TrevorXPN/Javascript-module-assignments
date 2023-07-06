//CREATE 2 STRING VARIABLES
//CREATE 2 NUMBER VARIABLES
// USECONCATINATION
//USE ESCAPE X-TERS
//CREATE 3 OBJECTS WITH 2 PROPERTIES
//*CONST
//*CONST.FROZEN
//*OBJECT
//ADD 2 PROPERTIES TO EACH
//DELETE ONE PROPERTIES FROM EACH

//NO.1
let boy = "Trevor";
let girl = "Paula";

//NO.2
let num2 = 3;
let num4 = 1;

//NO.3
console.log(boy + " and " + girl);

//NO.4
let escape2 = "He said,\"hi there\"";
console.log(escape2)

//NO.5a
let anime = {name:"Bluelock",genre:"Sport"};

//b.
const anime2 = {name:"Naruto", genre:"Action"};

// c/.
const anime3 = Object.freeze({name:"Inuyasha", genre:"Fantasy"});
console.log(anime)
console.log(anime2)
console.log(anime3)

// NO.6
anime.MC = "Isagi Yoichi";
console.log(anime)
anime["AC"] =  "Micheal Kaiser";
console.log(anime)

anime2.MC = "Naruto Uzumaki";
console.log(anime2)
anime2["AC"] = "MADARA";
console.log(anime2)

anime3.MC = "Kagome";
console.log(anime3)
anime3["AC"] ="Naraku";

//NO.7
console.log(delete anime.genre)
console.log(anime)
console.log(delete anime2.name)
console.log(anime2)
console.log(delete anime3.AC)
console.log(anime3)