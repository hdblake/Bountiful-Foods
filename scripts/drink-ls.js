// Locallly store number of drinks ordered
let drinkDisplay = document.querySelector(".total-orders");
let drinksOrdered = localStorage.getItem("drinks");

if (drinksOrdered) {
  drinks = JSON.parse(drinksOrdered);
  drinkDisplay.innerHTML = `Drinks Ordered: ${drinks.length}`;
} else {
  drinkDisplay.innerHTML = `Drinks Ordered: 0`;
}