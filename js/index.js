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
function agregarPlug(){
  if(document.getElementById('plugCarga').style.display='none'){
    document.getElementById('plugCarga').style.display='flex';
    document.getElementById('infoModosDeCarga').style.display='flex';
    document.getElementById('auto_cuerpo').style.display='none';
    document.getElementById('auto_plug').style.display='flex';
    
  } else
  if(document.getElementById('plugCarga').style.display='flex'){
    document.getElementById('plugCarga').style.display='none';
    
    
  }
  
  
}
function agregarBateria(){
  if(document.getElementById('bateriaLitio').style.display='none'){
    document.getElementById('bateriaLitio').style.display='flex';
    document.getElementById('auto_cuerpo').style.display='none';
    document.getElementById('auto_plug').style.display='none';
    document.getElementById('auto_plug_bateria').style.display='flex';
  } else {
    document.getElementById('bateriaLitio').style.display='none';
  }
}
function agregarMotor(){

  if(document.getElementById('motorElectrico').style.display='none'){
    document.getElementById('motorElectrico').style.display='flex';
    document.getElementById('auto_cuerpo').style.display='none';
    document.getElementById('auto_plug').style.display='none';
    document.getElementById('auto_plug_bateria').style.display='none';
    document.getElementById('auto_plug_bateria_motor').style.display='flex';
  } else {
    document.getElementById('motorElectrico').style.display='none';
  }
}

/*FUNCIONES NUCLEO 2*/

function cambiarIcono() {

  if(document.getElementById('nucleo2_icono_agregar').style.display='flex') { //si se puede agregar 
    document.getElementById('nucleo2_icono_agregar').style.display='none'; //que se elimine el de agregar
    document.getElementById('nucleo2_icono_eliminar').style.display='flex'; //se agrega el de quitar
  } else {
    document.getElementById('nucleo2_icono_agregar').style.display='flex'; //sino, se agrega el de agregar
    document.getElementById('nucleo2_icono_eliminar').style.display='none'; //se quita el de eliminar
  } 

  if(document.getElementById('nucleo2_auto_grafico').style.display='flex'){
    document.getElementById('nucleo2_auto_grafico').style.display='none';
    document.getElementById('nucleo2_auto_carroceria').style.display='flex';
  } else {
    document.getElementById('nucleo2_auto_grafico').style.display='flex';
    document.getElementById('nucleo2_auto_carroceria').style.display='none';

  }

 


}

/*FIN NUCLEO 2*/
/* FUNCIONES NUCLEO 3*/
(function(){
  var kgDia = "1.2";
  var kgMes = "36";
  var kgAño = "432";
  var kgDiaC = "2.14";
  var kgMesC = "64.2";
  var kgAñoC= "770";   //aca agregue una C, esta bien?
  cantidadBotellasC = "";
  cantidadBotellasE = "";
  cantidadCelularesC = "";
  cantidadCelularesE = "";
  cantidadPasajerosC = "";
  cantidadPasajerosE = "";
//tomar variables de js y utilizarlas en html mediante el id
document.getElementById("kgAño").innerHTML = kgAño;
document.getElementById("kgMes").innerHTML = kgMes;
document.getElementById("kgDia").innerHTML = kgDia;
document.getElementById("kgAñoC").innerHTML = kgAño;
document.getElementById("kgMesC").innerHTML = kgMesC;
document.getElementById("kgDiaC").innerHTML = kgDiaC;
document.getElementById("cantidadBotellasC").innerHTML = cantidadBotellasC;
document.getElementById("cantidadBotellasE").innerHTML = cantidadBotellasE;
document.getElementById("cantidadCelularesC").innerHTML = cantidadCelularesC;
document.getElementById("cantidadCelularesE").innerHTML = cantidadCelularesE;
document.getElementById("cantidadPasajerosC").innerHTML = cantidadPasajerosC;
document.getElementById("cantidadPasajerosE").innerHTML = cantidadPasajerosE;
})



function progreso() {
  var valor = document.getElementById("progressbar");
  console.log("progreso nucleo 3");
  if (valor.ariaValueNow == "0") {
    kgDia = "0kg";
    kgMes = "0kg";
    kgAño = "0kg";
    kgDiaC = "0kg";
    kgMesC = "0kg";
    kgAñoC = "0kg";
    cantidadBotellasC = "0";
    cantidadBotellasE = "0";
    cantidadCelularesC = "0";
    cantidadCelularesE = "0";
    cantidadPasajerosC = "0";
    cantidadPasajerosE = "0";
  }
  if (valor.ariaValueNow == "30") {
    kgDia = "6.4kg";
    kgMes = "192kg";
    kgAño = "2034kg";
    kgDiaC = "3.0kg";
    kgMesC = "90kg";
    kgAñoC = "1080kg";
    cantidadBotellasC = "55";
    cantidadBotellasE = "26";
    cantidadCelularesC = "03";
    cantidadCelularesE = "1.5";
    cantidadPasajerosC = "15";
    cantidadPasajerosE = "07";
  }
  if (valor.ariaValueNow == "60") {
    kgDia = "6.0kg";
    kgMes = "180kg";
    kgAño = "2160kg";
    kgDiaC = "12.8kg";
    kgMesC = "384kg";
    kgAñoC = "4608kg";
    cantidadBotellasC = "110";
    cantidadBotellasE = "52";
    cantidadCelularesC = "06";
    cantidadCelularesE = "03";
    cantidadPasajerosC = "30";
    cantidadPasajerosE = "14";
  }
  if (valor.ariaValueNow == "90") {
    kgDia = "9.0kg";
    kgMes = "270kg";
    kgAño = "3240kg";
    kgDiaC = "19.2kg";
    kgMesC = "576kg";
    kgAñoC = "6921kg";
    cantidadBotellasC = "165";
    cantidadBotellasE = "78";
    cantidadCelularesC = "09";
    cantidadCelularesE = "4.5";
    cantidadPasajerosC = "45";
    cantidadPasajerosE = "21";
  }
  if (valor.ariaValueNow == "120") {
    kgDia = "12kg";
    kgMes = "360kg";
    kgAño = "4302kg";
    kgDiaC = "25.6kg";
    kgMesC = "768kg";
    kgAñoC = "9216kg";
    cantidadBotellasC = "220";
    cantidadBotellasE = "104";
    cantidadCelularesC = "12";
    cantidadCelularesE = "06";
    cantidadPasajerosC = "60";
    cantidadPasajerosE = "28";
  }
  
    //tomar variables de js y utilizarlas en html mediante el id
    document.getElementById("kgAño").innerHTML = kgAño;
    document.getElementById("kgMes").innerHTML = kgMes;
    document.getElementById("kgDia").innerHTML = kgDia;
    document.getElementById("kgAñoC").innerHTML = kgAñoC;
    document.getElementById("kgMesC").innerHTML = kgMesC;
    document.getElementById("kgDiaC").innerHTML = kgDiaC;
    document.getElementById("cantidadBotellasC").innerHTML = cantidadBotellasC;
    document.getElementById("cantidadBotellasE").innerHTML = cantidadBotellasE;
    document.getElementById("cantidadCelularesC").innerHTML = cantidadCelularesC;
    document.getElementById("cantidadCelularesE").innerHTML = cantidadCelularesE;
    document.getElementById("cantidadPasajerosC").innerHTML = cantidadPasajerosC;
    document.getElementById("cantidadPasajerosE").innerHTML = cantidadPasajerosE;

}
/*FIN NUCLEO 3*/

