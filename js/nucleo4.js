let ventajasContainer = document.getElementById("ventajas-container");
let desventajasContainer = document.getElementById("desventajas-container");

let ventajas = [
  document.getElementById("ventaja1"),
  document.getElementById("ventaja2"),
  document.getElementById("ventaja3"),
  document.getElementById("ventaja4"),
  document.getElementById("ventaja5"),
  document.getElementById("ventaja6"),
  document.getElementById("ventaja7"),
];
let desventajas = [
  document.getElementById("desventaja1"),
  document.getElementById("desventaja2"),
  document.getElementById("desventaja3"),
  document.getElementById("desventaja4"),
];

let eligioVentajas = true;
let numeroVentajaActivo = 1;
let numeroDesentajaActivo = 1;
let ventajasBoton = document.getElementById("nucleo4__ventajas");
let desventajasBoton = document.getElementById("nucleo4__desventajas");

/*


*/
/* LISTENERS */
//Seleccion de auto electrico
ventajasBoton.onclick = function (e) {
  eligioVentajas = true;
  nucleo[4].style.backgroundColor = "#E6FBE1";
  nucleo[4].style.backgroundImage = "url('img/nucleo4/fondo-ventajas.svg')";

  ventajasContainer.classList.remove("ocultar");
  desventajasContainer.classList.add("ocultar");
  for (let i = 0; i < desventajas.length; i++) {
    desventajas[i].style.display = "none"; //Ocultar desventaja
  }
  ventajas[numeroVentajaActivo].style.display = `flex`;
};

desventajasBoton.onclick = function (e) {
  eligioVentajas = false;
  nucleo[4].style.backgroundColor = "#FFE3DF";
  nucleo[4].style.backgroundImage = "url('img/nucleo4/fondo-desventajas.svg')";

  ventajasContainer.classList.add("ocultar");
  desventajasContainer.classList.remove("ocultar");
  for (let i = 0; i < ventajas.length; i++) {
    ventajas[i].style.display = "none";
  }
  desventajas[numeroVentajaActivo].style.display = `flex`;
};

/*


*/
/*Funciones*/
function MostrarVentaja(numeroVentaja) {
  botones = ventajasContainer.getElementsByClassName("nucleo4__opciones__item");

  for (let i = 0; i < ventajas.length; i++) {
    if (i == numeroVentaja - 1) {
      ventajas[i].style.display = `flex`;
      botones[i].classList.add("item-verde");
      numeroVentajaActivo = i;
      console.log(numeroVentajaActivo);
    } else {
      ventajas[i].style.display = "none";
      botones[i].classList.remove("item-verde");
    }
  }
}

function MostrarDesventaja(numeroVentaja) {
  botones = desventajasContainer.getElementsByClassName("nucleo4__opciones__item");

  for (let i = 0; i < desventajas.length; i++) {
    if (i == numeroVentaja - 1) {
      desventajas[i].style.display = `flex`;
      botones[i].classList.add("item-rojo");
      numeroDesventajaActivo = i;
      console.log(numeroDesventajaActivo);
    } else {
      desventajas[i].style.display = "none";
      botones[i].classList.remove("item-rojo");
    }
  }
}
