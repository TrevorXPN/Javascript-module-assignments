// assignment3-1a
// 1. 
class FootballPlayer {
  constructor(name, position, age) {
    this.name = name;
    this.position = position;
    this.age = age;
  }
}

const kevinDeBruyne = new FootballPlayer("Kevin De Bruyne", "Midfielder", 30);
const raheemSterling = new FootballPlayer("Raheem Sterling", "Forward", 26);
const philFoden = new FootballPlayer("Phil Foden", "Midfielder", 21);
const rubenDias = new FootballPlayer("Ruben Dias", "Defender", 24);
const ederson = new FootballPlayer("Ederson", "Goalkeeper", 28);

// 2. 
class Fruit {
  constructor(name, color, taste) {
    this.name = name;
    this.color = color;
    this.taste = taste;
  }
}

const apple = new Fruit("Apple", "Red", "Sweet");
const banana = new Fruit("Banana", "Yellow", "Sweet");
const orange1 = new Fruit("Orange", "Orange", "bitter");
const mango1 = new Fruit("Mango", "Yellow", "Sweet and tasty");
const pineapple = new Fruit("Pineapple", "Brown", "Sweet and tasty");

// 3. 
class Instrument {
  constructor(name, type, sound) {
    this.name = name;
    this.type = type;
    this.sound = sound;
  }
}

const electricGuitar = new Instrument("Electric Guitar", "String", "Rock");
const piano1 = new Instrument("Piano", "Keyboard", "Classical");
const violin = new Instrument("Violin", "String", "Classical");
const drums = new Instrument("Drums", "Percussion", "Rock");
const trumpet = new Instrument("Trumpet", "Brass", "Jazz");

// 4. 
class HairType {
  constructor(type, color, texture) {
    this.type = type;
    this.color = color;
    this.texture = texture;
  }
}

const straightBlonde = new HairType("Straight", "Blonde", "Fine");
const curlyBrown = new HairType("Curly", "Brown", "Coarse");
const wavyBlack = new HairType("Wavy", "Black", "Medium");
const kinkyRed = new HairType("Kinky", "Red", "Coarse");
const frizzyGray = new HairType("Frizzy", "Gray", "Coarse");

// 5. 
class Equipment {
  constructor(name, sport) {
    this.name = name;
    this.sport = sport;
  }
}

const soccerBall = new Equipment("Soccer Ball", "Soccer");
const basketball = new Equipment("Basketball", "Basketball");
const tennisRacket = new Equipment("Tennis Racket", "Tennis");
const baseballGlove1 = new Equipment("Baseball Glove", "Baseball");
const golfClub = new Equipment("Golf Club", "Golf");

// 6. 
class Drink {
  constructor(name, type) {
    this.name = name;
    this.type = type;
  }
}

const coffee = new Drink("Coffee", "Hot");
const tea = new Drink("Soda", "Cold");
const beer = new Drink("Beer", "Cold");
const wine1 = new Drink("Wine", "Cold");

// 7. 
class Machine{
  constructor(name, type) {
    this.name = name;
    this.type = type;
  }
}

const refrigerator = new Machine("Refrigerator", "Kitchen");
const washingMachine = new Machine("Washing Machine", "Laundry");
const microwave1 = new Machine("Microwave", "Kitchen");
const dishwasher = new Machine("Dishwasher", "Kitchen");
const vacuumCleaner = new Machine("Vacuum Cleaner", "Cleaning");

// 8.
class Clothing {
  constructor(name, type, size) {
    this.name = name;
    this.type = type;
    this.size = size;
  }
}

const tShirt = new Clothing("T-Shirt", "Casual", "Medium");
const jeans1 = new Clothing("Jeans", "Casual", "small");
const dress = new Clothing("Dress", "Formal", "Small");
const jacket = new Clothing("Jacket", "Outerwear", "Large");
const sneakers = new Clothing("Sneakers", "Athletic", "10");

// 9. 
class Tool {
  constructor(name, type) {
    this.name = name;
    this.type = type;
  }
}

const hammer = new Tool("Hammer", "Hand tool");
const screwdriver = new Tool("Screwdriver", "Hand tool");
const wrench = new Tool("Wrench", "Hand tool");
const pliers = new Tool("Pliers", "Hand tool");
const saw1 = new Tool("Saw", "Power tool");

// 10. 
class Gagdets {
  constructor(name, type) {
    this.name = name;
    this.type = type;
  }
}

const smartphone1 = new Gagdets("Smartphone", "Mobile");
const laptop = new Gagdets("Laptop", "Computer");
const tablet1 = new Gagdets("Tablet", "Mobile");
const smartwatch = new Gagdets("Smartwatch", "Wearable");
const earbuds = new Gagdets("Earbuds", "Audio");



// assignment3-1b
const assignment3 = require("./Tindyebwa-Natasha-assignment3-1a")

// use of the dot notation and bracket notation
// 1. 
// Using dot notation
console.log(kevinDeBruyne.name); 
console.log(raheemSterling.position); 
console.log(philFoden.age); 

// Using bracket notation
console.log(rubenDias["name"]); 
console.log(ederson["position"]); 
console.log(kevinDeBruyne["age"]); 

// 2.
// Using dot notation
console.log(apple.name);    
console.log(apple.color);   
console.log(apple.taste);   

// Using bracket notation
console.log(apple["name"]); 
console.log(apple["color"]);
console.log(apple["taste"]);


// 3. 
// Using dot notation
console.log(electricGuitar.name);    
console.log(electricGuitar.type);  
console.log(electricGuitar.sound);  

// Using bracket notation
console.log(electricGuitar["name"]); 
console.log(electricGuitar["type"]);
console.log(electricGuitar["sound"]);

// 4. 
// Using dot notation
console.log(straightBlonde.type); 
console.log(curlyBrown.color); 
console.log(wavyBlack.texture); 

// Using bracket notation
console.log(kinkyRed["type"]); 
console.log(frizzyGray["color"]); 
console.log(straightBlonde["texture"]); 

// 5. 
// Using dot notation
console.log(soccerBall.name);   
console.log(soccerBall.sport);   

// Using bracket notation
console.log(soccerBall["name"]); 
console.log(soccerBall["sport"]);


// 6. 
// Using dot notation
console.log(coffee.name);    
console.log(coffee.type);    

// Using bracket notation
console.log(coffee["name"]); 
console.log(coffee["type"]); 


// 7. 
// Using dot notation
console.log(refrigerator.name);    
console.log(refrigerator.type);    

// Using bracket notation
console.log(refrigerator["name"]); 
console.log(refrigerator["type"]); 


// 8.
// Using dot notation
console.log(tShirt.name);    
console.log(tShirt.type);    
console.log(tShirt.size);    

// Using bracket notation
console.log(tShirt["name"]);
console.log(tShirt["type"]); 
console.log(tShirt["size"]); 

// 9. 
// Using dot notation
console.log(hammer.name);  
console.log(hammer.type);    

// Using bracket notation
console.log(hammer["name"]); 
console.log(hammer["type"]); 

// 10. 
// Using dot notation
console.log(smartphone1.name);   
console.log(smartphone1.type);  

// Using bracket notation
console.log(smartphone1["name"]); 
console.log(smartphone1["type"]); 