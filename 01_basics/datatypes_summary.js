//on the basis of how data types are stored in memory and how they are used.There are classified in two types primitive and non-primitive.
//primitive-they are generally call by value means not original value is given a copy is given to perfor the operation.
// 7 types: String ,Number, Boolean, null, Undefined, Symbol, BignInt.

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 3456543576654356754n


//Reference (Non premitive)

//Array,Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}
console.log(typeof heros)

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId);

// https://262.ecma-international.org/5.1/#sec-11.4.3




//JavaScript is a dynamically typed language. It means that JS does not require the explicit declaration of the variables before they’re used.
// For example :
// In JAVA (Statically typed language)
// String name; //Variable have types
// name = “Ali”; //Values have types

// name = 2; (not possible) //variable cannot change type

// In JAVASCRIPT (Dynamically typed language)
// var name; //Variable have no types
// name = “Ali”; //Values have types

// name = 2; //variable change type dynamically


// -------------------------------------------
//stack(Primitive)  Heap(Non-primitive)

//stack
let myYoutubename="shashwat mishra"
let anothername=myYoutubename
anothername="harshit"

// console.log(myYoutubename);
// console.log(anothername);


//heap
let userOne={
    email:"shashwatmishra2017@gmail.com",
    upi:"sha@oksbi"
}
let userTwo=userOne
userTwo.email="contactshashwat2022@gmail.com"

console.log(userOne);
console.log(userTwo);