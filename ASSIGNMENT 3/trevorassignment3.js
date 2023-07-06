//CREATE 10 DIFFERENT CLASSES WITH 5 OBJECTS EACH
//USE DOT AND BRACKET NOTATION TO PRINT OUT  ATLEST 2 PROPERTIES FOR EACH OBJECT

                //CLASSES.
//NO 1.
class Student{
    constructor(studentName,studentId,stream,age,gender){
        this.studentName = studentName;
        this.studentId = studentId;
        this.stream = stream;
        this.age = age;
        this.gender = gender;
    }
}

let student1 = new Student("Alarik Zoldeck",2,"Z",15,"male")
let student2 = new Student("Gwen Stacy",133,"Y",14,"female")
let student3 = new Student("Jack Kiggundu",40,"Y",17,"male")
let student4 = new Student("Trevor Asadullah",1,"A",13,"male")
let student5 = new Student("Roy Kent",151,"B",19,"male")

console.log(student1.studentName)
console.log(student1["age"])

console.log(student2.studentId)
console.log(student2["stream"])

console.log(student3.gender)
console.log(student3["age"])

console.log(student4.name)
console.log(student4["gender"])

console.log(student5.gender)
console.log(student5["age"])

//NO 2.
class Movie{
    constructor(movieName,director,genre,year,rating){
        this.movieName = movieName;
        this.director = director;
        this.genre = genre;
        this.year = year;
        this.rating = rating;
    }
}

let movie1 = new Movie("Super Burial brothers","Clinton Mugisha","horror",1879,8.5/10)
let movie2 = new Movie("Cindumbrella","Jemimah Kutessa","comedy",1500,9/10)
let movie3 = new Movie("John stick","Bishop Conquest","romance",2021,10/10)
let movie4 = new Movie("Excretion","Angel Umwiza","action",2023,9.5/10)
let movie5 = new Movie("Slow and the happy X","Trevor King Kayongo",2023,10/10)

console.log(movie1.movieName)
console.log(movie1["year"])

console.log(movie2.director)
console.log(movie2["rating"])

console.log(movie3.genre)
console.log(movie3["movieName"])

console.log(movie4.year)
console.log(movie4["director"])

console.log(movie5.movieName)
console.log(movie5["director"])

//NO 3.
class Game{
    constructor(gameName,studio,genre,console,type){
         this.gameName = gameName;
         this.studio =studio;
         this.genre = genre;
         this.console = console;
         this.type = type;
    }
}

let game1 = new Game("Demon of Peace","wiz studios","romance","Playstation","exclusive")
let game2 = new Game("Prince of Posho","bratz studios","adventure","Xbox","inclusive")
let game3 = new Game("Boruto style z","unknown","Nintendo","fantasy","Wii")
let game4 = new Game("Soul Beaver","wix studio","happy","Playstation","inclusive")
let game5 = new Game("king of zebras","home studios","adventure","xbox","novalty")

console.log(game1.gameName)
console.log(game1["type"])

console.log(game2.studio)
console.log(game2["console"])

console.log(game3.genre)
console.log(game3["gameName"])

console.log(movie4.type)
console.log(game4["studio"])

console.log(game5.gameName)
console.log(game5["console"])

//NO 4.
class Anime{
    constructor(animeName,protag,genre,antag,episodes){
        this.animeName = animeName;
        this.protag = protag;
        this.episodes = episodes;
        this.antag = antag;
        this.genre = genre;
    }
}
 
let anime1 = new Anime("Demon Slayer","Tanjiro Kamado",124,"Michale Jackson","action")
let anime2 = new Anime("Inuyasha","Kagome Higarashi",164,"Naraku","adventure")
let anime3 = new Anime("Horimiya","Miyamora & Hori",12,"none","romance")
let anime4 = new Anime("Your lie in April","Ryota Kise",24,"depression","music")
let anime5 = new Anime("Blue Lock","Yoichi Isagi",24,"Micheal Kaiser","sports")

console.log(anime1.animeName)
console.log(anime1["genre"])

console.log(anime2.protag)
console.log(game2["antag"])

console.log(anime3.episodes)
console.log(anime3["animeName"])

console.log(anime4.genre)
console.log(anime4["episodes"])

console.log(anime5.animeName)
console.log(anime5["antag"])

// NO.5
class Guest{
    constructor(guestName,age,children,spouse,relation){
        this.guestName = guestName;
        this.age = age;
        this.children = children;
        this.spouse = spouse;
        this.relation = relation;
    }
}
 let guest1 =  new Guest("Trevor Kayongo",23,"none","none","brother")
 let guest2 =  new Guest("Antonio Varde",33,"none","Kira lukman","brother")
 let guest3 =  new Guest("Saadiya Hussein",55,3,"Josiah Hussein","friend")
 let guest4 =  new Guest("Munira Kayongo",20,"none","none","sister")
 let guest5 =  new Guest("Nicole Watterson",26,"none","none","friend")

console.log(guest1.guestName)
console.log(guest1["relation"])

console.log(guest2.children)
console.log(guest2["spouse"])

