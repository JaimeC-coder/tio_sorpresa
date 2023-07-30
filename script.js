// Obtener referencia a los elementos del formulario
const nameInput = document.getElementById("name");
const numberInput = document.getElementById("number");
const foodChoiceSelect = document.getElementById("food-choice");
const additionalInfoTextarea = document.getElementById("additional-info");
const backgroundMusic = document.getElementById("background-music");
// const name = nameInput.value;
// const number = numberInput.value;
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
  alert("Opción agregada"+ nameInput.value);
 
  // const foodChoice =
  //   foodChoiceSelect.options[foodChoiceSelect.selectedIndex].text;

  // Construir el texto a mostrar en el textarea
  const textToShow = `Nombre: ${name}\nCantidad de invitados: ${number}\nComida seleccionada: ${foodChoice}\n\n`;

  // Agregar el texto al textarea (manteniendo el contenido previo)
  additionalInfoTextarea.value += textToShow;

  // Limpiar los campos del formulario después de agregar la opción al textarea
  nameInput.value = "";
  numberInput.value = "";
  foodChoiceSelect.selectedIndex = 0;
}

// Función que se ejecuta cuando el formulario se envía
function onSubmitForm(event) {
  event.preventDefault();

  // ... Aquí puedes agregar la lógica para enviar el formulario ...
}

// Asociar la función onSubmitForm al evento "submit" del formulario
const form = document.querySelector("form");
form.addEventListener("submit", onSubmitForm);
