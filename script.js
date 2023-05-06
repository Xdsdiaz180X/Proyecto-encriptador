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
  cajaTexto.style.fontFamily = "Roboto Mono";
  cajaTexto.innerHTML = "";

  const parrafo = document.createElement("p");
  parrafo.innerHTML = textoFinal;
  cajaTexto.appendChild(parrafo);

  parrafo.style.fontSize = "20px";
  parrafo.style.color = "darkorange";
  parrafo.style.padding = "20px";
  parrafo.style.marginTop = "50px";

  const botonCopiar = document.createElement("button");
  botonCopiar.innerHTML = "Copiar";
  cajaTexto.appendChild(botonCopiar);

  botonCopiar.style.backgroundColor = "rgb(203, 202, 202)";
  botonCopiar.style.fontFamily = "Roboto Mono";
  (botonCopiar.style.padding = "20px"), "0";
  botonCopiar.style.width = "80%";
  botonCopiar.style.fontSize = "18px";
  botonCopiar.style.fontWeight = "bold";
  botonCopiar.style.border = "none";
  botonCopiar.style.borderRadius = "20px";
  (botonCopiar.style.transition = "1s"), "all";
  botonCopiar.style.cursor = "pointer";
  botonCopiar.style.marginTop = "600px";

  botonCopiar.addEventListener("mouseover", function () {
    this.style.backgroundColor = "darkgrey";
    this.style.transform = "scale(1.1)";
  });

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
var textoDesencriptacion = [];

function desencriptar() {
  let textoDes = document.getElementById("espacioTexto").value;
  const reglasInversas = {
    enter: "e",
    imes: "i",
    ai: "a",
    ober: "o",
    ufat: "u",
  };

  var palabraDesencriptada = "";
  for (let i = 0; i < textoDes.length; i++) {
    let letraEncriptada = textoDes[i];
    let letraDesencriptada = "";
    for (let reglaEncriptada in reglasInversas) {
      if (textoDes.startsWith(reglaEncriptada, i)) {
        letraDesencriptada = reglasInversas[reglaEncriptada];
        i += reglaEncriptada.length - 1;
        break;
      }
    }
    if (!letraDesencriptada) {
      letraDesencriptada = letraEncriptada;
    }
    palabraDesencriptada += letraDesencriptada;
  }

  textoDesencriptacion.push(palabraDesencriptada);
  console.log(palabraDesencriptada);
  document.querySelector("#formularioTexto").reset();

  mostrarTextoDesencriptado();
}

function mostrarTextoDesencriptado() {
  const textoFinalDesencriptado =
    textoDesencriptacion[textoDesencriptacion.length - 1];
  const cajaTextoDesencriptada = document.getElementById("cajaTexto");
  cajaTextoDesencriptada.style.fontFamily = "Roboto Mono";
  cajaTextoDesencriptada.innerHTML = "";

  const parrafoDes = document.createElement("p");
  parrafoDes.innerHTML = textoFinalDesencriptado;
  cajaTexto.appendChild(parrafoDes);

  parrafoDes.style.fontSize = "20px";
  parrafoDes.style.color = "darkorange";
  parrafoDes.style.padding = "20px";
  parrafoDes.style.marginTop = "50px";

  const botonCopiar2 = document.createElement("button");
  botonCopiar2.innerHTML = "Copiar";
  cajaTexto.appendChild(botonCopiar2);

  botonCopiar2.style.backgroundColor = "rgb(203, 202, 202)";
  botonCopiar2.style.fontFamily = "Roboto Mono";
  (botonCopiar2.style.padding = "20px"), "0";
  botonCopiar2.style.width = "80%";
  botonCopiar2.style.fontSize = "18px";
  botonCopiar2.style.fontWeight = "bold";
  botonCopiar2.style.border = "none";
  botonCopiar2.style.borderRadius = "20px";
  (botonCopiar2.style.transition = "1s"), "all";
  botonCopiar2.style.cursor = "pointer";
  botonCopiar2.style.marginTop = "600px";

  botonCopiar2.addEventListener("click", (i) => {
    const elementoTemporal = document.createElement("textarea");
    elementoTemporal.value = textoFinalDesencriptado;
    document.body.appendChild(elementoTemporal);
    elementoTemporal.select();
    document.execCommand("copy");
    document.body.removeChild(elementoTemporal);
    alert("Texto copiado");
  });
}




