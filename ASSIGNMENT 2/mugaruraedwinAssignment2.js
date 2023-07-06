// JS  assignment 2

// create 5 if statements 

const number =60;
// 1.
if (number > 0) {
  console.log("The number is positive.");
}else {
    console.log("The number is negative")
}

// 2 .
if (number % 2 == 0)  {
  console.log("The number is even.");
}else (
    console.log("The number is odd")
)

// 3.
if (number > 5) {
  console.log("The number is greater than 5.");
}else {
    "The number is not greater than 5"
}

// 4.
if (number == 10) {
  console.log("The number is equal to 10.");
}else if(number < 10){
    console.log("The number is less than 10")
}else{
    console.log("The number is greater than 10")
}

// 5.
if (number < 50) {
  console.log("You get a retake.");
}else{
    console.log("You passed");
}

// create 5 switch cases
// switch 1
const dayOfWeek = "Tuesday";
switch (dayOfWeek) {
    case "Monday":
      console.log("It's Monday.");
      break;
    case "Tuesday":
      console.log("It's Tuesday.");
      break;
    case "Wednesday":
      console.log("It's Wednesday.");
      break;
    case "Thursday":
      console.log("It's Thursday.");
      break;
    default:
      console.log("It's not a weekday.");
      break;
  }

//   switch 2
const fruit = "apple";
switch (fruit) {
    case "apple":
      console.log("Selected fruit: Apple");
      break;
    case "banana":
      console.log("Selected fruit: Banana");
      break;
    case "orange":
      console.log("Selected fruit: Orange");
      break;
    case "grape":
      console.log("Selected fruit: Grape");
      break;
    default:
      console.log("Unknown fruit");
      break;
  }
  
// Switch statement 3
const integer = 7;
switch (integer) {
    case 1:
      console.log("The number is one.");
      break;
    case 3:
      console.log("The number is three.");
      break;
    case 7:
      console.log("The number is seven.");
      break;
    case 10:
      console.log("The number is ten.");
      break;
    default:
      console.log("Unknown number.");
      break;
  }
  
  // Switch statement 4
  const color = "blue";
  switch (color) {
    case "red":
      console.log("The color is red.");
      break;
    case "blue":
      console.log("The color is blue.");
      break;
    case "green":
      console.log("The color is green.");
      break;
    case "yellow":
      console.log("The color is yellow.");
      break;
    default:
      console.log("Unknown color.");
      break;
  }
  
  // Switch statement 5
  const continent = "Japan";
  switch (continent) {
    case "USA":
      console.log("You're in the USA.");
      break;
    case "Canada":
      console.log("You're in Canada.");
      break;
    case "Australia":
      console.log("You're in Australia.");
      break;
    case "Japan":
      console.log("You're in Japan.");
      break;
    default:
      console.log("Unknown country.");
      break;
  }


// create a switch case for arrays
// const fruits = ["apple", "banana", "orange"];
function processFruit(fruit) {
  switch (fruit) {
    case "apple":
      console.log("You selected an apple.");
      break;
    case "banana":
      console.log("You selected a banana.");
      break;
    case "orange":
      console.log("You selected an orange.");
      break;
    default:
      console.log("Unknown fruit.");
      break;
  }
}
processFruit("grapes");


// usimg a loop
let edibles = ["Mangoes", "bananas", "oranges", "apples" ];

for(i = 0; i < edibles.length; i++ ){

    switch(edibles[i]){

        case "pawpaws":
            console.log("This is a mango");
            break;

        case "bananas":
            console.log("This are bananas");
            break;

        case "oranges":
            console.log("This is are oranges");
             break;

        case "apples":
            console.log("This are apples");
            break;

        default:
            console.log("Fruit not specified")
    }
}
