document.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
 const backgroundMusic = document.getElementById("background-music");
backgroundMusic.volume = 0.3; 
backgroundMusic.play();
}, 1000);
});
const nameInput = document.getElementById("name");
const numberInput = document.getElementById("number");
const foodChoiceSelect = document.getElementById("food-choice");
const additionalInfoTextarea = document.getElementById("additional-info");
const backgroundMusic = document.getElementById("background-music");
const tableBody = document.querySelector("#table tbody");
let rowCount = 1; 


const volume = 0.3;
backgroundMusic.volume = volume;

function openPopup() {
  document.querySelector(".popup").style.display = "block";
  document
    .querySelector(".popup")
    .classList.add("animate__animated", "animate__fadeIn");
}
function closePopup() {
  document.querySelector(".popup").style.display = "none";
  document
    .querySelector(".popup")
    .classList.add("animate__animated", "animate__flip");
}

document.querySelector(".btn-rsvp").addEventListener("click", openPopup);

function agregarOpcion() {
  alert("Opción agregada"+ nameInput.value + " escogio el plato " +foodChoiceSelect.value);
  const name = nameInput.value;
  const foodChoice = foodChoiceSelect.options[foodChoiceSelect.selectedIndex].text;

  const newRow = `
  <tr>
    <td>${rowCount}</td>
    <td>${name}</td>
    <td>${foodChoice}</td>
    <td><button type="button" onclick="removerFila(this)">Remover</button></td>
  </tr>
`;
tableBody.insertAdjacentHTML("beforeend", newRow);

// Incrementar el contador de filas para el índice
rowCount++;

// Limpiar los campos del formulario después de agregar la opción a la tabla
nameInput.value = "";
numberInput.value = "";
foodChoiceSelect.selectedIndex = 0;
}

function removerFila(button) {
  const row = button.parentNode.parentNode;
  row.remove();
}



function limpiar(){
  nameInput.value = "";
  numberInput.value = "";
  foodChoiceSelect.selectedIndex = 0;
}
 
function onSubmitForm(event) {
  event.preventDefault();

  // ... Aquí puedes agregar la lógica para enviar el formulario ...
}

// Asociar la función onSubmitForm al evento "submit" del formulario
const form = document.querySelector("form");
form.addEventListener("submit", onSubmitForm);
