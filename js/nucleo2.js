//Variables
let autoPartes = [
  document.getElementById("nucleo2__carroceria"),
  document.getElementById("nucleo2__motor"),
  document.getElementById("nucleo2__bateria"),
  document.getElementById("nucleo2__inversor"),
  document.getElementById("nucleo2__neumaticos"),
];
let nucleo2__autoElectrico = document.getElementById("nucleo2__autoElectrico");
let nucleo2__autoCombustion = document.getElementById("nucleo2__autoCombustion");

let eligioElectrico = true;
let estaActivadoItemElectrico = [false, false, false, false, false];
let estaActivadoItemCombustion = [false, false, false, false, false];

//----- Listener -----
//Seleccion de auto electrico
nucleo2__autoElectrico.onclick = function (e) {
  eligioElectrico = true;
  nucleo[2].style.backgroundColor = "#E6FBE1";
  CambiarImagenAutoPartes(autoPartes[1], "img/nucleo2/motorElectrico.svg");
  CambiarImagenAutoPartes(autoPartes[2], "img/nucleo2/bateriaElectrico.svg");
  CambiarImagenAutoPartes(autoPartes[3], "img/nucleo2/inversorElectrico.svg");
  ActulizarAutoPartesItems();
};

//Seleccion de auto a combustion
nucleo2__autoCombustion.onclick = function (e) {
  eligioElectrico = false;
  nucleo[2].style.backgroundColor = "#FFE3DF";
  CambiarImagenAutoPartes(autoPartes[1], "img/nucleo2/motorCombustion.svg");
  CambiarImagenAutoPartes(autoPartes[2], "img/nucleo2/bateriaCombustion.svg");
  CambiarImagenAutoPartes(autoPartes[3], "img/nucleo2/inversorCombustion.svg");
  ActulizarAutoPartesItems();
};

//Seleccion de items
for (let i = 0; i < autoPartes.length; i++) {
  autoPartes[i].onclick = function (e) {
    ActivarODesactivarItem(this, i);
  };
}

//----- Funciones ------
function CambiarImagenAutoPartes(elemento, ruta) {
  let imagen = elemento.getElementsByTagName("img")[0];
  imagen.src = ruta;
}

function CambiarFondoItem(item, colorElectrico, colorCombustion) {
  let fondoDelItem = item.getElementsByTagName("div")[0];
  if (eligioElectrico) {
    fondoDelItem.style.backgroundColor = colorElectrico;
  } else {
    fondoDelItem.style.backgroundColor = colorCombustion;
  }
}

function ActivarItem(item, index) {
  let iconos = item.getElementsByTagName("i");
  iconos[0].style.cssText = "display: none !important";
  iconos[1].style.cssText = "display: inline-block !important";
  CambiarFondoItem(item, "#84C374", "#84C374");

  if (eligioElectrico) estaActivadoItemElectrico[index] = true;
  else estaActivadoItemCombustion[index] = true;
}

function DesactivarItem(item, index) {
  let iconos = item.getElementsByTagName("i");
  iconos[0].style.cssText = "display: inline-block !important";
  iconos[1].style.cssText = "display: none !important";
  CambiarFondoItem(item, "#D1E8BA", "#FFCBC3");

  if (eligioElectrico) estaActivadoItemElectrico[index] = false;
  else estaActivadoItemCombustion[index] = false;
}

function ActivarODesactivarItem(elemento, index) {
  if (eligioElectrico) {
    if (!estaActivadoItemElectrico[index]) ActivarItem(elemento, index);
    else DesactivarItem(elemento, index);
  }
  if (!eligioElectrico) {
    if (!estaActivadoItemCombustion[index]) ActivarItem(elemento, index);
    else DesactivarItem(elemento, index);
  }
}

function ActulizarAutoPartesItems() {
  if (eligioElectrico == true) {
    for (let i = 0; i < autoPartes.length; i++) {
      if (estaActivadoItemElectrico[i]) ActivarItem(autoPartes[i], i);
      else DesactivarItem(autoPartes[i], i);
    }
  }
  if (eligioElectrico == false) {
    for (let i = 0; i < autoPartes.length; i++) {
      if (estaActivadoItemCombustion[i]) ActivarItem(autoPartes[i], i);
      else DesactivarItem(autoPartes[i], i);
    }
  }
}

/*






*/

/* //!PREGUNTAR A LOS PROFES. Js no esta remplazando el codigo html, si lo afecta pero no remplaza las lineas directamente
function ShowOrHide(element) {
  let mostrados = element.getElementsByClassName("mostrar");
  let ocultos = element.getElementsByClassName("ocultar");

  for (let i = 0; i < ocultos.length; i++) {
    //ocultos[i].classList.add("mostrar");
    //ocultos[i].classList.remove("ocultar");
  }
  for (let i = 0; i < mostrados.length; i++) {
    mostrados[i].classList.add("ocultar");
    //mostrados[i].classList.remove("mostrar");
  }
  console.log(mostrados);
  console.log(ocultos);
}
autoPartes.carroceria.onclick = function (e) {
  ShowOrHide(autoPartes.carroceria);
};
*/
