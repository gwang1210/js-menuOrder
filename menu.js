// begin with a blank/new order
var order = "one za";


// build a function to ask questions

function question(ask, item) {
  // your code goes here
  var answerInput = prompt("do you want" + item);
  if ( answerInput.toUpperCase() === "YES" ) {
order = order + " with " + item + " ,";   
} else if ( answerInput.toUpperCase() === "NO" ) {
order = order + " no " + item  + " ,"; 
}
}

// call the QUESTION function with the order options
var pizza = prompt("Suh dude. Welcome to the Za Shack! Would you like to order a za, bruh?");

if ( pizza.toUpperCase() === 'NO' ) {
order = "no za"
} else if ( pizza.toUpperCase() === 'YES' ) {
question("do you want", "cheese");
question("do you want", "pepperoni");
question("do you want", "sausage");
question("do you want", "ground beef");
question("do you want", "bacon");
question("do you want", "more bacon");
question("do you want", "even more bacon");
question("do you want", "green peppers");
question("do you want", "onions");
question("do you want", "spinach");
question("do you want", "mushrooms");
question("do you want", "BBQ sauce");
question("do you want", "tomota sauce");
question("do you want", "anchovies");
}


// output their order
document.write("<p>You ordered: " + order + "<p>");
