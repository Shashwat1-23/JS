const name="shashwat"
const repoCount=50

//console.log(name + repoCount + "value") old way to concatenate strings now do it by string interpolation.

//string interpolation
console.log(`hello my name is ${name} and my recount is ${repoCount}`);

const gameName= new String('harshit-shashwat-mishra')

// console.log(gameName[0]);
// console.log(gameName.__proto__);


// console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-8, 4)
console.log(anotherString);

const newStringOne = "   shashwat    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://shashwat.com/shashwat%20mishra"

console.log(url.replace('%20', '-'))

console.log(url.includes('sundar'))

console.log(gameName.split('-'));

