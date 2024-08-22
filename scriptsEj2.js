const botonAgregar = document.getElementById("botonAgregar");
const texto = document.getElementById("Texto");
const lista = document.getElementById("lista");

botonAgregar.addEventListener("click", Agregar);

function Agregar() {
  const textoAgregar = document.getElementById("Texto").value;
  let nuevoelemento = document.createElement("li");
  let textoNuevo = document.createTextNode(textoAgregar);

  nuevoelemento.appendChild(textoNuevo);
  document.getElementById("lista").appendChild(nuevoelemento);
  nuevoelemento.addEventListener("dblclick", function () {
    nuevoelemento.remove();
  });
  texto.value = "";
}
