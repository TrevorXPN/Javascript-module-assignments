// assignment
//1. create five if statements
//2. create five switch cases
//3. create a switch case for arrays

// if statements

const favoriteAanimal = "shark";

if (favoriteAanimal == "shark") {
  console.log("shark are dangerous");
} else if (favoriteAanimal == "monkey") {
  console.log("monkey love bananas");
} else if (favoriteAanimal == "cow") {
  console.log("cow give us milk");
}

let number = 5;
if (number > 5) {
  console.log("number is greater than 5");
} else {
  console.log("number is less than 5");
}


let flower = "rose"
if(flower = "rose"){
    console.log("accept Proposal");
}else{
    console.log("reject Proposal");
}


let laptop = "Dell"
if(laptop = "Dell"){
    console.log("great laptop");
}else(laptop = "dont allow")

let age = 14
if (age >14){
    console.log("your to old for this");
}else if (age = 14 ){
    console.log("your young rigt for this");
}else{
    console.log("your too young");
}

// switch
switch (favoriteAanimal) {
    case "shark":
      console.log("shark are dangerous");
      break;
    case "monkey":
      console.log("monkey love bananas");
      break;
    case "cow":
    case "fresian":
      console.log("cow give us milk");
      break;
    default:
      console.log("animals are good creatures");
}

let number1 = 5;

switch(number1){
    case number1>5:
        console.log("number is greater than 5");
        break;
    case number1=5:
        console.log("number is equal to 5");
        break;
    default:
        console.log("number is less than 5");
        break;
}
  
let flower1 = "rose"
  
switch (flower1) {
    case "rose":
        console.log("rose are red");
        break;
    case "hybiscus":
        console.log("use for taking tear");
        break;
    default:
        console.log("unknown flower");
        break;
}

let laptop1 = "Dell"

switch (laptop1) {
    case "hp":
        console.log("look for a victus");
        break;
    case "Dell":
        console.log("great laptop");
        break;
    default:
            console.log("bring any other brand")
        break;
}

let alcohol = 18
  
switch (alcohol) {
    case alcohol<18:{
        console.log("your not allowed to drink alcohol");
    }
    case alcohol=18:{
            console.log("your now allowed to drink alcohol");
        }
    default:
        console.log("Dink responsibly");
}
  
// 3.
let hobbies = ["singing", "dancing", "praying","movies", "games"];
for (hobbie of hobbies) {
    switch(hobbie){
        case "singing":
            console.log("i can sing");
            break;
        case "clubbing":
            console.log("not cut out for the club");
            break;
        case "horror_movies":
            console.log("i like horror movies");
            break;
        default:
            console.log("there are no more hobbies for me");
            break;
    }
}
