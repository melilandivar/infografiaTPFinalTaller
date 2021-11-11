const controller = document.querySelector("input[type=range]");
const radialProgress = document.querySelector(".RadialProgress");

const setProgress = (progress) => {
  const value = `${progress}`;
  radialProgress.style.setProperty("--progress", value);
  radialProgress.innerHTML = value;
  radialProgress.setAttribute("aria-valuenow", value);
};

setProgress(controller.value);
controller.oninput = () => {
  setProgress(controller.value);
};

/*JS DEL MENU*/
("use strict");

(function () {
  var body = document.body;
  var burgerMenu = document.getElementsByClassName("b-menu")[0];
  var burgerContain = document.getElementsByClassName("b-container")[0];
  var burgerNav = document.getElementsByClassName("b-nav")[0];

  burgerMenu.addEventListener(
    "click",
    function toggleClasses() {
      [body, burgerContain, burgerNav].forEach(function (el) {
        el.classList.toggle("open");
      });
    },
    false
  );
})();


(function(){
var kgDia = "1.2";
var kgMes = "36";
var kgAño = "432";
var kgDiaC = "2.14";
var kgMesC = "64.2";
var kgAño = "770";
//tomar variables de js y utilizarlas en html mediante el id
document.getElementById("kgAño").innerHTML = kgAño;
document.getElementById("kgMes").innerHTML = kgMes;
document.getElementById("kgDia").innerHTML = kgDia;
document.getElementById("kgAñoC").innerHTML = kgAño;
document.getElementById("kgMesC").innerHTML = kgMesC;
document.getElementById("kgDiaC").innerHTML = kgDiaC;
})



function progreso() {
  var valor = document.getElementById("progressbar");

  if (valor.ariaValueNow == "0") {
    kgDia = "1.2";
    kgMes = "36";
    kgAño = "432";
    kgDiaC = "2.14";
    kgMesC = "64.2";
    kgAño = "770";
  }
  if (valor.ariaValueNow == "10") {
    kgDia = "1.2";
    kgMes = "36";
    kgAño = "432";
    kgDiaC = "2.14";
    kgMesC = "64.2";
    kgAño = "770";
  }
  if (valor.ariaValueNow == "20") {
    kgDia = "2.0";
    kgMes = "62";
    kgAño = "744";
    kgDiaC = "4.2";
    kgMesC = "126";
    kgAño = "1512";
  }
  if (valor.ariaValueNow == "30") {
    kgDia = "6.4";
    kgMes = "192";
    kgAño = "2034";
    kgDiaC = "3.0";
    kgMesC = "90";
    kgAño = "1080";
  }
  if (valor.ariaValueNow == "40") {
    kgDia = "8.5";
    kgMes = "255";
    kgAño = "3060";
    kgDiaC = "4.1";
    kgMesC = "123";
    kgAño = "1476";
  }
  
    //tomar variables de js y utilizarlas en html mediante el id
    document.getElementById("kgAño").innerHTML = kgAño;
    document.getElementById("kgMes").innerHTML = kgMes;
    document.getElementById("kgDia").innerHTML = kgDia;
    document.getElementById("kgAñoC").innerHTML = kgAño;
    document.getElementById("kgMesC").innerHTML = kgMesC;
    document.getElementById("kgDiaC").innerHTML = kgDiaC;

}


