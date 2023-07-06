// this is my assignment 3
class Country {
  constructor(president, city, continent, color, currency) {
    this.president = president;
    this.city = city;
    this.continent = continent;
    this.currency = currency;
  }
}
let country1 = new Country("Kagame", "Kigali", "Africa", "Rwandan Franc");
let country2 = new Country("Biden", "New York", "America", "Dollars");
console.log(country1.president);
console.log(country2["continent"]);

class Staff {
  constructor(teacher, cook, cleaner, guard, bursar) {
    this.teacher = teacher;
    this.cook = cook;
    this.cleaner = cleaner;
    this.guard = guard;
    this.bursar = bursar;
  }
}
let staff1 = new Staff("Tom", "Joy", "John", "Jack", "Loraine");
let staff2 = new Staff("Peter", "Jane", "Luke", "Tim", "Maria");
console.log(staff1.cleaner);
console.log(staff2["bursar"]);

class Pen {
  constructor(brand, price, color, DoM, expiryDate) {
    this.brand = brand;
    this.price = price;
    this.color = color;
    this.DoM = DoM;
    this.expiryDate = expiryDate;
  }
}
let pen1 = new Pen("nataraj", 1000, "blue", 2023, 2025);
let pen2 = new Pen("bic", 700, "black", 2023, 2024);
console.log(pen1.brand);
console.log(pen2["color"]);

class Student {
  constructor(name, age, gender, talent, address) {
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.talent = talent;
    this.address = address;
  }
}
let student1 = new Student("Jonah", 16, "male", "singing", "Ntinda");
let student2 = new Student("Martha", 15, "female", "dancing", "Kololo");
console.log(student1.address);
console.log(student2["talent"]);

class mathematicalSet {
  constructor(brand, price, color, manufacturingDate, expiryDate) {
    this.brand = brand;
    this.price = price;
    this.color = color;
    this.manufacturingDate = manufacturingDate;
    this.expiryDate = expiryDate;
  }
}
let set1 = new mathematicalSet("picfare", 2500, "red", 2022, 2028);
let set2 = new mathematicalSet("oxford", 5000, "blue", 2023, 2029);
console.log(set1.price);
console.log(set2["brand"]);

class Worker {
  constructor(name, age, gender, salary, shift) {
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.salary = salary;
    this.shift = shift;
  }
}
let worker1 = new Worker("Ogwang", 47, "male", "2m", "shift 1");
let worker2 = new Worker("Asiimwe", 33, "female", "2.8m", "shift 2");
console.log(worker1.name);
console.log(worker2["age"]);

class Vehicle {
  constructor(type, manufacturer, year, sellingPrice, buyingPrice) {
    this.type = type;
    this.manufacturer = manufacturer;
    this.year = year;
    this.sellingPrice = sellingPrice;
    this.buyingPrice = buyingPrice;
  }
}
let vehicle1 = new Vehicle(
  "Rangerover",
  "toyota",
  2022,
  "500 million",
  "560 million"
);
let vehicle2 = new Vehicle("Kia", "toyota", 2020, "50 million", "67 million");
console.log(vehicle1.type);
console.log(vehicle2["sellingPrice"]);

class Family {
  constructor(father, mother, aunt, uncle, child) {
    this.father = father;
    this.mother = mother;
    this.aunt = aunt;
    this.uncle = uncle;
    this.child = child;
  }
}
let family1 = new Family("Joseph", "Mary", "Martina", "Peter", "Jonathan");
let family2 = new Family("Job", "Daniella", "Ruth", "Bob", "Eliza");
console.log(family1.father);
console.log(family2["mother"]);

class Candidate {
  constructor(name, age, gender, nationality, sport) {
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.nationality = nationality;
    this.sport = sport;
  }
}
let candidate1 = new Candidate("Jacob", 31, "male", "Ugandan", "basketball");
let candidate2 = new Candidate("Joy", 22, "female", "Kenyan", "Tennis");
console.log(candidate1.nationality);
console.log(candidate2["sport"]);

class Drink {
  constructor(type, buyer, DoM, expiryDate, maker) {
    this.type = type;
    this.buyer = buyer;
    this.DoM = DoM;
    this.maker = maker;
  }
}
let drink1 = new Drink("minute maid", "shop owner", 2023, 2025, "coca cola");
let drink2 = new Drink("mirinda", "consumer", 2023, 2028, "pepsi");
console.log(drink1.type);
console.log(drink2["maker"]);
