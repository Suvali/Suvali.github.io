// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // For Chrome, Safari and Opera 
    document.documentElement.scrollTop = 0; // For IE and Firefox
}
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

