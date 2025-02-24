//  Literal & Constructor

// Construrctor - Singleton
// Literal - Not singleton

//  Literal object

const mySym = Symbol("key1")

const myObj = {
    name: "Piyush",
    batch: 2024,
    [mySym]: "key1",
    email: "piyush@gmail.com",
    gf: [10,24]

}

// console.log(myObj.name);
// console.log(myObj.batch);
// console.log(myObj["name"]);
// console.log(myObj[mySym]);

// console.log(myObj);

// myObj.email = "piyush15@gmail.com"

// console.log(myObj["email"]);

// Object.freeze(myObj)

// myObj.email = "piyush51@gmail.com"

myObj.greeting = function(){
    console.log("Hello world");
    
}

myObj.greetingTwo = function(){
    console.log(`Hello Objects.This is ${this.name}`);
    
}

console.log(myObj.greeting);
console.log(myObj.greeting());

// [Function (anonymous)] - .greeting one output- we have only got function reference and fn. hasnt been executed.
// Hello world
// undefined

console.log(myObj.greetingTwo());


