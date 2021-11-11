const controller = document.querySelector('input[type=range]');
const radialProgress = document.querySelector('.RadialProgress');

const setProgress = (progress) => {
  const value = `${progress}`;
  radialProgress.style.setProperty('--progress', value)
  radialProgress.innerHTML = value
  radialProgress.setAttribute('aria-valuenow', value)
}

setProgress(controller.value)
controller.oninput = () => {
  setProgress(controller.value)
}


/*JS DEL MENU*/
'use strict';

(function() {
  var body = document.body;
  var burgerMenu = document.getElementsByClassName('b-menu')[0];
  var burgerContain = document.getElementsByClassName('b-container')[0];
  var burgerNav = document.getElementsByClassName('b-nav')[0];

  burgerMenu.addEventListener('click', function toggleClasses() {
    [body, burgerContain, burgerNav].forEach(function (el) {
      el.classList.toggle('open');
    });
  }, false);
})();

/*------------NUCLEO 3-----------*/
/*var min = "0";
var max = "40";
var step = "10";
document.getElementById('min').innerHTML = min; 
document.getElementById('max').innerHTML = max; 
document.getElementById('step').innerHTML = step; */

//variables 20km
var valor='10';

if(valor=='20'){
  var kgDia= "2.0";
  var kgMes= "62";
  var kgAño = "744";
  var kgDiaC= "4.2";
  var kgMesC= "126";
  var kgAño = "1512";
}

//tomar variables de js y utilizarlas en html mediante el id
document.getElementById('kgAño').innerHTML = kgAño; 
document.getElementById('kgMes').innerHTML = kgMes;
document.getElementById('kgDia').innerHTML = kgDia;
document.getElementById('kgAñoC').innerHTML = kgAño;
document.getElementById('kgMesC').innerHTML = kgMes;
document.getElementById('kgDiaC').innerHTML = kgDia;
document.getElementById('valor').innerHTML = valor;


window.onload = function () {

  let $botonRetroceder = document.querySelector('#retroceder');
  let $botonAvanzar = document.querySelector('#avanzar');

  // Funciones

  /**
   * Funcion que cambia la foto en la siguiente posicion
   */
  function pasarFoto() {
      if(valor=='10'){
        valor='20';
      }
      if(valor=='20'){
        valor='30';
      }
      if(valor=='30'){
        valor='40';
      }
      console.log(valor);
  }

  /**
   * Funcion que cambia la foto en la anterior posicion
   */
  function retrocederFoto() {
    if(valor=='20'){
      valor='10';
    }
    if(valor=='30'){
      valor='20';
    }
    if(valor=='40'){
      valor='30';
    }
  }
  // Eventos
  $botonAvanzar.addEventListener('click', pasarFoto);
  $botonRetroceder.addEventListener('click', retrocederFoto);
  $botonPlay.addEventListener('click', playIntervalo);
  $botonStop.addEventListener('click', stopIntervalo);
  // Iniciar
  renderizarImagen();
} 
