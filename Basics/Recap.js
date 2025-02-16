// data types are of 2 kind based on how memory is allocate and how they are accessed
//  Primitve - (7 types) number, string, boolean, symbol, bigint, null, undefined
//  Non Primitive - array, function, object

//  Javascript - dynamically typed because of no need to explcitly declaring datatype 


const Score  = 100
// both symbols are different
const id  = Symbol('123')           
const anotherId = Symbol('123')

// console.log(id===anotherId);

const heroes = ["abc","def","ghi"]

let myobj = {
    name: "piyush",
    age: "25",

}

let myfunc = function(){
    // console.log("hello world");
    
}
console.log(myfunc);

// console.log(typeof myfunc);
// console.log(typeof myobj);
// console.log(typeof heroes);


// *****************************************************************************

// Stack and Heap


//  Primititive (Stack)
let userId1 = "abc&gmail.com"
let userId2 = userId1
userId2 = "def@gmail.com"
//  copy of 1 is assigned to 2 so chnage in 2 will only change 2 and not 1.

console.log(userId1);
console.log(userId2);

// heap

let user1 = {
    name: "Piyush",
    Id:  "082"

}

let user2 = user1
user2.Id ="092"
//  Id will change for both the user because both had the reference of object stored in heap, so original value got changed.
console.log(user1.Id);
console.log(user2.Id);







