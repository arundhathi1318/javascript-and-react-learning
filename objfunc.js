//objects and declaration
const car ={ type:"flat",model:"500",color:"white"};
let x=car.name;
console.log(x);
const person={};
person.name="aru";
person.age=18;
person.eye="blue";
person.fullname=waw();
delete person.age;
function waw()
{
    return this.name +" "+this.age;
}
console.log(person.fullname);
const hello=new Object();
hello.name="aru";
hello.age=29;
console.log(person.name);
console.log(person["name"]);
//A primitive value is a value that has no properties or methods.

//3.14 is a primitive value

//A primitive data type is data that has a primitive value.

//JavaScript defines 7 types of primitive data types:

//string
//number
//boolean
//null
//undefined
//symbol
//bigint
const per = {
    firstName:"John",
    lastName:"Doe",
    age:50, eyeColor:"blue"
  }
  
  // Create a copy
  const o = per;
  
  // Change Age in both
  o.age = 10;
  console.log(per.age);


  //shallow copy 
  
  
  let employee = {
    eid: "E102",
    ename: "Jack",
    eaddress: "New York",
    salary: 50000
}

console.log("Employee=> ", employee);
let newEmployee = employee;    // Shallow copy
console.log("New Employee=> ", newEmployee);

console.log("---------After modification----------");
newEmployee.ename = "Beck";
console.log("Employee=> ", employee);
console.log("New Employee=> ", newEmployee);
// Name of the employee as well as 
// newEmployee is changed.

//deep copy 
let employe = {
    eid: "E102",
    ename: "Jack",
    eaddress: "New York",
    salary: 50000
}
console.log("=========Deep Copy========");
let newEmploye = JSON.parse(JSON.stringify(employe));
console.log("Employee=> ", employe);
console.log("New Employee=> ", newEmploye);
console.log("---------After modification---------");
newEmploye.ename = "Beck";
newEmploye.salary = 70000;
console.log("Employee=> ", employe);
console.log("New Employee=> ", newEmploye);


myObj = {
    name:"John",
    age:30,
    myCars: {
      car1:"Ford",
      car2:"BMW",
      car3:"Fiat"
    }
  }

console.log(myObj.myCars.car2);



//Name	Description
/* assign()	Copies properties from a source object to a target object
constructor	Returns the function that created an object's prototype
create()	Returns an object created from an existing object
defineProperties()	Adds or changes properties
defineProperty()	Adds or changes a property
entries()	Returns an array of the key/value pairs of an object
freeze()	Prevents any changes to an object
fromEntries()	Returns an object created from an iterable list of key/value pairs
getOwnPropertyDescriptor()	Returns an array of the keys of an object
getOwnPropertyDescriptors()	Returns an array of the keys of an object
getOwnPropertyNames()	Returns an array of the keys of an object
groupBy()	Groups object elements according to returned callback values
isExtensible()	Returns true if an object is extensible
isFrozen()	Returns true if an object is frozen
isSealed()	Returns true if an object is sealed
keys()	Returns an array of the keys of an object
preventExtensions()	Prevents adding new properties to an object
prototype	Let you to add properties and methods to JavaScript objects
seal()	Prevents adding new or deleting existing object properties
toString()	Converts an object to a string and returns the result
valueOf()	Returns the primitive value of an object
values()	Returns an array of the property values of an object
 */


//javascript Assign() method
//Object.assign(target, source(s))//
//syntax

const person1 = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue"
  };
  
  // Create Source Object
  const person2 = {firstName: "Anne",lastName: "Smith"};
  
  // Assign Source to Target
  let y= Object.assign(person1, person2);
  console.log(y);






  //CREATE();
  const erson = {
    firstName: "John",
    lastName: "Doe"
  };
  
  // Create new Object
  const man = Object.create(erson);
  let yp= man.firstName = "Peter";
  console.log("man is " ,man.firstName);


  //object.defineProperties()
  const son = {
    firstName: "John",
    lastName: "Doe"
  };
  
  Object.defineProperties(son, {
    language: {value: "en"},
    year: {value: "Hello"}
  });
  console.log("son is",son);
  //synctax Object.defineProperty(object , property, descriptor)




  //The Object.defineProperty() method adds or changes an object property.

//// Create an Object:
//const person = {
  //  firstName: "John",
    ///lastName: "Doe",
    //language: "EN"
 // };
  
  // Add a new Property
  //Object.defineProperty(person, "year", {value:"2008"})
  //Change a property:
    
  // Create an object:
  ////const person = {
    //firstName: "John",
    //lastName: "Doe",
    //language: "EN"
  //};
  
  // Change a property
  //Object.defineProperty(person, "language", {value:"NO"})
  //Object.defineProperty(object, property, descriptor)
//


//The Object.entries() method returns an array of the key/value pairs of an object.
const fruits = {Bananas:300, Oranges:200, Apples:500};

let text = "";
for (let [fruit, value] of Object.entries(fruits)) {
  text += fruit + ": " + value + "<br>";
}
console.log(text);


//The fromEntries() method creates an object from a list of key/value pairs.
const fruit = [
    ["apples", 300],
    ["pears", 900],
    ["bananas", 500]
  ];
  
  const myOb = Object.fromEntries(fruit);
  console.log(   "my obj is",   myOb);


  //Object.groupBy(iterable, callback)
// Create an Array
const ruits = [
    {name:"apples", quantity:300},
    {name:"bananas", quantity:500},
    {name:"oranges", quantity:200},
    {name:"kiwi", quantity:150}
  ];
  
  // Callback function to Group Elements
  function myCallback({ quantity }) {
    return quantity > 200 ? "ok" : "low";
  }
  
  // Group by Quantity
  //const result = Object.groupBy(ruits, myCallback);




//  The Object.isExtensible() returns true if an object is extensible.
//const person = {firstName:"John", lastName:"Doe"};
// Prevent Extensions
//Object.preventExtensions(person);
// This will return false
//let answer = Object.isExtensible(person);




//SEAL()) Object.seal() allows modifications, but prevents additions and deletions of properties.


//The valueOf() method returns the primitive value of an object.
//If the object has no primitive value, valueOf() returns the object itself.

