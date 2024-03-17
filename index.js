const btnCifrar = document.getElementById("btn_cifrar");
const btnDescifrar = document.getElementById("btn_descifrar");
const btnCopiar = document.getElementById("btn_copiar");

const cifrarTxt = document.getElementById("cifrar");
const descifrarTxt = document.getElementById("descifrar");

let cifrado = false;

// *****************************************************
// *****************************************************
// *****************************************************

btnCifrar.addEventListener("click", function () {
  const texto = cifrarTxt.value;
  if (texto.length == 0) {
    alert("Debe ingresar Texto");
  } else {
    // llamar a función para cifrar texto
    // Limpia el TextArea antes de cifrar

    cifrado = isCifrado(texto);
    console.log("btnCifrar Cifrado: " + cifrado);

    if (cifrado == false) {
      //console.log("Texto Inicial: " + texto.toLowerCase());
      descifrarTxt.value = getCifrado(texto.toLowerCase());
      cifrarTxt.value = "";
      //btnCifrar.disabled = true;
    } else {
      alert("El Texto Está Cifrado...");
    }
  }
});

btnDescifrar.addEventListener("click", function () {
  const texto = cifrarTxt.value;
  if (texto.length == 0) {
    alert("Debe ingresar Texto");
  } else {
    cifrado = isCifrado(texto);
    console.log("btnDesCifrar Cifrado: " + cifrado);
    if (cifrado == true) {
      // llamar a función para descifrar texto

      // Llamar a función Descifrar();
      let textoDescifrado = getDescifrar(texto.toLowerCase());
      descifrarTxt.value = textoDescifrado;
      cifrarTxt.value = "";
      //btnDescifrar.disabled = true;
      //btnCifrar.disabled = false;
      cifrado = false;
    } else {
      alert("El Texto Está Descifrado...");
    }
  }
});

btnCopiar.addEventListener("click", function () {
  const texto = descifrarTxt.value;
  if (texto.length == 0) {
    alert("No hay texto Cifrado");
  } else {
    copyToClipboard(descifrarTxt.textContent);
    btnDescifrar.disabled = false;
    //console.log(texto);
    //cifrarTxt.value = texto;
  }
});

function copyToClipboard() {
  descifrarTxt.select();

  try {
    //descifrarTxt.execCommand("Copy");
    document.execCommand("copy");
    //console.log("Copiado al portapapeles");
  } catch (err) {
    console.log("No se Pudo copiar al portapapeles: ", err);
  }
}

// *************************************************
//     Función para Cifrar el mensaje enviado
// *************************************************

function getCifrado(textoPlano) {
  const replaceA = /a/gi;
  const replaceE = /e/gi;
  const replaceI = /i/gi;
  const replaceO = /o/gi;
  const replaceU = /u/gi;

  let textoCifrado = "";

  cifrado = true;

  textoCifrado = textoPlano.replace(replaceE, "enter");
  textoCifrado = textoCifrado.replace(replaceI, "imes");
  textoCifrado = textoCifrado.replace(replaceA, "ai");
  textoCifrado = textoCifrado.replace(replaceO, "ober");
  textoCifrado = textoCifrado.replace(replaceU, "ufat");

  //console.log("Texto Final: " + textoCifrado);
  return textoCifrado;
}

// *************************************************
//     Función para DesCifrar el mensaje enviado
// *************************************************

function getDescifrar(textoCifrado) {
  const replaceEnter = /enter/gi;
  const replaceImes = /imes/gi;
  const replaceAi = /ai/gi;
  const replaceOber = /ober/gi;
  const replaceUfat = /ufat/gi;

  let textoDescifrado = "";

  cifrado = false;

  textoDescifrado = textoCifrado.replace(replaceEnter, "e");
  textoDescifrado = textoDescifrado.replace(replaceImes, "i");
  textoDescifrado = textoDescifrado.replace(replaceAi, "a");
  textoDescifrado = textoDescifrado.replace(replaceOber, "o");
  textoDescifrado = textoDescifrado.replace(replaceUfat, "u");

  //console.log("Salida Texto Descifrado: " + textoDescifrado);
  return textoDescifrado;
}

function isCifrado(textoContenido) {
  let vocalE = textoContenido.indexOf("enter");
  let vocalI = textoContenido.indexOf("imes");
  let vocalA = textoContenido.indexOf("ai");
  let vocalO = textoContenido.indexOf("ober");
  let vocalU = textoContenido.indexOf("ufat");

  if (vocalE > -1 || vocalA > -1 || vocalI > -1 || vocalO > -1 || vocalU > -1) {
    return true;
  }

  return false;
}
