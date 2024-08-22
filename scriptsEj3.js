const botonGuardar = document.getElementById("botonGuardar");
const Nombre = document.getElementById("DatoNombre");
const Correo = document.getElementById("DatoCorreo");
const Contraseña = document.getElementById("DatoContraseña");

botonGuardar.addEventListener("click", verificar);

function verificar() {
  const nombre = Nombre.value.trim();
  const correo = Correo.value.trim();
  const contraseña = Contraseña.value.trim();

  if (nombre !== "" && correo !== "" && contraseña !== "") {
    Nombre.value = "";
    Correo.value = "";
    Contraseña.value = "";
    alert("Registrado Correctamente");
  } else {
    event.preventDefault();
    alert("Rellene todos los campos");
  }
}
