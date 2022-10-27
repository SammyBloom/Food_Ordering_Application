
// Jollof Ordering Application
let customer = "Ronaldo";
let food = "Jollof Rice";
let ingredients = {
    Rice: ["Ofada", "Native", "Foreign"],
    Seasoning: ["Knor", "Salt", "Onga", "Magi"],
    Tomatoes:[],
    Oil: [],
    Support: ["Fish", "Goat Meat", "Cow Meat", "Chicken", "Turkey"],
}

// Order
let order = (rice_name, cooking_food) =>{
    
    setTimeout(function(){
        console.log(`${customer} ordered ${ingredients.Rice[rice_name]} rice`);
        cooking_food();
    }, 2000);
}

// Cooking
let cooking = () =>{

    setTimeout(() =>{
        console.log("Cooking has started");
        
        setTimeout(() => {
            console.log("Frying onions");

            setTimeout(() => {
                console.log("Frying tomatoes");

                setTimeout(() => {
                    console.log("Add seasoning");

                    setTimeout(() => {
                        console.log("Add stock water");

                        setTimeout(() => {
                            console.log("Final Cooking");

                            setTimeout(() => {
                                console.log(`${customer}'s ${food} is ready!!!`);;
                            }, 3000);
                        }, 2000);
                    }, 2000);
                }, 2000);
            }, 2000);
        }, 2000);
    }, 0000)

}

order(0, cooking);






