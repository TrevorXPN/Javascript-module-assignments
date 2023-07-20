
// Assignment Number 3

// 1 a. Create 10 different classess with 5 objects out of each class
// 2 b.Use the dot notation and bracket notation to print
// out atleast 2 properties for each object.

// NOTE
// Classes are in fact "special functions", and
//  just as you can define function expressions and function declarations,
// a class can be defined in two ways: a class expression or a class declaration.

// also,.....A constructor is a special function that creates and
// initializes an object instance of a class.

// Number 1
class Rectangle {
  constructor(height, width, length, perimeter, area) {
    this.height = height;
    this.width = width;
    this.length = length;
    this.perimeter = perimeter;
    this.area = area;
  }
}

let shape = new Rectangle(10, 6, 10, 26, 160);
// console.log(shape);

console.log(shape.width);
console.log(shape.perimeter);
console.log(shape["length"]);
console.log(shape["height"]);

// Number 2

// Expression; the class is anonymous but assigned to a variable(no name for the class)
const Cone = class {
  constructor(height, width, area, perimeter, volume) {
    this.height = height;
    this.width = width;
    this.area = area;
    this.perimeter = perimeter;
    this.volume = volume;
  }
};

let shape2 = new Cone(10, 5, 25, 35, 50);
console.log(shape2.volume);
console.log(shape2.width);
console.log(shape2["area"]);
console.log(shape2["perimeter"]);

// Number 3

// Expression; the class has its own name
const Square = class Square2 {
  constructor(height, width, length, area, perimeter) {
    this.height = height;
    this.width = width;
    this.length = length;
    this.area = area;
    this.perimeter = perimeter;
  }
};

let shape3 = new Square(2, 4, 6, 8, 10);
console.log(shape3.length);
console.log(shape3.width);
console.log(shape3["perimeter"]);
console.log(shape3["area"]);

// Number 4

class OOPs {
  constructor(name, height, gender, color, job) {
    this.name = name;
    this.height = height;
    this.gender = gender;
  }

  // Getter method
  get langName() {
    return this.name;
  }

  // Setter method
  set langName(x) {
    this.name = x;
  }
  hello() {
    console.log(`Hello ${this.name}`);
  }
  // Getter method
  get RealGender() {
    return this.gender;
  }

  // Setter method
  set RealGender(a) {
    this.gender = a;
  }
  hello() {
    console.log(`Hello ${this.gender}`);
  }

  // Getter method
  get RealJob() {
    return this.job;
  }

  // Setter method
  set RealJob(J) {
    this.job = J;
  }
  hello() {
    console.log(`Hello ${this.job}`);
  }
}

let obj = new OOPs("Irene ");
let obj1 = new OOPs("80cm");
console.log(obj.name);

obj1.height = "34";
console.log(obj1.height);

obj.RealGender = "Female";
let obj3 = new OOPs("Software Engineer");
// console.log(obj.gender);

console.log(obj["RealGender"]);
obj3.RealJob = "software Engineer";
console.log(obj3["RealJob"]);

// Number 5

class Pen {
  constructor(name, color, price, weight, height) {
    this.name = name;
    this.color = color;
    this.price = price;
    this.weight = weight;
    this.height = height;
  }

  showPrice() {
    console.log(`Price of ${this.name} is ${this.price}`);
  }
}

const pen1 = new Pen("Marker", "Blue", "$3");
pen1.showPrice();

pen1.color = "blue";
console.log(pen1["color"]);
console.log(pen1["name"]);

console.log(pen1.color);
console.log(pen1.name);

// Number 6

class Chair {
  constructor(
    color,
    seatHeight,
    recliningAngle,
    backSupport,
    headSupport,
    padding,
    armRests,
    seatSize,
    isHeightAdjustable,
    isMovable
  ) {
    this.color = color;
    this.seatHeight = seatHeight;
    this.recliningAngle = recliningAngle;
    this.backSupport = backSupport;
    this.headSupport = headSupport;
    this.padding = padding;
    this.armRests = armRests;
    this.seatSize = seatSize;
    this.isHeightAdjustable = isHeightAdjustable;
    this.isMovable = isMovable;
  }

  adjustableHeight() {}
  adjustAngle() {}
  moveChair() {}
}

const newChair = new Chair(
  "Blue",
  "25 inch",
  "20 deg",
  true,
  false,
  "3 inch",
  true,
  "16 inch",
  false,
  false
);

// console.dir("Chair Prototype", Chair);
newChair.seatHeight = "25 inch";
console.log(newChair["seatHeight"]);
console.log(newChair["backSupport"]);

console.log(newChair.recliningAngle);
console.log(newChair.padding);

