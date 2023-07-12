// create 10 classes with 5 objects 

class Phone{
    constructor(name, model, chip, display, battery){
        this.name = name 
        this.model = model 
        this.chip = chip 
        this.display = display 
        this.battery = battery 
    }
}

let google = new Phone("pixel", "7pro", "tensor G2", "120hz", 4000 )
let samsung = new Phone("s23", "ultra", "snapdragon 8", "120hz", 4500 )


class Person{
    constructor(name, age, gender, height, gamePlayed){
        this.name = name 
        this.age = age 
        this.gender = gender 
        this.height = height 
        this.gamePlayed = gamePlayed
    }
}

let person1 = new Person("pete", 19, "male", 5.9, "hockey" )
let person2 = new Person("micheal", 22, "male", 5.9, "football" )


class Country{
    constructor(name, continent, directon, president, race){
        this.name = name 
        this.continent = continent 
        this.directon = directon 
        this.president = president 
        this.race = race 
    }
}

let countA = new Country("usa", "America", "north", "biden", "white")
let countB = new Country("uganda", "Africa", "east", "museveni", "black")


class Movie{
    constructor(name, type, country, time, rate){
        this.name = name 
        this.type = type 
        this.country = country 
        this.time = time 
        this.rate = rate 
    }
}

let movA = new Movie("ready player one", "film", "usa", 150, 90)
let movB = new Movie("Fargo", "tv", "usa", 170, 91)


class Club{
    constructor(name, country, league, table, qualification){
        this.name = name 
        this.country = country 
        this.league = league 
        this.table = table 
        this.qualification = qualification 
    }
}

let teamA = new Club("chelsea", "england", "EPL", 12, "NO" )
let teamB = new Club("manU", "england", "EPL", 3, "YES" )


class Computer{
    constructor(name, model, chip, display, battery){
        this.name = name 
        this.model = model 
        this.chip = chip 
        this.display = display 
        this.battery = battery 
    }
}

let Apple = new Computer("mac", "air", "M2", 120, 10000 )
let PC = new Computer("windows", "surface pro", "Exonus", 90, 12000 )


class Watch{
    constructor(name, model, chip, display, battery){
        this.name = name 
        this.model = model 
        this.chip = chip 
        this.display = display 
        this.battery = battery 
    }
}

let watchA = new Watch("pixel", "watch", "tensor", 60, 1200 )
let watchB = new Watch("galaxy", "watch 5", "snapdragon", 60, 1000 )


class Tab{
    constructor(name, model, chip, display, battery){
        this.name = name 
        this.model = model 
        this.chip = chip 
        this.display = display 
        this.battery = battery 
    }
}

let Apple1 = new Tab("Ipad", "pro", "A15", "120hz", 6000 )
let samsung1 = new Tab("galaxy", "tab 5", "snapdragon 8", "120hz", 6000 )


class Buds{
    constructor(name, model, chip, display, battery){
        this.name = name 
        this.model = model 
        this.chip = chip 
        this.display = display 
        this.battery = battery 
    }
}

let googleA = new Buds("pixel", "buds pro", "tensor", "120hz", 1200 )
let samsungB = new Buds("galaxy", "buds 5", "exynos", "120hz", 1200 )


class Console{
    constructor(name, model, chip, display, battery){
        this.name = name 
        this.model = model 
        this.chip = chip 
        this.display = display 
        this.battery = battery 
    }
}

let consoleA = new Console("playstation", "5", "amd", "120hz", "NONE" )
let consoleB = new Console("xbox", "series X", "intel", "120hz", "NONE" )




// use dot and bracket notation to print 2 properties from each object 

console.log(google.model)
console.log(samsung["name"])

console.log(person1.height)
console.log(person2["name"])

console.log(countA.name)
console.log(countB["directon"])

console.log(movA.type)
console.log(movB["country"])

console.log(teamA.league)
console.log(teamB["name"])

console.log(Apple.model)
console.log(PC["name"])

console.log(watchA.model)
console.log(watchB["name"])

console.log(Apple1.model)
console.log(samsung1["name"])

console.log(samsungB.model)
console.log(googleA["name"])

console.log(consoleA.model)
console.log(consoleB["name"])



























































