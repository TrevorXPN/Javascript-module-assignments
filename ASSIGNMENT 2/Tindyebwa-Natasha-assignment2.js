// Assisgnment
// if statement
//1. 
let num = 10;

if (num > 5) {
   console.log("The number is greater than 5");
}

// 2.
let num2 = 3;

if (num > 5) {
   console.log("The number is greater than 5");
} else {
   console.log("The number is less than or equal to 5");
}

// 3.
let grade = 75;

if (grade >= 90) {
   console.log("A grade");
} else if (grade >= 80) {
   console.log("B grade");
} else if (grade >= 70) {
   console.log("C grade");
} else {
   console.log("D grade");
}

// 4.I used a nested if statement
let money = 100;

   if (money> 50) {
      console.log("You can buy the ticket");
   } else if(money < 50) {
      console.log("Sorry, you don't have enough money");
   } else {
   console.log("You are too young to buy the ticket");
}

// 5th example of if statement
let num3 = 7;
let result = (num > 10) ? "Number is greater than 10" : "Number is less than or equal to 10";
console.log(result);

// switch cases
// example1

let num4 = 10;

switch (num4) {
   case 10:
      console.log("The number is 10");
      break;
   case 20:
      console.log("The number is 20");
      break;
   case 30:
      console.log("The number is 30");
      break;
   case 40:
      console.log("The number is 40");
      break;
   case 50:
      console.log("The number is 50");
      break;
   default:
      console.log("The number is greater than 50");
}

// example2
let day = "Monday";

switch(day) {
   case "Monday":
      console.log("It's the first day of the week");
      break;
   case "Tuesday":
      console.log("It's the second day of the week");
      break;
   // Add more cases as needed...
}

// example3
let color = "red";

switch(color) {
   case "red":
   case "orange":
   case "yellow":
      console.log("This is a warm color");
      break;
   case "blue":
   case "green":
   case "purple":
      console.log("This is a cool color");
      break;
}

// example4
let age = 18;

switch(true) {
   case age < 13:
      console.log("Child");
      break;
   case age >= 13 && age <= 19:
      console.log("Teenager");
      break;
   default:
      console.log("Adult");
}

// 5 switch cases... for arrays...
// 1

let arr = [1, 2, 3, 4, 5];

switch (arr[0]) {
   case 1:
      console.log("The first number is 1");
      break;
   case 2:
      console.log("The first number is 2");
      break;
   case 3:
      console.log("The first number is 3");
      break;
   case 4:
      console.log("The first number is 4");
      break;
   case 5:
      console.log("The first number is 5");
      break;
   default:
      console.log("The first number is greater than 5");
}

// 2
let fruits = ["apple", "banana", "orange"];
let fruit = "banana";

switch (fruit) {
   case fruits[0]:
      console.log("It's an apple");
      break;
   case fruits[1]:
      console.log("It's a banana");
      break;
   case fruits[2]:
      console.log("It's an orange");
      break;
   default:
      console.log("It's some other fruit");
}

// 3
let temperatures = [0, 10, 20, 30, 40];
let temperature = 25;

switch (true) {
   case temperature < temperatures[1]:
      console.log("Cold");
      break;
   case temperature >= temperatures[1] && temperature <= temperatures[3]:
      console.log("Moderate");
      break;
   case temperature > temperatures[3]:
      console.log("Hot");
      break;
   default:
      console.log("Unknown");
}

// 4
let pets = ["dog", "cat", "bird"];
let pet = "bird";

switch (true) {
   case pets.includes(pet):
      console.log("It's a known pet");
      break;
   case pet.length > 5:
      console.log("It's a long-named animal");
      break;
   default:
      console.log("It's an unknown pet");
}

// 5
let numbers = [1, 2, 3];
let num5 = 3;

switch (num) {
   case numbers[0]:
   case numbers[1]:
      console.log("The number is less than or equal to 2");
      break;
   case numbers[2]:
      console.log("The number is equal to 3");
      break;
}
// finished the assignment...