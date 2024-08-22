const botonRealizarCambio = document.getElementById("botonRealizarCambio");
const titulo = document.getElementById("Titulo");

titulo.addEventListener("mouseover", function () {
  titulo.style.color = "blue";
});

titulo.addEventListener("mouseout", function () {
  titulo.style.color = "black";
});

botonRealizarCambio.addEventListener("click", realizarCambio);

function realizarCambio() {
  const colors = ["red", "blue", "green", "orange", "purple"];
  let num = Math.floor(Math.random() * 5);
  document.getElementById("Parrafo").style.color = colors[num];
}
