/*
var name = "Jack";
var age = 23;
var shootingScore = 45.6;

var message = "Hi, my name is " + name + " and I am " + age + " years old!";
*/

/*var firstName = "John";
var lastName = "JohnJingleHeimerSmith";
var dateofBirth = "10-09-82";
var age = 23;
var profileImgUrl = "http://coolpicks.com/johnjacob.jpg";

var loginWelcomeMessage = "Welcome, " + firstName + ". Happy " + age + "rd birthday!";


console.log(loginWelcomeMessage);*/

/*var sum = 10 + 15;
var sub = 15 - 10;
var mul = 10 * 3;
var mod = 10 % 3;


var msg = "10 / 3 = 2 with a remainder of " + mod;

var result = 10 * ((5 + 3) - 4);

console.log(result);*/

/*
var myAccountBalance = 300;
var nikeSBShoes = 799.23;
var coupon = 500;
// == equal to
// === ??
// <= less than or equal to
// >= greater than or equal to
//!==

var val1 = 23;
var val2 = "23";

if(val1 === val2){
    console.log("I'm the same age as Joe!");
} else {
    console.log("One of these is not like the other...")
}
*/

/*if (nikeSBShoes <= myAccountBalance){
    myAccountBalance -= nikeSBShoes;
    console.log("We just bought some dope shoes!");
    console.log("Account Balance: " + myAccountBalance);
} else if (nikeSBShoes - coupon <= myAccountBalance){
        console.log("We just bought some dope shoes with a coupon!");
        myAccountBalance -= nikeSBShoes - coupon;
        console.log("Account Balance: " + myAccountBalance);
} else{
    console.log("You too broke fo shoes bra!")
}*/



/*if(1===1 && 2===2 || "joe" === "joe"){
    console.log("These are both true!");
}

if (true && true){
    console.log("These are the same!")
}

if(1==3 || "joe" === "joe"){
    console.log("one of these are true!")
}

var cat1 = 5;
var cat2 = 10;
var cat3 = 1;
var cat3disabledHandicap = true;

if ((cat1 > cat2 && cat1 > cat3) && !cat3disabledHandicap){
    console.log("Cat 1 is the cutest!");
} else if((cat2 > cat1 && cat2 > cat3) && !cat3disabledHandicap){
        console.log("Cat 2 is the cutest!");
    } else if((cat3 > cat1 && cat3 > cat2) || cat3disabledHandicap){
        console.log("Cat 3 is the cutest!");
    }*/


/*var balances = [50.45, 4000.12, -300.50];

var studentsNames = ["Timmy", "Janessa", "Arun"];

var naughtyList = [];
naughtyList.push(studentsNames[0]);

var index = naughtyList.indexOf("Timmy");
console.log(naughtyList);

if (index > -1){
    naughtyList.splice(index, 1);
}

console.log(naughtyList);*/

//var total = 10;
//for(var x = 0; x < total; x++){
////Iterate until told not to
//    console.log(x);
//}

//var length1 = 15;
//var width1 = 10;
//
//var area1 = length1  * width1;
//
//var length2 = 12;
//var width2 = 14;
//var area2 = length2 * width2;
//
//console.log(area1);
//console.log(area2);
//
//function area(length, width) {
//    return length * width;
//}
//var rectanglesAreas = []
//rectanglesAreas.push(area(10,15));
//rectanglesAreas.push(area(14,2));
//rectanglesAreas.push(area(4,5));
//
//console.log(rectanglesAreas);
//
//var bankBalance = 500;
//
//function makeTransaction(priceOfSale) {
//    if (priceOfSale <= bankBalance){
//        bankBalance -= priceOfSale;
//        console.log("Purchase Successful");
//    } else {
//        console.log("Insufficient Funds");
//    }
//}
//
//console.log(bankBalance);
//makeTransaction(79.00);
//console.log(bankBalance);
//makeTransaction(2.32);
//console.log(bankBalance);
//makeTransaction(10.45);
//
//console.log(bankBalance);
//makeTransaction(450.00);
//
//
//var transaction = function(priceOfSale) {
//    if (priceOfSale <= bankBalance){
//        bankBalance -= priceOfSale;
//        console.log("Purchase Successful");
//    } else {
//        console.log("Insufficient Funds");
//    }
//};
//
//var printCustomerName = function(first,last) {
//    console.log("First Name: " + first + " Last Name: " + last);
//}
//
//var applyForCreditCard = function(creditScore, soul) {
//    
//}
//
//var bankOperations = [];
//bankOperations.push(transaction);
//bankOperations.push(printCustomerName);
//bankOperations.push(applyForCreditCard);
//
//
//function areaOfTriangle(a, h){
//    return(a*h)/2;
//}
//
//console.log(areaOfTriangle(4,5));
//
//
//function areaofCircle(r){
//    return Math.PI*r*r;
//}
//
//console.log(areaofCircle(5));


//function multiArea(name, a, b){
//    if(name == "Triangle"){
//        return(a*b)/2;
//    } else if(name == "Circle"){
//        return Math.PI*a*a;
//    } else if(name == "Rectangle") {
//        return a*a;
//    }
//}
//
//console.log(multiArea('Triangle', 2, 3));
//console.log(multiArea('Circle', 3));
//console.log(multiArea('Rectangle', 2));



//var student0 = {
//    firstName: "Jayne",
//    lastName: "Looo",
//    age: 8,
//};


//console.log(student0.greeting());

//Creates a new empty object
//var student1 = new Object();
//student1.firstName = "John";
//student1.lastName = "Paker";
//student1.age = 7;
//
//var student2 = {};
//student2.firstName = "Zack";
//student2.lastName = "Bobo";
//student2.age = 5;

//var students = [];
//
//function Student(first, last, age) {
//    this.firstName = first;
//    this.lastName = last;
//    this.age = age;
//    this.greeting = function() {
//        return "Hi, I'm " + this.firstName + " and I'm " + this.age + " years old.";
//    };
//    
//}
//
//students.push(new Student("Jenny","Laga",5));
//students.push(new Student("Timmy","Turner",8));
//students.push(new Student("Carl","Jr",4));
//
//var student = students[0];
//
////for in loop
//for(var key in student){
//    console.log(student[key]);
//}

//var s1 = new Student("Jenny","Laga",5);
//console.log(s1);
//console.log(s1.greeting());
//students.push(student0);
//students.push(student1);
//students.push(student2);

//for (var index = 0; index < students.length; index++) {
//    var student = students[index];
//    console.log(student.greeting());
//}

//console.log(student.firstName);
//console.log(student.lastName);
//console.log(student["firstName"]);
//console.log(student["lastName"]);
//var students = {"John", "Jacob", "Jingle", "Heimer", "Smith"};
//
//

//Bind
//Alex Brown's 

//this.car = "Honda Civic w/ Ugly Spoiler";
//
//var marksGarage = {
//    car: "Aston Martin",
//    getCar: function(){
//        return this.car;
//    }
//};
//
//console.log(marksGarage.getCar());
//
//var storeGetCarForLater = marksGarage.getCar;
////Now work is over and Mark wants his car
//
//console.log(storeGetCarForLater());
//
//var theRealGetCarFunction = marksGarage.getCar.bind(marksGarage);
//console.log(theRealGetCarFunction());































