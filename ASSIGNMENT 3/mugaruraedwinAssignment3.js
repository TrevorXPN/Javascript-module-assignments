//Assignment 3

//Class 1

class Flight{
    constructor(flightNumber,airline,departurecity,departuretime,arrivaltime){
        this.flightNumber = flightNumber;
        this.airline = airline;
        this.departurecity = departurecity;
        this.departuretime= departuretime;
        this.arrivaltime = arrivaltime;
    }
  }
  
  let flight1 = new Flight(1,"Bristol","Buckingham","12hrs","18hrs");
  let flight2 = new Flight(2,"London","Manchester","13hrs","19hrs");
  let flight3 = new Flight(3,"Chelsea","London","14hrs","20hrs");
  let flight4 = new Flight(4,"Southhampton","Northhampton","15hrs","21hrs");
  let flight5 = new Flight(5,"Ugnada","Entebbe","16hrs","22hrs");
  
  
  console.log(flight1.flightNumber);
  console.log(flight1.airline);
  
  console.log(flight2["departurecity"]);
  console.log(flight2["departuretime"]);
  
  console.log(flight3.arrivaltime);
  console.log(flight3.airline);
  
  console.log(flight4["departuretime"]);
  console.log(flight4["departurecity"]);
  
  console.log(flight5.arrivaltime);
  console.log(flight5.flightNumber);
  
  
  // Class 2
  class Restaurant{
    constructor(name,location,averagerating,openinghours,menu){
        this.name = name;
        this.location = location;
        this.averagerating = averagerating;
        this.openinghours= openinghours;
        this.menu = menu;
    }
  }
  
  let restaurant1 = new Restaurant("Biggies","Bristol",6,"12hrs","French");
  let restaurant2 = new Restaurant("London-stew","London",9,"13hrs","English");
  let restaurant3 = new Restaurant("Kemi's","Chelsea",6,"14hrs","Italian");
  let restaurant4  = new Restaurant("Boujour","Southhampton",7,"15hrs","Polish");
  let restaurant5  = new Restaurant("Revior","Uganda",8.5,"16hrs","Ugandan");
  
  
  console.log(restaurant1.averagerating);
  console.log(restaurant1.location);
  
  console.log(restaurant2["openinghours"]);
  console.log(restaurant2["menu"]);
  
  console.log(restaurant3.name);
  console.log(restaurant3.location);
  
  console.log(restaurant4["averagerating"]);
  console.log(restaurant4["location"]);
  
  console.log(restaurant5.location);
  console.log(restaurant5.openinghours);
  
  //Class3
  
  class Student{
    constructor(studentId,name,age,gender,gpa){
        this.studentId= studentId;
        this.name = name;
        this.age = age;
        this.gender= gender;
        this.gpa = gpa;
    }
  }
  
  
  let student1 = new Student(6,"Mark",12,"Male",4.5);
  let student2 = new Student(9,"Jan",13,"Female",5);
  let student3 = new Student(6,"Steve",14,"Male",3.5);
  let student4  = new Student(7,"Mary",15,"Binary",4.4);
  let student5  = new Student(8,"Bagot",16,"Transgender",4.39);
  
  
  console.log(student1.studentId);
  console.log(student1.age);
  
  console.log(student2["gender"]);
  console.log(student2["gpa"]);
  
  console.log(student3.name);
  console.log(student3.age);
  
  console.log(student4["studentId"]);
  console.log(student4["age"]);
  
  console.log(student5.age);
  console.log(student5.gender);
  
  //Class4
  
  class Laptop{
    constructor(brand,model,screensize,ram,storagecapacity){
        this.brand= brand;
        this.model = model;
        this.screensize = screensize;
        this.ram= ram;
        this.storagecapacity = storagecapacity;
    }
  }
  
  
  let laptop1 = new Laptop("Hp",6,"12inch","8GB","64GB");
  let laptop2 = new Laptop("Mac",9,"13inch","16GB","128GB");
  let laptop3 = new Laptop("Mac",6,"14inch","12GB","32GB");
  let laptop4  = new Laptop("Acer",7,"15inch","4GB","256GB");
  let laptop5  = new Laptop("Zen",8.5,"16inch","20GB","512GB");
  
  
  console.log(laptop1.brand);
  console.log(laptop1.screensize);
  
  console.log(laptop2["ram"]);
  console.log(laptop2["storagecapacity"]);
  
  console.log(laptop3.model);
  console.log(laptop3.screensize);
  
  console.log(laptop4["brand"]);
  console.log(laptop4["screensize"]);
  
  console.log(laptop5.screensize);
  console.log(laptop5.ram);("Biggies","Bristol",6,"12hrs","French");
  
  //Class 5
  
  class Animal{
    constructor(species,name,age,weight,sound){
        this.species= species;
        this.name = name;
        this.age = age;
        this.weight= weight;
        this.sound = sound;
    }
  }
  
  
  let animal1 = new Animal("sunda","tiger",6,"12pounds","roar");
  let animal2 = new Animal("chimpanzee","chimp",9,"13pounds","whaa");
  let animal3 = new Animal("homo sapien","human",6,"14pounds","yello");
  let animal4  = new Animal("bigeyetuna","panda",7,"15pounds","paa");
  let animal5  = new Animal("bluewhale","whale",8.5,"16pounds","ooow");
  
  
  console.log(animal1.species);
  console.log(animal1.age);
  
  console.log(animal2["weight"]);
  console.log(animal2["sound"]);
  
  console.log(animal3.name);
  console.log(animal3.age);
  
  console.log(animal4["species"]);
  console.log(animal4["age"]);
  
  console.log(animal5.age);
  console.log(animal5.weight);("Biggies","Bristol",6,"12hrs","French");
  
  // Class 6
  
  class Person{
    constructor(phonenumber,name,age,gender,address){
        this.phonenumber= phonenumber;
        this.name = name;
        this.age = age;
        this.gender= gender;
        this.address = address;
    }
  }
  
  
  let person1 = new Person(25679099890,"Mark",12,"Male","4.5-Ug");
  let person2 = new Person(25689797979,"Jan",13,"Female","5-Ug");
  let person3 = new Person(25678668686,"Steve",14,"Male","3.5-Ug");
  let person4  = new Person(2577878878,"Mary",15,"Binary","4.4-Ug");
  let person5  = new Person(2569797798,"Bagot",16,"Transgender","4.39-Ug");
  
  
  console.log(person1.phonenumber);
  console.log(person1.age);
  
  console.log(person2["gender"]);
  console.log(person2["address"]);
  
  console.log(person3.name);
  console.log(person3.age);
  
  console.log(person4["phonenumber"]);
  console.log(person4["age"]);
  
  console.log(person5.age);
  console.log(person5.gender);
  
  //Class 7
  
  class Product{
    constructor(price,name,description,manufacturer,quantityinstock){
        this.price= price;
        this.name = name;
        this.description = description;
        this.manufacturer= manufacturer;
        this.quantityinstock = quantityinstock;
    }
  }
  
  
  let product1 = new Product(25000,"Pillow","Soft","Gucci",20);
  let product2 = new Product(20000,"Book","Great","Picfare",100);
  let product3 = new Product(40000,"Sugar","Sweet","Kakira","500kgs");
  let product4  = new Product(70000,"Fuel","Clear","Shell","200litres");
  let product5  = new Product(60000,"Bag","Longlasting","louisVuitton",50);
  
  
  console.log(product1.price);
  console.log(product1.description);
  
  console.log(product2["manufacturer"]);
  console.log(product2["quantityinstock"]);
  
  console.log(product3.name);
  console.log(product3.description);
  
  console.log(product4["price"]);
  console.log(product4["quantityinstock"]);
  
  console.log(product5.description);
  console.log(product5.manufacturer);
  
  // Class 8
  
  class Movie{
    constructor(title,director,releaseyear,genre,rating){
        this.title= title;
        this.director = director;
        this.releaseyear = releaseyear;
        this.genre= genre;
        this.rating = rating;
    }
  }
  
  
  let movie1 = new Movie("HarryPotter","Joe",2000,"fantasy",6);
  let movie2 = new Movie("Ironman","BILL",2014,"fantasy",7);
  let movie3 = new Movie("Mulan","John",1999,"adventure",9);
  let movie4  = new Movie("JackandtheGiantSlayer","Pete",2001,"adventure",10);
  let movie5  = new Movie("Rango","Davinson",2003,"anime",8);
  
  
  console.log(movie1.title);
  console.log(movie1.releaseyear);
  
  console.log(movie2["genre"]);
  console.log(movie2["rating"]);
  
  console.log(movie3.director);
  console.log(movie3.releaseyear);
  
  console.log(movie4["title"]);
  console.log(movie4["rating"]);
  
  console.log(movie5.releaseyear);
  console.log(movie5.genre);
  
  // Class 9
  
  class Serie{
    constructor(title,director,releaseyear,genre,rating){
        this.title= title;
        this.director = director;
        this.releaseyear = releaseyear;
        this.genre= genre;
        this.rating = rating;
    }
  }
  
  
  let serie1 = new Serie("Witcher","Joe",2011,"fantasy",6);
  let serie2 = new Serie("Nun","BILL",2013,"fantasy",7);
  let serie3 = new Serie("Once Upon a Time","John",2000,"adventure",9);
  let serie4  = new Serie("Cinderella","Pete",2015,"adventure",10);
  let serie5  = new Serie("Goku","Davinson",2023,"anime",8);
  
  
  console.log(serie1.title);
  console.log(serie1.releaseyear);
  
  console.log(serie2["genre"]);
  console.log(serie2["rating"]);
  
  console.log(serie3.director);
  console.log(serie3.releaseyear);
  
  console.log(serie4["title"]);
  console.log(serie4["rating"]);
  
  console.log(serie5.releaseyear);
  console.log(serie5.genre);
  
  // Class 10
  
  class Book{
    constructor(title,author,publicationyear,genre,numberofpages){
        this.title= title;
        this.author = author;
        this.publicationyear = publicationyear;
        this.genre= genre;
        this.numberofpages = numberofpages;
    }
  }
  
  
  let book1 = new Book("CrimesofGrindewald","Joe",2011,"fantasy",60);
  let book2 = new Book("Twilight-saga","BILL",2013,"fantasy",70);
  let book3 = new Book("Once Upon a Time","John",2000,"adventure",90);
  let book4  = new Book("Cinderella","Pete",2015,"adventure",100);
  let book5  = new Book("MangaMessiah","Davinson",2023,"anime",80);
  
  
  console.log(book1.title);
  console.log(book1.publicationyear);
  
  console.log(book2["genre"]);
  console.log(book2["numberofpages"]);
  
  console.log(book3.author);
  console.log(book3.publicationyear);
  
  console.log(book4["title"]);
  console.log(book4["numberofpages"]);
  
  console.log(book5.publicationyear);
  console.log(book5.genre);