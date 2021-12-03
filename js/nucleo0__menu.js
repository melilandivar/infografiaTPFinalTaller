/* NUCLEO 0 */
let botonIntroduccion = document.getElementById("nucleo0__boton");
botonIntroduccion.onclick = function (e) {
  let _elemento = document.getElementById("nucleo0__auto");
  _elemento.classList.add("nucleo0__auto-animado");
};

/* MENU */
function OcultarMenu(numNucleo) {
  let menu = document.getElementById("menu");
  let elementosAbiertos = document.getElementsByClassName("open");

  for (let i = 0; i < elementosAbiertos.length; i++) {
    elementosAbiertos[i].classList.remove("open");
  }
  menu.classList.remove("open");

  nucleoActual = numNucleo;
  carrete.style.left = nucleoPositionX[numNucleo] + "px";
}