// class Student {
//   constructor(firstNameInput, lastNameInput, ageInput, rollNoInput) {
//     firstName = firstNameInput;
//     lastName = lastNameInput;
//     age = ageInput;
//     rollNo = rollNoInput;
//   }

//   name() {
//     return `The student's name is ${Irene} ${Nyakate}`;
//   }
// }

// Number 7

class Oval {
  constructor(height, width, length, perimeter, area) {
    this.height = height;
    this.width = width;
    this.length = length;
    this.perimeter = perimeter;
    this.area = area;
  }
}

let x = new Oval(10, 6, 10, 26, 160);
console.log(x.area);
console.log(x["area"]);

// Number 8

// Expression; the class has its own name
const ditch = class ditch2 {
  constructor(height, width, length, area, perimeter) {
    this.height = height;
    this.width = width;
    this.length = length;
    this.area = area;
    this.perimeter = perimeter;
  }
};

let y = new ditch(2, 4, 6, 8, 10);
console.log(y.length);
console.log(y.area);
console.log(y["perimeter"]);
console.log(y["area"]);

// Number 9

class Marker {
  constructor(name, color, price, weight, height) {
    this.name = name;
    this.color = color;
    this.price = price;
    this.weight = weight;
    this.height = height;
  }

  tellThePrice() {
    console.log(`Price of ${this.name} is ${this.price}`);
  }
}

const Marker1 = new Marker("Pen", "Blue", "$3");
Marker1.tellThePrice();

Marker1.color = "its a blue color pen";
console.log(Marker1["color"]);

// Number 10

class liner {
  constructor(name, color, price, weight, height) {
    this.name = name;
    this.color = color;
    this.price = price;
    this.weight = weight;
    this.height = height;
  }

  showPrice() {
    console.log(`Price of ${this.name} is ${this.price}`);
    console.log(`The weight of ${this.name} is ${this.weight}`);
  }
}

const liner1 = new liner("a linu", "Blue", "$18", "3", "7");
liner1.showPrice();

console.log(liner1["name"]);
console.log(liner1["color"]);

// Assignment 2

// create 5 if statements
let uganda = "africa";
if (uganda == "europe") {
  console.log("wrong  continent");
} else if (uganda == "asia") {
  console.log("wrong continent");
} else if (uganda == "north america") {
  console.log("wrong continent");
} else if (uganda == "africa") {
  console.log("right continent");
} else {
  console.log("country doesn't exist");
}

// create 5 switch cases
let football = "";
switch (football) {
  case "serie a":
    console.log("juve");
    break;
  case "la liga":
    console.log("barca");
    break;
  case "ligue 1":
    console.log("psg");
    break;
  case "bundes liga":
    console.log("bayern");
    break;
  case "mls":
    console.log("inter miami");
    break;
  default:
    console.log("league doesn't exist");
}

// create a switch case for arrays

// created an array called sports
let sports = ["hockey", "football", "tennis", "badminton"];

// create a variable sport to help us select a sport in the array
let sport = "hockey";

// create a variable sportIndex to help us select the position of the sport selected above in the array sports
// by using the method sports.indexOf(sport)
let sportIndex = sports.indexOf(sport);

// create a switch statement and give it a condition of the value of sportIndex
switch (sportIndex) {
  case 0:
    console.log("you chose hockey");
    break;
  case 1:
    console.log("you chose football");
    break;
  case 2:
    console.log("you chose tennis");
    break;
  case 3:
    console.log("you chose baddminton");
    break;
  default:
    console.log("grow up, sport is for babies");
}

// My Assignment one

//create 2 string variables
let clubName = "manchester";
let className = "player";

// create 2 number variables
let shirtNumber = 10;
let shortNumber = 11;

// use concatination of strings
console.log(clubName + " and " + className);

// use escape characters
let escapeWord = "she shouted, 'get out'";
console.log(escapeWord);

// create 3 objs with 2 properties, 1 should be a 'var' obj, second constant, and the other frozen objs
let object1 = { england: "arsenal", spain: "barca" };
const object2 = { italy: "juventus", france: "psg" };
const object3 = Object.freeze({ portugal: "benfica", netherlands: "ajax" });

// add 2 properties to each of the objs
object1.germany = "bayern";
console.log(object1);
object1.usa = "inter Miami";

object2.turkey = "galatasaray";
object2.uganda = "vipers";
object3.denmark = "copenhagen";
object3.russia = "moscow";
console.log(object1);
console.log(object2);
console.log(object3);

// delete one property from each of them
console.log(delete object1.england);
console.log(delete object2.italy);
console.log(delete object3.netherlands);
console.log(object1);