/*FUNCIONES NUCLEO 4*/

function mostrarItem1() {
  console.log("lementso");

  if(document.getElementById('oculta4-1').style.display='none') { //si se puede agregar 
    document.getElementById('oculta4-1').style.display='flex';
    document.getElementById('oculta4-2').style.display='none';
    document.getElementById('oculta4-3').style.display='none';
    document.getElementById('oculta4-4').style.display='none';
    document.getElementById('oculta4-5').style.display='none';
    document.getElementById('oculta4-6').style.display='none';
    document.getElementById('oculta4-7').style.display='none'; 
     
  } 
 
}

function mostrarItem2() {
  console.log("lementso");

  if(document.getElementById('oculta4-2').style.display='none') { //si se puede agregar 
    document.getElementById('oculta4-2').style.display='flex'; 
    document.getElementById('oculta4-1').style.display='none';
    document.getElementById('oculta4-3').style.display='none';
    document.getElementById('oculta4-4').style.display='none';
    document.getElementById('oculta4-5').style.display='none';
    document.getElementById('oculta4-6').style.display='none';
    document.getElementById('oculta4-7').style.display='none';
     
  } 
 
}
function mostrarItem3() {
  console.log("lementso");

  if(document.getElementById('oculta4-3').style.display='none') { //si se puede agregar 
    document.getElementById('oculta4-3').style.display='flex'; 
    document.getElementById('oculta4-1').style.display='none';
    document.getElementById('oculta4-2').style.display='none';
    document.getElementById('oculta4-4').style.display='none';
    document.getElementById('oculta4-5').style.display='none';
    document.getElementById('oculta4-6').style.display='none';
    document.getElementById('oculta4-7').style.display='none';
     
  } 
 
}
function mostrarItem4() {
  console.log("lementso");

  if(document.getElementById('oculta4-4').style.display='none') { //si se puede agregar 
    document.getElementById('oculta4-4').style.display='flex'; 
    document.getElementById('oculta4-1').style.display='none';
    document.getElementById('oculta4-2').style.display='none';
    document.getElementById('oculta4-3').style.display='none';
    document.getElementById('oculta4-5').style.display='none';
    document.getElementById('oculta4-6').style.display='none';
    document.getElementById('oculta4-7').style.display='none';
     
  } 
 
}
function mostrarItem5() {
  console.log("lementso");

  if(document.getElementById('oculta4-5').style.display='none') { //si se puede agregar 
    document.getElementById('oculta4-5').style.display='flex'; 
    document.getElementById('oculta4-1').style.display='none';
    document.getElementById('oculta4-2').style.display='none';
    document.getElementById('oculta4-3').style.display='none';
    document.getElementById('oculta4-4').style.display='none';
    document.getElementById('oculta4-6').style.display='none';
    document.getElementById('oculta4-7').style.display='none';
     
  } 
 
}
function mostrarItem6() {
  console.log("lementso");

  if(document.getElementById('oculta4-6').style.display='none') { //si se puede agregar 
    document.getElementById('oculta4-6').style.display='flex'; 
    document.getElementById('oculta4-1').style.display='none';
    document.getElementById('oculta4-2').style.display='none';
    document.getElementById('oculta4-3').style.display='none';
    document.getElementById('oculta4-4').style.display='none';
    document.getElementById('oculta4-5').style.display='none';
    document.getElementById('oculta4-7').style.display='none';
     
  } 
 
}
function mostrarItem7() {
  console.log("lementso");

  if(document.getElementById('oculta4-7').style.display='none') { //si se puede agregar 
    document.getElementById('oculta4-7').style.display='flex'; 
    document.getElementById('oculta4-1').style.display='none';
    document.getElementById('oculta4-2').style.display='none';
    document.getElementById('oculta4-3').style.display='none';
    document.getElementById('oculta4-4').style.display='none';
    document.getElementById('oculta4-5').style.display='none';
    document.getElementById('oculta4-6').style.display='none';
     
  } 
 
}

/*FIN NUCLEO 4*/
 