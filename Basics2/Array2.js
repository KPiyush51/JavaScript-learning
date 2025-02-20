let heros = new Array("captainamerica","hulk","thor")

let dc_heros = new Array("superman","aquaman","batman")

// heros.push(dc_heros)
// console.log(heros);

// console.log(heros[3][1]);

let new_heros = heros.concat(dc_heros)

// console.log(new_heros);


//  spread operator to join two or more arrays

let final_hero = [...heros, ...dc_heros]

// console.log(final_hero);


const new_array = [1,2,3,4,[5,6],7,[8,[9,10]]]

console.log(new_array.flat(Infinity));

console.log(Array.isArray("piyush"));
console.log(Array.from("Piyush"));

const name = "Piyush"
const roll = 82

console.log(Array.of(name,roll));

console.log(Array.from({name: "Piyush"}));





