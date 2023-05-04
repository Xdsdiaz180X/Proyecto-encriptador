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
  const cajaTexto = document.getElementById("cajaTexto");
  cajaTexto.innerHTML = textoFinal;

  const botonCopiar = document.createElement("button");
  botonCopiar.innerHTML = "Copiar";
  cajaTexto.appendChild(botonCopiar);

  botonCopiar.addEventListener("click", (e) => {
    const elementoTemporal = document.createElement("textarea");
    elementoTemporal.value = textoFinal;
    document.body.appendChild(elementoTemporal);
    elementoTemporal.select();
    document.execCommand("copy");
    document.body.removeChild(elementoTemporal);
    alert("Texto copiado");
  });
}





