// CREATE 10 DIFFERENT CLASSES WITH 5 OBJECTS OUT OF EACH CLASS
// 1.
class Friend {
     constructor(firstName, tribe, likes, age, religion){
          this.firstName = firstName;
          this.tribe = tribe;
          this.likes = likes;
          this.age = age;
          this.religion = religion;
   }
}

let friend1 = new Friend("Angel", "Musoga", "swimming", 19, "seventhday");
let friend2 = new Friend("Hanisha", "Muganda", "Sleeping", 20, "muslim")
console.log(friend1);
console.log(friend2);

// 2.
class School {
    constructor(Headteacher, population, years_active, subjects_taught, teachers){
        this.headteacher = Headteacher;
        this.population = population;
        this.years_active = years_active;
        this.subjects_taught = subjects_taught;
        this.teachers = teachers;
    }
}

let schoolA = new School("Kingdom School", "800students", 8, 17, 20 );
let schoolB = new School("Crested High", "1000students", 25, 20, 54);
console.log(schoolA);
console.log(schoolB)

3.
class Cloth {
    constructor(brand, size, color, type, release){
        this.brand = brand;
        this.size = size;
        this.color = color;
        this.type = type;
        this.release = release;
    }
}

let cloth1 = new Cloth("guchi", 10, "black", "dress", 2020);
let cloth2 = new Cloth("Dolce&Gabbana", 8, "blouse", "black", 2015);
console.log(cloth1);
console.log(cloth2);

4.
class House {
    constructor(rooms, roofing, flooring, owners, finishing){
        this.rooms = rooms;
        this.roofing = roofing;
        this.flooring = flooring;
        this.owners = owners;
        this.finishing = finishing;
    }
}

let housep = new House(5, "hipped", "tiled floor", 6, "plastered");
let houseb = new House(3, "Gable", "cemented", 2, "plastered");
console.log(housep);
console.log(houseb);

5.
class Mother {
    constructor(name, spouse, children, nationality, age){
        this.name = name;
        this.spouse = spouse;
        this.children = children;
        this.nationality = nationality;
        this.age = age;
    }
}

let mother1 = new Mother("Grace","Joseph", 4, "Ugandan", 45)
let mother2 = new Mother("Martha", "Mark", 2, "Kenyan", 28)
console.log(mother1);
console.log(mother2);

6.
class Country {
    constructor(president, independence, population, sectors, forests){
        this.president = president;
        this.independence = this.independence;
        this.population = population;
        this.independence = independence;
        this.sectors = sectors;
        this.forests = forests;
    }
}

let country1 = new Country("Uganda", 1962, "40million", 6, "mabira");
let country2 = new Country("USA", "Unknown", "75million", 10, "greenForest")
console.log(country1);
console.log(country2);

7.
class Girl {
    constructor(name, hairStyle, skills, hobbies, education){
        this.name = name;
        this.hairstyle = hairStyle;
        this.skills = skills;
        this.hobbies = hobbies;
        this.education = education;
    }
}

let girlA = new Girl("Emmy", "braids", "hair dressing", "form 6");
let girlB = new Girl("Chloe", "dreads", "Nurse", "dancing", "Diploma");
console.log(girlA);
console.log(girlB);

8.
class Phone {
    constructor(brand, color, speed, camera, remark){
        this.brand = brand;
        this.color = color;
        this.speed = speed;
        this.camera = camera;
        this.remark = remark;
    }
}

let phoneA = new Phone("Iphone", "black", "excellent", "high quality", "the best");
let phoneB = new Phone("Tecno", "white", "moderate", "good", "adjustments needed");
console.log(phoneA);
console.log(phoneB);

9.
class Book {
    constructor(color, pageNumber, company, size, ){
        this.color = color;
        this.pageNumber = pageNumber;
        this.company = company;
        this.size = size;
    }
}

let bookLisa = new Book("Green", 72, "picfare", "A4", )
let bookElle = new Book("black", "500quire", "visa", "blackbook")
console.log(bookLisa);
console.log(bookElle);

10.
class Flower {
    constructor(petals, color, sepals, size, ){
        this.petals = petals;
        this.color = color;
        this.sepals = sepals;
        this.size = size;
    }
}

let flower1 = new Flower(5, "yellow", 4, "small");
let flower2 = new Flower(8, "red", 3, "large" );
console.log(flower1);
console.log(flower2);


// USE DOT NOTATION AND BRACKET NOTATION TO PRINTOUT ATLEAST 2 PROPERTIES FOR EACH OBJECT
1.
console.log(friend1.tribe);
console.log(friend2.religion);

console.log(friend1["firstName"]);
console.log(friend2["likes"]);

2.
console.log(schoolA.years_active);
console.log(schoolB.headteacher);

console.log(schoolA["population"]);
console.log(schoolB["teachers"]);

3.
console.log(cloth1.brand);
console.log(cloth2.type);

console.log(cloth1["size"]);
console.log(cloth2["release"]);

4.
console.log(houseb.flooring);
console.log(housep.finishing);

console.log(houseb["owners"]);
console.log(housep["rooms"]);

5.
console.log(mother1.spouse);
console.log(mother2.nationality);

console.log(mother1["children"]);
console.log(mother2["name"]);

6.
console.log(country1.independence);
console.log(country2.president);

console.log(country1["forests"]);
console.log(country2["sectors"]);

7.
console.log(girlA.hairstyle);
console.log(girlB.hobbies);

console.log(girlA["skills"]);
console.log(girlB["name"]);

8.
console.log(phoneA.camera);
console.log(phoneB.color);

console.log(phoneA["speed"]);
console.log(phoneB["remark"]);

9.
console.log(bookElle.company);
console.log(bookLisa.pageNumber);

console.log(bookElle["color"]);
console.log(bookLisa["size"]);

10.
console.log(flower1.petals);
console.log(flower2.sepals);

console.log(flower1["color"]);
console.log(flower2["size"]);