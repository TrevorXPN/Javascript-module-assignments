// create 10 differnt class with 5 objects out of each class
// use the dot notation and brackert notation to print out atleast 2 properties for each
// keith objects .js

class Driver {
    constructor(name, id, gender, age, color) {
      this.name = name;
      this.id = id;
      this.gender = gender;
      this.age = age;
      this.color = color;
    }
  }
  
  let Driver1 = new Driver("keith", 1, "male", 25, "black");
  console.log(Driver1);
  console.log(Driver1.age);
  console.log(Driver1["color"]);
  
  class Flower {
    constructor(flowerName, flowerType, petalNumber, sepalNumber, petalColor) {
      this.flowerName = flowerName;
      this.flowerType = flowerType;
      this.petalNumber = petalNumber;
      this.sepalNumber = sepalNumber;
      this.petalColor = petalColor;
    }
  }
  
  let flower1 = new Flower("rose", "rose", 5, 5, "black");
  
  console.log(flower1);
  console.log(flower1.flowerType);
  console.log(flower1["petalNumber"]);
  
  class Vehicle {
    constructor(model, type, numberOfwheels, speed, price) {
      this.model = model;
      this.type = type;
      this.numberOfwheels = numberOfwheels;
      this.speed = speed;
      this.price = price;
    }
  }
  
  let vehicle1 = new Vehicle("BMW", "sedan", 4, 100, 1000);
  console.log(vehicle1);
  console.log(vehicle1.model);
  console.log(vehicle1["type"]);
  
  class Animals {
    constructor(name, type, age, color) {
      this.name = name;
      this.type = type;
      this.age = age;
      this.color = color;
    }
  }
  let animal1 = new Animals("rabbit", "cinchilla", "3months", "white");
  console.log(animal1);
  console.log(animal1.name);
  console.log(animal1["age"]);
  
  class cow {
    constructor(name, type, age, color, sex) {
      this.name = name;
      this.type = type;
      this.age = age;
      this.color = color;
      this.sex = sex;
    }
  }
  let cow1 = new cow("keith", "cow", "3months", "white", "male");
  console.log(cow1);
  console.log(cow1.name);
  console.log(cow1["age"]);
  
  class dog {
    constructor(name, age, color, gender, type) {
      this.name = name;
      this.age = age;
      this.color = color;
      this.gender = gender;
      this.type = type;
    }
  }
  let dog1 = new dog("pius", 5, "black", "male", "german-shepard");
  console.log(dog1);
  console.log(dog1.name);
  console.log(dog1["age"]);
  
  class cat {
    constructor(name, age, color, gender, type) {
      this.name = name;
      this.age = age;
      this.color = color;
      this.gender = gender;
      this.type = type;
    }
  }
  let cat1 = new cat("garfield", "3years", "brown", "male", "wild");
  console.log(cat1);
  console.log(cat1.gender);
  console.log(cat1["type"]);
  
  class bird {
    constructor(name, age, color, gender, type) {
      this.name = name;
      this.age = age;
      this.color = color;
      this.gender = gender;
      this.type = type;
    }
  }
  let bird1 = new bird("kuku", "3years", "brown", "male", "domestc");
  console.log(bird1);
  console.log(bird1.type);
  console.log(bird1["color"]);
  
  class enzymes {
    constructor(name, subtrate, functiion, inhibitor, inducers) {
      this.name = name;
      this.subtrate = subtrate;
      this.functiion = functiion;
      this.inhibitor = inhibitor;
      this.inducers = inducers;
    }
  }
  let enzymes1 = new enzymes(
    "amaylase",
    "glucose",
    "breaks down glucose to galactose",
    "acidic pH",
    "alkanie pH"
  );
  console.log(enzymes1);
  console.log(enzymes1.subtrate);
  console.log(enzymes1["functiion"]);
  
  class Phones {
    constructor(phoneName, company, year_of_manufacture, screenSize, model) {
      this.phoneName = phoneName;
      this.company = company;
      this.year_of_manufacture = year_of_manufacture;
      this.screenSize = screenSize;
      this.model = model;
    }
  }
  
  let phones1 = new Phones("Iphone", "Apple", "2019", "1024x768", "iPhone 12");
  console.log(phones1);
  console.log(phones1.model);
  console.log(phones1["phoneName"]);
  