var textoEncriptacion = [];

function encriptar() {
  let texto = document.getElementById("espacioTexto").value;
  const reglas = {
    e: "enter",
    i: "imes",
    a: "ai",
    o: "ober",
    u: "ufat",
  };

  var textoEncriptado = "";
  for (let i = 0; i < texto.length; i++) {
    let letra = texto[i];
    let letraEncriptada = reglas[letra] || letra;
    textoEncriptado += letraEncriptada;
  }
  textoEncriptacion.push(textoEncriptado);
  console.log(textoEncriptacion);
  document.querySelector("#formularioTexto").reset();

  mostrarTextoEncriptado();
}

function mostrarTextoEncriptado() {
  const textoFinal = textoEncriptacion[textoEncriptacion.length - 1];
  document.getElementById("cajaTexto").innerHTML = textoFinal;
  const espacioBoton = document.querySelector("#cajaTexto");
  let botonCopiar = document.createElement("button");
  const textoBoton = document.createTextNode("Copiar");
  botonCopiar.appendChild(textoBoton);
  botonCopiar.setAttribute("id", "botonCopiar");
  espacioBoton.appendChild(botonCopiar);
  const boton = document.querySelector("#botonCopiar");

  botonCopiar.addEventListener("click", function () {
    const texto = document.getElementById("cajaTexto").textContent;

    navigator.clipboard
      .writeText(texto)
      .then(() => {
        alert("¡Texto copiado al portapapeles!");
      })
      .catch((error) => {
        alert(`Error al copiar el texto: ${error}`);
      });
  });
}


