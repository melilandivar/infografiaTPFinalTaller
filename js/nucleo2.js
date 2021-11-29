function openPage(pageName, elmnt, color) {
  /*
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].style.backgroundColor = "";
  }
  document.getElementById(pageName).style.display = "flex";
  elmnt.style.backgroundColor = color;
  */
}

// Get the element with id="defaultOpen" and click on it
//document.getElementById("defaultOpen").click();

/*




*/
//
//
//Edit
let autoPartes = {
  carroceria: document.getElementById("nucleo2__carroceria"),
  motor: document.getElementById("nucleo2__motor"),
  bateria: document.getElementById("nucleo2__bateria"),
  inversor: document.getElementById("nucleo2__inversor"),
  neumaticos: document.getElementById("nucleo2__neumaticos"),
};
let nucleo2__autoElectrico = document.getElementById("nucleo2__autoElectrico");
let nucleo2__autoCombustion = document.getElementById("nucleo2__autoCombustion");

function CambiarAutoPartes(elemento, ruta) {
  let imagen = elemento.getElementsByTagName("img")[0];
  imagen.src = ruta;
  console.log(imagen.src);
  //elemento.getElementsByTagName("img")[0].src = ruta;
}

nucleo2__autoElectrico.onclick = function (e) {
  nucleo[2].style.backgroundColor = "#E6FBE1";
  CambiarAutoPartes(autoPartes.motor, "img/nucleo2/motorElectrico.svg");
  CambiarAutoPartes(autoPartes.bateria, "img/nucleo2/bateriaElectrico.svg");
  CambiarAutoPartes(autoPartes.inversor, "img/nucleo2/inversorElectrico.svg");
};

nucleo2__autoCombustion.onclick = function (e) {
  nucleo[2].style.backgroundColor = "#FFE3DF";
  CambiarAutoPartes(autoPartes.motor, "img/nucleo2/motorCombustion.svg");
  CambiarAutoPartes(autoPartes.bateria, "img/nucleo2/bateriaCombustion.svg");
  CambiarAutoPartes(autoPartes.inversor, "img/nucleo2/inversorCombustion.svg");
};

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

var itemsElectrico = [false, false, false, false, false];

function ActivarItem(elemento, index) {
  let iconos = elemento.getElementsByTagName("i");
  iconos[0].style.cssText = "display: none !important";
  iconos[1].style.cssText = "display: inline-block !important";
  itemsElectrico[index] = true;
}

function DesactivarItem(elemento, index) {
  let iconos = elemento.getElementsByTagName("i");
  iconos[0].style.cssText = "display: inline-block !important";
  iconos[1].style.cssText = "display: none !important";
  itemsElectrico[index] = false;
}

function SeleccionarItem(elemento, index) {
  if (!itemsElectrico[index]) {
    ActivarItem(elemento, index);
  } else {
    DesactivarItem(elemento, index);
  }
}

autoPartes.carroceria.onclick = function (e) {
  SeleccionarItem(this, 0);
};
autoPartes.motor.onclick = function (e) {
  SeleccionarItem(this, 0);
};
autoPartes.bateria.onclick = function (e) {
  SeleccionarItem(this, 0);
};
autoPartes.inversor.onclick = function (e) {
  SeleccionarItem(this, 0);
};
autoPartes.neumaticos.onclick = function (e) {
  SeleccionarItem(this, 0);
};
