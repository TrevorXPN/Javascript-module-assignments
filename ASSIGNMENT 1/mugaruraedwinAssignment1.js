// Assignment 1

// Create 2 string variables
let text1 = "Hey";
let text2 = " Wassup";
// Create 2 number variables
let price1 = 1000;
let price = 2000;
// use concatenation of a string
let wholeText = text1 + text2;
console.log(wholeText)
// use escape characters
let message1 = 'Hello my bro, "You good?"';
let message2 = "Hello my bro, 'You good?'";
let message3 = "Hello my bro, \"You good? \" ";
let message4 = 'Hello my bro, \'You good?\'';
console.log(message1)
console.log(message2)
console.log(message3)
console.log(message4)

// create 3 objects with two properties each, one should be a constant object and
//another a constant frozen object , another just an object
let footTeam1 = {name: "Arsenal", color:"red"}
const footTeam2 = {name: "ManchesterCity", color:"light-blue"}
const footTeam3 = Object.freeze({name: "ManchesterUtd", color:"red"})
console.log(footTeam1)
console.log(footTeam2)
console.log(footTeam3)

// add two properties to each of these objects
footTeam1.year="2000";
footTeam1.age="100";
console.log(footTeam1)
footTeam2.year="2001";

footTeam2.age="105";
console.log(footTeam2)
footTeam3.year="2002";
footTeam3.age="110";
console.log(footTeam3)

// delete 1 property from each of them
console.log(delete footTeam1.color)
console.log(footTeam1)
console.log(delete footTeam2.color)
console.log(footTeam2)
console.log(delete footTeam3.color)
console.log(footTeam3)