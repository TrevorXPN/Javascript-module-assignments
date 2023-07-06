
//create  10 classes with 5 objects each
//INSTANCE ONE
//1.Novels
class Novel{
    constructor(title, author, genre, description,availability){
        this.title = title;
        this.author = author;
        this.genre = genre;
        this.description = description; 
        this.availability = availability;
    }
}
//create five novel objects
let bk1 = new Novel("Twisted Games", "Ana Huang", "Young adult", "Enticing", "E-book");
let bk2 = new Novel("The Great Gatsby","F. Scott Fitzgerald","Classic Fiction","A tragedy of the 1920s.","N/A");
let bk3 = new Novel( "The Hunger Games","Suzanne Collins","Dystopian","A thrilling tale of survival in a post-apocalyptic world.", "E-book");
let bk4 = new Novel("The Da Vinci Code","Dan Brown","Mystery", "An adventure through the ancients.","E-book");
let bk5 = new Novel("Harry Potter and the Order of the Phoenix","J.K. Rowling","Fantasy","The start of a magical journey of a young wizard.","Paper back");

//INSTANCE TWO
//2. Tourist destinations
class Site {
    constructor(name, country, attractions, transportation) {
      this.name = name;
      this.country = country;
      this.attractions = attractions;
      this.transportation = transportation;
    }
  }
   // Create five tourist destination objects
  let destination1 = new Site("Tokyo", "Japan", ["Tokyo Tower", "Shinjuku Gyoen"], "Subway and trains");
  let destination2 = new Site("Cairo", "Egypt", ["Pyramids of Giza", "Khan El Khalili"], "Taxis and public transportation");
  let destination3 = new Site("Barcelona", "Spain", ["Sagrada Familia", "Park Güell"], "Metro and buses");
  let destination4 = new Site("Sydney", "Australia", ["Sydney Opera House", "Bondi Beach"], "Public transportation and ferries");
  let destination5 = new Site("Rio de Janeiro", "Brazil", ["Christ the Redeemer", "Copacabana Beach"], "Buses and taxis");
  

  
  
//INSTANCE THREE
//3.Junk food
class JunkFood {
    constructor(name, category, calories, sugar) {
      this.name = name;
      this.category = category;
      this.calories = calories;
      this.sugar = sugar;
    }}
  let Food1 = new JunkFood("Potato Chips", "Snacks", 150, "2g");
  let Food2 = new JunkFood("Cheeseburger", "Fast Food", 500, "6g");
  let Food3 = new JunkFood("Chocolate Bar", "Candy", 250, "20g");
  let Food4 = new JunkFood("Soda", "Beverage", 150, "39g");
  let Food5 = new JunkFood("Pizza", "Fast Food", 285, "3g");
  

//INSTANCE FOUR
//4. Phones
class Phone {
    constructor(brand, model,storage, price){
      this.brand = brand;
      this.model = model;
      this.storage = storage;
      this.price = price;
    }
  }
  
  // Create five phone objects
  const phone1 = new Phone("Apple", "iPhone 12","128GB");
  const phone2 = new Phone("Samsung", "Galaxy S21", "128GB");
  const phone3 = new Phone("Google", "Pixel 5","128GB");
  const phone4 = new Phone("OnePlus", "9 Pro","256GB");
  const phone5 = new Phone("Xiaomi", "Mi 11","256GB");
  

//INSTANCE FIVE
//5. basketball teams
class BasketballTeam {
    constructor(name, city, coach, players) {
      this.name = name;
      this.city = city;
      this.coach = coach;
      this.players = players;
    }
  }
  
  // Create five basketball team objects
  let team1 = new BasketballTeam("Los Angeles Lakers", "Los Angeles", "Frank Vogel", ["LeBron James", "Anthony Davis", "Russell Westbrook"]);
  let team2 = new BasketballTeam("Brooklyn Nets", "Brooklyn", "Steve Nash", ["Kevin Durant", "James Harden", "Kyrie Irving"]);
  let team3 = new BasketballTeam("Golden State Warriors", "San Francisco", "Steve Kerr", ["Stephen Curry", "Klay Thompson", "Draymond Green"]);
  let team4 = new BasketballTeam("Milwaukee Bucks", "Milwaukee", "Mike Budenholzer", ["Giannis Antetokounmpo", "Khris Middleton", "Jrue Holiday"]);
  let team5 = new BasketballTeam("Phoenix Suns", "Phoenix", "Monty Williams", ["Devin Booker", "Chris Paul", "Deandre Ayton"]);
  