console.log(guest3.age)
console.log(guest3["guestName"])

console.log(guest4.spouse)
console.log(guest4["age"])

console.log(guest5.guestName)
console.log(guest5["spouse"])

// NO.6
class Entertainment{
    constructor(medium,popularity,manufacturer,yearFounded,founder){
        this.medium = medium;
        this.popularity = popularity;
        this.manufacturer = manufacturer;
        this.yearFounded = yearFounded;
        this.founder = founder;
    }
}

let ent1 = new Entertainment("Movie","very","hollywood",1700,"Jason Vorhes")
let ent2 = new Entertainment("Football","extrodinary","brazil",1400,"Helvetica")
let ent3 = new Entertainment("Music","very","india",1300,"Jobiiani")
let ent4 = new Entertainment("Basketball","extrodinary","america",1903,"Ricky Grom")
let ent5 = new Entertainment("baseball","okay","indonesia",2000,"Vincent abraham")

console.log(ent1.medium)
console.log(ent1["popularity"])

console.log(ent2.founder)
console.log(ent2["manufacturer"])

console.log(ent3.yearFounded)
console.log(ent3["medium"])

console.log(ent4.founder)
console.log(ent4["manufacturer"])

console.log(ent5.medium)
console.log(ent5.popularity)

//NO.7
class Job{
    constructor(jobName,salary,qualifications,CEO,field){
        this.jobName = jobName;
        this.salary = salary;
        this.qualifications = qualifications;
        this.CEO = CEO;
        this.field =field;
    }
}

let job1 = new Job("fishmonger",200,"none required","none","fishing")
let job2 = new Job("Software engineer in Twitter",1000,"bacholars in computer programming","Elon Musk","software dev")
let job3 = new Job("Interior design",750,"Certificate in interior design","none","construction")
let job4 = new Job("Hotel Manager",500,"degree in caterin and house management","Jose Camai","hotel management")
let job5 = new Job("Chef",300,"none required","Peter Ogwang","Cooking")

console.log(job1.salary)
console.log(job1["qualifications"])

console.log(job2.CEO)
console.log(job2["jobName"])

console.log(job3.field)
console.log(job3["CEO"])

console.log(job4.qualifications)
console.log(job4["salary"])

console.log(job5.jobName)
console.log(job5["salary"])

//NO.8
class Country{
    constructor(countryName,capital,population,president,continent){
            this.countryName = countryName;
            this.capital = capital;
            this.population = population;
            this.president = president;
            this.continent = continent;
        }
}

let country1 = new Country("India",102400000,"22.6 million people","Mhat Magandi","Asia")
let country2 = new Country("Uganda",10100000,"1.1million people","Yoweri Kaguta Museveni","Africa")
let country3 = new Country("Usa",19345600000,"2.8billion people","Joe Biden","North America")
let country4 = new Country("Mexico",1983376000,"5.3million people","QUavez Harts","South America")
let country5 = new Country("Ireland",28888838800,"2.5 million people","JYOHAN Byustrokyuffer","Europe")

console.log(country1.countryName)
console.log(country1["capital"])

console.log(country2.population)
console.log(country2["continent"])

console.log(country3.president)
console.log(country3["capital"])

console.log(country4.continent)
console.log(country4["population"])

console.log(country5.countryName)   
console.log(country5["president"])

//NO.9
class Person {
    constructor(firstName,lastName,age,height,skinColor){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.height = height;
        this.skinColor = skinColor;
    }
}

let person1 = new Person("Michael", "Jordan", 23, 1.75, "white")
let person2 = new Person("Lionel", "Messi" , 36, 1.24,"white")
let person3 = new Person("Tiger", "Woods", 34, 1.33,"black")
let person4 = new Person("Ronda", "Rousey",25, 1.23,"white")
let person5 = new Person("Trevor", "Kurt",33,2.0,"white")

console.log(person1.firstName)
console.log(person1["lastName"])

console.log(person2.height)
console.log(person2["age"])

console.log(person3.skinColor)
console.log(person3["lastName"])

console.log(person4.height)
console.log(person4["lastName"])

console.log(person5.firstName)
console.log(person5["age"])

//NO.10

class Player{
    constructor(playerName,age,goals,assists,ballondor){
        this.playerName = playerName;
        this.age = age;
        this.goals = goals;
        this.assists = assists;
        this.ballondor = ballondor;    
}
}

let player1 = new Player("Lionel Messi", 36, 807, 357, 8)
let player2 = new Player("Christiano Ronaldo", 39 , 838, 236, 5)
let player3 = new Player("Zlatan Ibrahimovich", 41, 570, 159, 0)
let player4 = new Player("Wayne Rooney", 34, 269, 137, 0)
let player5 = new Player("Kayongo Trevor", 22, 100, 87, 1)

console.log(player1.playerName)
console.log(player1["assists"])

console.log(player2.goals)
console.log(player2["age"])

console.log(player3.ballondor)
console.log(player3["playerName"])

console.log(player4.goals)
console.log(player4["assists"])

console.log(player5.playerName)
console.log(player5["ballondor"])