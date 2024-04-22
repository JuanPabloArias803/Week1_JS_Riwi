//h1 variables
const destination = prompt("Cuál es tu destino?");
const h1 = document.getElementById("h1");

//section budget variables
const total_budget = document.getElementById("h2_total_budget");
const submit_budget_btn = document.getElementById("submit_budget_btn");
const budget_quantity = document.getElementById("budget_quantity");

//section days variables
const total_days = document.getElementById("h2_total_days");
const submit_days_btn = document.getElementById("submit_days_btn");
const days_count = document.getElementById("days_count");
const day_overall = document.getElementById("day_overall");

//section travel_account variables
const h2_calculated_budget = document.getElementById("h2_calculated_budget");
const message = document.getElementById("message");
let calculated_budget = 0;

//section souvenirs variables
const h3_total_souvenirs = document.getElementById("total_souvenirs");
let total_souvenirs = 0;
const souvenir1_name = document.getElementById("souvenir1_name");
const souvenir1_price = document.getElementById("souvenir1_price");
const souvenir1_availability = document.getElementById(
  "souvenir1_availability"
);
const souvenir2_name = document.getElementById("souvenir2_name");
const souvenir2_price = document.getElementById("souvenir2_price");
const souvenir2_availability = document.getElementById(
  "souvenir2_availability"
);
const souvenir3_name = document.getElementById("souvenir3_name");
const souvenir3_price = document.getElementById("souvenir3_price");
const souvenir3_availability = document.getElementById(
  "souvenir3_availability"
);
const souvenirs_btn = document.getElementById("souvenirs_btn");

//code

h1.innerHTML = "Viajando a " + destination;

function modify_budget() {
  total_budget.innerHTML = `Presupuesto disponible: ${budget_quantity.value}`;
}

function modify_days() {
  total_days.innerHTML = `Duración en días: ${days_count.value}`;
  calculated_budget =
    parseFloat(days_count.value) * parseFloat(day_overall.value);
  h2_calculated_budget.innerHTML =
    "Para este viaje necesitas: " + calculated_budget;
}

function modify_souvenirs() {
  total_souvenirs = 0;
  if (souvenir1_availability.checked == true) {
    total_souvenirs = total_souvenirs + parseFloat(souvenir1_price.value);
  }
  if (souvenir2_availability.checked == true) {
    total_souvenirs = total_souvenirs + parseFloat(souvenir2_price.value);
  }
  if (souvenir3_availability.checked == true) {
    total_souvenirs = total_souvenirs + parseFloat(souvenir3_price.value);
  }
  console.log(
    "El precio es de tipo: " + typeof parseFloat(souvenir1_price.value)
  );
  console.log("El nombre es de tipo: " + typeof souvenir1_name.value);
  console.log(
    "La disponibilidad es de tipo: " + typeof souvenir1_availability.checked
  );
  h3_total_souvenirs.innerHTML =
    "Precio total de los souvenirs: " + total_souvenirs;
}

function calculate_real_budget() {
  let difference = 0;
  total_souvenirs = 0;
  if (souvenir1_availability.checked == true) {
    total_souvenirs = total_souvenirs + parseFloat(souvenir1_price.value);
  }
  if (souvenir2_availability.checked == true) {
    total_souvenirs = total_souvenirs + parseFloat(souvenir2_price.value);
  }
  if (souvenir3_availability.checked == true) {
    total_souvenirs = total_souvenirs + parseFloat(souvenir3_price.value);
  }
  calculated_budget =
    parseFloat(days_count.value) * parseFloat(day_overall.value) +
    total_souvenirs;
  h2_calculated_budget.innerHTML =
    "Para este viaje necesitas: " + calculated_budget;
  if (calculated_budget > parseFloat(budget_quantity.value)) {
    difference = calculated_budget - parseFloat(budget_quantity.value);
    message.innerHTML =
      "No te alcanza para realizar este viaje, te faltan " +
      difference +
      " para viajar";
    message.style.color = "red";
  } else {
    difference = parseFloat(budget_quantity.value) - calculated_budget;
    message.innerHTML =
      "Te alcanza para realizar este viaje y te sobran " +
      difference +
      " para comprar articulos extra";
    message.style.color = "green";
  }
}

submit_days_btn.addEventListener("click", modify_days);
submit_days_btn.addEventListener("click", calculate_real_budget);
submit_budget_btn.addEventListener("click", modify_budget);
submit_budget_btn.addEventListener("click", calculate_real_budget);
souvenirs_btn.addEventListener("click", modify_souvenirs);
souvenirs_btn.addEventListener("click", calculate_real_budget);
