const requestURL = "https://brotherblazzard.github.io/canvas-content/fruit.json";
let drinks = [];

async function fetchFruitApi() {
  try {
    const response = await fetch(requestURL);
    if (response.ok) {
      const data = await response.json();
      displayFruits(data);
    } else {
      throw Error(await response.text());
    }
  } catch (error) {
    console.log(error);
  }
}

fetchFruitApi();

function displayFruits(content) {

  // Get queries of 3 select elements from html
  let select1 = document.querySelector("#select1");
  let select2 = document.querySelector("#select2");
  let select3 = document.querySelector("#select3");

  // Loop through Object and add each fruit name to 3 <select> elements
  for (let i = 0; i < content.length; i++) {
    let option1 = document.createElement("option");
    option1.textContent = content[i].name;
    option1.value = content[i].name;
    select1.add(option1);

    let option2 = document.createElement("option");
    option2.textContent = content[i].name;
    option2.value = content[i].name;
    select2.add(option2);

    let option3 = document.createElement("option");
    option3.textContent = content[i].name;
    option3.value = content[i].name;
    select3.add(option3);
  }
}

let button = document.getElementById("submit");

button.addEventListener('click', displayOrder);

function displayOrder(event) {

  event.preventDefault();

  // Get input values from form
  let name = document.getElementById("fname").value;
  let email = document.getElementById("email").value;
  let phone = document.getElementById("phone").value;
  let fruit1 = document.getElementById("select1").value;
  let fruit2 = document.getElementById("select2").value;
  let fruit3 = document.getElementById("select3").value;
  let request = document.getElementById("special").value;
  let output = document.querySelector("#output");
  const date = new Date();

  // Store input values in object
  const drink = {
    name: name,
    email: email,
    phone: phone,
    option1: fruit1,
    option2: fruit2,
    option3: fruit3,
    request: request,
    carbohydrates: 0,
    protein: 0,
    fat: 0,
    sugar: 0,
    calories: 0
  };

  // Variable for modified date format
  let dateFormat = date.toLocaleString("en-US", {
    month: "2-digit", day: "2-digit", year: "numeric"
  });

  drinks.push(drink);

  // Add input values to output area
  output.innerHTML = `<p>Order Submitted! Details:<br>
  First Name: ${name}<br>
  Email: ${email}<br>
  Phone Number: ${phone}<br>
  Fruit Selections: ${fruit1}, ${fruit2}, ${fruit3}<br>
  Request: ${request}<br>
  Date: ${dateFormat}</p>
  <p>Carbs: ${drink.carbohydrates}<br>
  Protein: ${drink.protein}<br>
  Fat: ${drink.fat}<br>
  Sugar: ${drink.sugar}<br>
  Calories: ${drink.calories}</p>`;

  // Locally store data in drinks variable
  localStorage.setItem("drinks", JSON.stringify(drinks));
}