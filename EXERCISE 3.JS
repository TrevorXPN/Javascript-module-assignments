// 1.
class furniture{
    constructor(Made, Make, Width, Height ){
        this.made = Made;
        this.Make = Make;
        this.width = Width;
        this.Height = Height;
    }
}
let furniture1 = new furniture("chinese made", "wood", "80cm", "100cm")
console.log(furniture1)
console.log(furniture1.Make);
console.log(furniture1["Height"])

// 2.
class students{
    constructor(name, nationality, color, house){
        this.name = name;
        this.nationality = nationality;
        this.color = color;
        this.house = house;
    }
}
let Data = new students("Allan", "Nigerian", "brown", "house1")
console.log(Data)
console.log(Data.nationality);
console.log(Data["name"])

// 3.
class Client{
    constructor(name, nationality, Address, Id){
        this.name = name;
        this.nationality = nationality;
        this.Address = Address;
        this.Id = Id;
    }
}
let Client1 = new Client("Calvin", "Ugandan", "Lira", 8)
console.log(Client1)
console.log(Client1.nationality);
console.log(Client1["name"])

// 4.
class Phone{
    constructor(make, type, user,){
        this.make = make;
        this.type = type;
        this.user = user;
    }
}
let phone1 = new Phone("Sumsung", "Smartphone", "Asians",)
console.log(phone1)
console.log(phone1.make);
console.log(phone1["user"])

// 5.
class tables{
    constructor(material, color, width, Height){
        this.material = material;
        this.type = color;
        this.width = width;
        this.Height = Height;
    }
}
let officetables = new tables("wood", "black", "100cm", "90cm")
console.log(officetables)
console.log(officetables.material);
console.log(officetables["width"])

// 6
class partners{
    constructor(country, continent, number, payment){
        this.country = country;
        this.continent = continent;
        this.number = number;
        this.payment = payment;
    }
}
let PartnerA = new partners("China", "Asia", "NO.1", "PAYPAL")
console.log(PartnerA)
console.log(PartnerA.payment);
console.log(PartnerA["continent"])

// 7
class districts{
    constructor(Amount, Allocation, reffereneNo, payment){
        this.Amount = Amount;
        this.Allocation = Allocation;
        this.reffereneNo = reffereneNo;
        this.payment = payment;
    }
}
let district1 = new districts("5billion", "Health", "RefNo.01", "Bank")
console.log(district1)
console.log(district1.Allocation);
console.log(district1["Amount"])

// 8
class building{
    constructor(type, realEstate, location,){
        this.type = type;
        this.realEstate = realEstate;
        this.location = location;
        
    }
}
let Apartment1 = new building("Bangalore", "Air BnB", "Entebbe",)
console.log(Apartment1)
console.log(Apartment1.type);
console.log(Apartment1["location"])


// 9
class Animals{
    constructor(Breed, Color, Origin, Usage){
        this.Breed = Breed;
        this.Color = Color;
        this.Origin = Origin;
        this.Usage = Usage;
        
    }
}
let AnimalA = new Animals("Zebu", "Brown", "Scotland", "Beef")
console.log(AnimalA)
console.log(AnimalA.Usage);
console.log(AnimalA["Origin"])

// 10
class Site{
    constructor(location, clientsName, houseNumber, Address){
        this.location = location;
        this.clientsName = clientsName;
        this.houseNumber = houseNumber;
        this.Address = Address;
        
    }
}
let Site1 = new Site("Kampala", "John", "F1504", "Kira 2 road")
console.log(Site1)
console.log(Site1.Address);
console.log(Site1["location"])