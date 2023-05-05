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

  textoDesencriptacion.push(palabraDesencriptada)
  console.log(palabraDesencriptada);
  document.querySelector("#formularioTexto").reset();
  
  mostrarTextoDesencriptado()
}

function mostrarTextoDesencriptado() {
  const textoFinalDesencriptado = textoDesencriptacion[textoDesencriptacion.length - 1];
  const cajaTextoDesencriptada = document.getElementById("cajaTexto");
  cajaTextoDesencriptada.innerHTML = textoFinalDesencriptado;

  const botonCopiar2 = document.createElement("button");
  botonCopiar2.innerHTML = "Copiar";
  cajaTexto.appendChild(botonCopiar2);

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




