// begin with a blank/new order
var order = "one za";


// build a function to ask questions

function question(item) {
  // your code goes here
  var answerInput = prompt("do you want " + item + "?");
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
question("cheese");
question("pepperoni");
question("sausage");
question("ground beef");
question("bacon");
question("more bacon");
question("even more bacon");
question("green peppers");
question("onions");
question("spinach");
question("mushrooms");
question("BBQ sauce");
question("tomota sauce");
question("anchovies");
}


// output their order
document.write("<p>You ordered: " + order + "<p>");
