   /* Basic String Methods
Javascript strings are primitive and immutable: All string methods produce a new string without altering the original string.

String length
String charAt()
String charCodeAt()
String at()
String [ ]
String slice()
String substring()
String substr()
See Also:
String Search Methods
String Templates
String toUpperCase()
String toLowerCase()
String concat()
String trim()
String trimStart()
String trimEnd()
String padStart()
String padEnd()
String repeat()
String replace()
String replaceAll()
String split() */






//JavaScript will try to convert strings to numbers in all numeric operations:
let x = "100";
let y = "10";
let z = x / y;
console.log(z);

//NaN is a JavaScript reserved word indicating that a number is not a legal number.

let xi = 100 / "Apple";
console.log(xi);

let po = 0xFF;
console.log(po);
let xg = 123;
let yg = new Number(123);
console.log(xg);
console.log(yg);

let xt = 9.656;
xt.toFixed(0);
xt.toFixed(2);
xt.toFixed(4);
xt.toFixed(6);
console.log(Number(true));


//These number methods can be used on all JavaScript numbers:

//Method	Description
//toString()	Returns a number as a string
//toExponential()	Returns a number written in exponential notation
//toFixed()	Returns a number written with a number of decimals
//toPrecision()	Returns a number written with a specified length
//valueOf()	Returns a number as a number


//Number()	Returns a number converted from its argument.
//parseFloat()	Parses its argument and returns a floating point number
//parseInt()	Parses its argument and returns a whole number

let tet = "Apple, Banana, Kiwi";
let part = tet.slice(7, 13);
/*slice(start, end)
substring(start, end)
substr(start, length)*/





//ARRAYS
const cars = ["Saab", "Volvo", "BMW"];
console.log(cars);
let car=cars[0];
console.log(car);
//const cars = new Array("Saab", "Volvo", "BMW");
cars[0] = "Opel";
console.log(cars[0]);

const fruits = ["Banana", "Orange", "Apple", "Mango"];
let yr=fruits.toString();
console.log(yr);

const person = ["John", "Doe", 46];
console.log(person);


//Array Elements Can Be Objects
//JavaScript variables can be objects. Arrays are special kinds of objects.
//Because of this, you can have variables of different types in the same Array.
//You can have objects in an Array. You can have functions in an Array. You can have arrays in an Array:

let lengt=fruits.length;
console.log(lengt);

let ui=fruits[0];
console.log(ui);
let text="<ul>";
for(let x=0;x<lengt;x++)
{
text+="<li>"+fruits[x]+"</li>";
}
text+="<ul>";
console.log(text);


fruits.push("arundhathi");
console.log(fruits);
fruits[fruits.length] = "Lemon";  // Adds "Lemon" to fruits
console.log(fruits);
fruits[9] ="yummy";
console.log(fruits);





//JavaScript new Array()
//JavaScript has a built-in array constructor new Array().

//But you can safely use [] instead.

//These two different statements both create a new empty array named points:

//const points = new Array();
//const points = [];
const myObj = {
   name: "John",
   age: 30,
   ca: [
     {name:"Ford", models:["Fiesta", "Focus", "Mustang"]},
     {name:"BMW", models:["320", "X3", "X5"]},
     {name:"Fiat", models:["500", "Panda"]}
   ]
 }
console.log(myObj.ca[0].name);

let mi=fruits.join("*");
console.log(mi);
fruits.pop();
console.log(fruits);
//shift()
fruits.shift;
console.log(fruits);

const myGirls = ["Cecilie", "Lone"];
const myBoys = ["Emil", "Tobias", "Linus"];

const myChildren = myGirls.concat(myBoys);
console.log(myChildren);

const myArr = [[1,2],[3,4],[5,6]];
const newArr = myArr.flat();
console.log(newArr);


const fruts = ["Banana", "Orange", "Apple", "Mango"];
fruts.splice(2, 0, "Lemon", "Kiwi");
console.log(fruts);

//Using splice() to Remove Elements
//With clever parameter setting, you can use splice() to remove elements without leaving "holes" in the array:

//Example
//const fruits = ["Banana", "Orange", "Apple", "Mango"];
//fruits.splice(0, 1);

//ARRAY SEARCH
/*Array indexOf()
Array lastIndexOf()
Array includes()


See Also:
Basic Methods
Sort Methods
Iteration Methods	Array find()
Array findIndex()
Array findLast()
Array findLastIndex()*/

/*The difference between toSorted() and sort() is that the first method creates a new array, keeping the original array unchanged, while the last method alters the original array.*/
/*The difference between toReversed() and reverse() is that the first method creates a new array, keeping the original array unchanged, while the last method alters the original array.*/
