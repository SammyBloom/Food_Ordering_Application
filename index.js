
// Jollof Ordering Application

// variables and objects
let customer = "Ronaldo";
let food = "Jollof Rice";
let ingredients = {
    Rice: ["Ofada", "Native", "Foreign"],
    Seasoning: ["Knor", "Salt", "Onga", "Magi"],
    Tomatoes:["Fresh Tomatoes", "Tomato Paste"],
    Oil: ["King Oil", "Palm Oil"],
    Support: ["Fish", "Goat Meat", "Cow Meat", "Chicken", "Turkey"],
}
let is_business_open = true;

// Order Function
// let order = (rice_name, cooking_food) =>{
    
//     setTimeout(function(){
//         console.log(`${customer} ordered ${ingredients.Rice[rice_name]} rice`);
//         cooking_food();
//     }, 2000);
// }

// Order Function using Promises
// let order = (time, work) =>{
//     return new Promise ((resolve, reject) =>{
//         if(is_business_open){
//             setTimeout(() => {
//                 resolve(work());
//             }, time);

//         } else {
//             reject();
//         }
//     });
// }

// Cooking Function
// let cooking = () =>{

//     setTimeout(() =>{
//         console.log("Cooking has started");
        
//         setTimeout(() => {
//             console.log("Frying onions");

//             setTimeout(() => {
//                 console.log("Frying tomatoes");

//                 setTimeout(() => {
//                     console.log("Seasoning Added");

//                     setTimeout(() => {
//                         console.log("Stock water from support added");

//                         setTimeout(() => {
//                             console.log("Per-boiled rice being added to the mix");

//                             setTimeout(() => {
//                                 console.log(`Final Cooking`);

//                                 setTimeout(() => {
//                                     console.log(`${customer}'s ${ingredients.Rice[1]} rice is ready!!!`);;
//                                 }, 3000);
//                             }, 2000);
//                         }, 2000);
//                     }, 2000);
//                 }, 2000);
//             }, 2000);
//         }, 2000);
//     }, 0000);
// }

// 


// Call the Order Function
// order(1000, () => console.log(`${ingredients.Rice[0]} rice was selected`))
// .then(() => {
//     return order(1000, () => console.log('Cooking has started'));
// })
// .then(() => {
//     return order(1000, () => console.log('Frying onions'));
// })
// .catch(() => {
//     console.log("Business is closed")
// })
// .finally(() => {
//     console.log("End of service for customer")
// })


// Async using Kitchen and Time Functions
function time(s) {
    return new Promise((resolve, reject) => {
        if (is_business_open){
            setTimeout(resolve, s);
        }
        else{
            reject (console.log("Business is closed!!!"));
        }
    });
};

async function kitchen(){
    try{
        await time(2000)
        console.log('Cooking has started')

        await time(2000)
        console.log('Rice on fire')
    }
    catch(error) {
        console.log("Customer cancelled")
    }
    finally {
        console.log("Thank you for patronizing us");
    }
}

kitchen();





