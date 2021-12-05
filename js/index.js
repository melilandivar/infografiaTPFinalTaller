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

/*fin js del menu*/

/* FUNCIONES NUCLEO 1*/
function agregarPlug() {
  if ((document.getElementById("plugCarga").style.display = "none")) {
    document.getElementById("plugCarga").style.display = "flex";    
    document.getElementById("infoModosDeCarga").style.display = "flex";
    document.getElementById("auto_cuerpo").style.display = "none";
    document.getElementById("auto_plug").style.display = "flex";
    document.getElementsByClassName("item1")[0].style.backgroundColor = "#84C374";
  } else if ((document.getElementById("plugCarga").style.display = "flex")) {
    document.getElementById("plugCarga").style.display = "none";
  }
}
function agregarBateria() {
  if ((document.getElementById("bateriaLitio").style.display = "none")) {
    document.getElementById("bateriaLitio").style.display = "flex";
    document.getElementById("auto_cuerpo").style.display = "none";
    document.getElementById("auto_plug").style.display = "none";
    document.getElementById("auto_plug_bateria").style.display = "flex";
    document.getElementsByClassName("item2")[0].style.backgroundColor = "#84C374";
  } else {
    document.getElementById("bateriaLitio").style.display = "none";
  }
}
function agregarMotor() {
  if ((document.getElementById("motorElectrico").style.display = "none")) {
    document.getElementById("motorElectrico").style.display = "flex";
    document.getElementById("auto_cuerpo").style.display = "none";
    document.getElementById("auto_plug").style.display = "none";
    document.getElementById("auto_plug_bateria").style.display = "none";
    document.getElementById("auto_plug_bateria_motor").style.display = "flex";
    document.getElementsByClassName("item3")[0].style.backgroundColor = "#84C374";
  } else {
    document.getElementById("motorElectrico").style.display = "none";
  }
}

/*FUNCIONES NUCLEO 2*/

function cambiarIcono() {
  if ((document.getElementById("nucleo2_icono_agregar").style.display = "flex")) {
    //si se puede agregar
    document.getElementById("nucleo2_icono_agregar").style.display = "none"; //que se elimine el de agregar
    document.getElementById("nucleo2_icono_eliminar").style.display = "flex"; //se agrega el de quitar
  } else {
    document.getElementById("nucleo2_icono_agregar").style.display = "flex"; //sino, se agrega el de agregar
    document.getElementById("nucleo2_icono_eliminar").style.display = "none"; //se quita el de eliminar
  }

  if ((document.getElementById("nucleo2_auto_grafico").style.display = "flex")) {
    document.getElementById("nucleo2_auto_grafico").style.display = "none";
    document.getElementById("nucleo2_auto_carroceria").style.display = "flex";
  } else {
    document.getElementById("nucleo2_auto_grafico").style.display = "flex";
    document.getElementById("nucleo2_auto_carroceria").style.display = "none";
  }
}

/*FIN NUCLEO 2*/