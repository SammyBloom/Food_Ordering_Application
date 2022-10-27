// Callback

// function one(function_two){
//     function_two();
// }

// function two(){

// }

// one(two);

// Jollof Ordering Application
// let customer = "Ronaldo";
// let food = "Jollof Rice";

// // Order
// let order = (cooking_food) =>{
//     cooking_food();
// }

// // Cooking
// let cooking = () =>{
//     console.log(`${customer} ordered ${food}`);
//     console.log(`${customer}'s ${food} is ready!!!`);
// }

// order(cooking);


let customer = "Ronaldo";
let food = "Jollof Rice";

// Order
console.log(`${customer} ordered ${food}`);

// Cooking
setTimeout(() => {
    let customer = "Ronaldo";
    let food = "Jollof Rice";
    console.log(`${customer}'s ${food} is ready!!!`);
}, 1000);

// Delivery
console.log(`The ${food} has been delivered to ${customer}`);