//INSTANCE SIX
//6. rugby players
class RugbyPlayer {
    constructor(name, position, nationality, age, height) {
      this.name = name;
      this.position = position;
      this.nationality = nationality;
      this.age = age;
      this.height = height;
    }
  }
  
  // Create five rugby player objects
  let player1 = new RugbyPlayer("Jonny Wilkinson", "Fly-half", "England", 42, "5'10\"");
  let player2 = new RugbyPlayer("Richie McCaw", "Flanker", "New Zealand", 40, "6'2\"");
  let player3 = new RugbyPlayer("Sergio Parisse", "Number 8", "Italy", 38, "6'5\"");
  let player4 = new RugbyPlayer("Dan Carter", "Fly-half", "New Zealand", 39, "5'9\"");
  let player5 = new RugbyPlayer("Maro Itoje", "Lock", "England", 26, "6'5\"");

  //INSTANCE SEVEN
  //7.watches
  class Watch {
    constructor(brand, model, caseMaterial) {
      this.brand = brand;
      this.model = model;
      this.caseMaterial = caseMaterial;
    }
  }
  
  // Create five watch objects
  let watch1 = new Watch("Rolex", "Datejust", "Stainless Steel");
  let watch2 = new Watch("TAG Heuer", "Carrera", "Stainless Steel");
  let watch3 = new Watch("Omega", "Seamaster", "Stainless Steel");
  let watch4 = new Watch("Breitling", "Navitimer", "Stainless Steel");
  let watch5 = new Watch("Tissot", "Le Locle", "Stainless Steel");
  

  //INSTANCE EIGHT
  //8. movies
  class Movie {
    constructor(title, genre, releaseYear) {
      this.title = title;
      this.genre = genre;
      this.releaseYear = releaseYear;
    }
  }
  
  // Create five movie objects
  let movie1 = new Movie("The Shawshank Redemption", "Drama", 1994);
  let movie2 = new Movie("Inception", "Sci-Fi", 2010);
  let movie3 = new Movie("Pulp Fiction", "Crime", 1994);
  let movie4 = new Movie("The Dark Knight", "Action", 2008);
  let movie5 = new Movie("The Matrix", "Sci-Fi", 1999);

  //INSTANCE NINE
  //9.Drugs
class Analgesic {
    constructor(name, type, dosage) {
      this.name = name;
      this.type = type;
      this.dosage = dosage;
    }
}
  
  // Create 5 objects of the class
  let aspirin = new Analgesic("Aspirin", "NSAID", "325 mg");
  let ibuprofen = new Analgesic("Ibuprofen", "NSAID", "200 mg");
  let acetaminophen = new Analgesic("Acetaminophen", "Non-opioid", "500 mg");
  let codeine = new Analgesic("Codeine", "Opioid", "30 mg");
  let morphine = new Analgesic("Morphine", "Opioid", "10 mg");

  //INSTANCE TEN
  //10. Disease
  class Disease {
    constructor(name, cardinalSymptom, treatment) {
      this.name = name;
      this.cardinalSymptom = cardinalSymptom;
      this.treatment = treatment;
    }
  }
  
  // Create five disease objects
  let disease1 = new Disease("Influenza", "Fever", "Rest, fluids, and antiviral medication");
  let disease2 = new Disease("COVID-19", "Cough", "Quarantine, supportive care, and vaccination");
  let disease3 = new Disease("Malaria", "Fever", "Antimalarial drugs");
  let disease4 = new Disease("Diabetes", "Frequent urination", "Insulin therapy");
  let disease5 = new Disease("Alzheimer's", "Memory loss", "Symptomatic treatment");


  //use dot and bracket notation to print out at least 2 properties for each object
  

// Novel
console.log(bk1.title); 
console.log(bk2["author"]);
console.log(bk3.genre); 
console.log(bk4["description"]);


// Site
console.log(destination1.name); 
console.log(destination2["country"]);
console.log(destination3.attractions); 
console.log(destination4["transportation"]);
console.log(destination5.name); 

// JunkFood
console.log(Food1.name);
console.log(Food2["category"]); 
console.log(Food3.calories); 
console.log(Food1["name"]); 

// Phone
console.log(phone1.brand);
console.log(phone2["model"]);
console.log(phone5.brand);
console.log(phone1["brand"]);

// BasketballTeam
console.log(team2["city"]);
console.log(team3.coach); 
console.log(team4["players"]);
console.log(team1["name"]);

// RugbyPlayer
console.log(player1.name); 
console.log(player2["position"]); 
console.log(player5.height); 
console.log(player1["name"]); 

// Watch
console.log(watch1.brand); 
console.log(watch2["model"]); 
console.log(watch4["caseMaterial"]);
console.log(watch5.brand); 
console.log(watch1["brand"]); 

// Movie
console.log(movie1.title); 
console.log(movie2["genre"]);
console.log(movie3.releaseYear)
console.log(movie5.title); 
console.log(movie1["title"]); 

// Analgesics
console.log(aspirin.name); 
console.log(ibuprofen["type"]); 
console.log(morphine.name);
console.log(aspirin["name"]); 

// Disease
console.log(disease1.name); 
console.log(disease3.treatment); 
console.log(disease4["treatment"])
console.log(disease1["name"]); 

