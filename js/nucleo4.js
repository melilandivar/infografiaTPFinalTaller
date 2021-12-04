let ventajas = [
  document.getElementById("oculta4-1"),
  document.getElementById("oculta4-2"),
  document.getElementById("oculta4-3"),
  document.getElementById("oculta4-4"),
  document.getElementById("oculta4-5"),
  document.getElementById("oculta4-6"),
  document.getElementById("oculta4-7"),
];
let numeroDeVentajaActivo;
let eligioVentajas = true;

/*


*/

function MostrarVentaja(numeroVentaja) {
  botones = nucleo[4].getElementsByClassName("nucleo4__ventajas__numerada");

  for (let i = 0; i < ventajas.length; i++) {
    if (i == numeroVentaja - 1) {
      ventajas[i].style.display = `flex`;
      botones[i].classList.add("backgroundVerde");
    } else {
      ventajas[i].style.display = "none";
      botones[i].classList.remove("backgroundVerde");
    }
  }
}

/*
function CambiarFondoItem(item, color) {
  item.style.backgroundColor = color;
}
*/
