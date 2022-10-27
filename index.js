
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

// Order Function
let order = (rice_name, cooking_food) =>{
    
    setTimeout(function(){
        console.log(`${customer} ordered ${ingredients.Rice[rice_name]} rice`);
        cooking_food();
    }, 2000);
}

// Cooking Function
let cooking = () =>{

    setTimeout(() =>{
        console.log("Cooking has started");
        
        setTimeout(() => {
            console.log("Frying onions");

            setTimeout(() => {
                console.log("Frying tomatoes");

                setTimeout(() => {
                    console.log("Seasoning Added");

                    setTimeout(() => {
                        console.log("Stock water from support added");

                        setTimeout(() => {
                            console.log("Final Cooking");

                            setTimeout(() => {
                                console.log(`${customer}'s ${ingredients.Rice[1]} rice is ready!!!`);;
                            }, 3000);
                        }, 2000);
                    }, 2000);
                }, 2000);
            }, 2000);
        }, 2000);
    }, 0000)

}

order(1, cooking);






