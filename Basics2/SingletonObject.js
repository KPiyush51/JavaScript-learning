// singleton object

// const newuser = new Object ()

// newuser.name = "piyush"
// newuser.roll = 82
// newuser.tech = "JS"



// console.log(newuser.tech);

const obj1 = {1:"a",2:"b"}
const obj2 = {3:"c",4:"d"}
const obj3 = {4:"e", 5:"f"}

// Grouping objects
// const obj4 = Object.assign(obj1,obj2,obj3)

// console.log(obj4);

// const obj5 = {...obj1,...obj2,...obj3}

// console.log(obj5);

// const users = [
//     {
//         name:"",
//         class:""
//     }
// ]

// console.log(Object.keys(obj1));
// console.log(Object.values(obj2));
// console.log(Object.entries(obj3));


// De-structuring

const course = {
    name:"Js",
    video:"51",
    learner:"me"
}

const {video: v} = course

console.log(v);


