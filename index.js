var food = ["tomato souph", “spaghetti bolognese”, “cheese pizza”, “caesar salad”];
undefined
var foodObj = {
    "tomato soup": {
        ingredients: "tomatoes",
        nutrition: "40g carbohydrates"}
    },
    "spaghetti bolognese":  {
        ingredients: "spaghetti, tomato, basil, oregano, olive oil, garlic, onion, salt, pepper",
        nutrition: "220 carbohydrates"}
    },
    "cheese pizza":  {
        ingredients: "pizza dough, tomato sauce, cheese",
        nutrition: "223 carbohydrates"}
    },
    "caesar salad":  {
        ingredients: "romaine lettuce, anchovy sauce, croutons",
        nutrition: "360 carbohydrates"}
}


        var obj = ["tomato soup", "spaghetti bolognese", "cheese pizza", "caesar salad"];
        var search = function (searchStr) {findObj = null;
                                          
    for (var key in obj) {
    if (obj.hasOwnProperty(key)) {
        for (var k in obj[key]) {
            if (obj[key].hasOwnProperty(k)) {
                if (searchStr === obj[key][k]) {
                    findObj = obj[key];
                    break;
                }
            }
        }
        if (findObj) {
            break;
        }
    }
}
return findObj;
}
  
