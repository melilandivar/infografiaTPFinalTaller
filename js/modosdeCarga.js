function modosDeCarga(){
  if(document.getElementById('infoModosDeCarga').style.display='flex'){
    document.getElementById('item_nucleo1').style.display='none';
    document.getElementById('item_nucleo3').style.display='none';
    document.getElementById('infoModosDeCarga').style.display='none';
    document.getElementsByClassName("nucleo1_grafico")[0].style.display='none';
    document.getElementsByClassName("item2")[0].style.display='none';
    document.getElementById('CargaLenta_nucleo1').style.display='flex';
    document.getElementById('CargaSemiRapida_nucleo1').style.display='flex';
    document.getElementById('CargaRapida_nucleo1').style.display='flex';
    document.getElementById('CargaLenta_secuencia').style.display='flex';

  } 
}

/* CARGA LENTA*/

function torreCargaLenta(){
  if(document.getElementById('itemX_Torre').style.display='flex'){
    document.getElementById('txt_torre').style.display='flex';
    document.getElementById('txt_titulo_torre').style.display='flex';
    document.getElementById('torreCargaLenta-Noseleccionada').style.display='none';
    document.getElementById('torreCargaLenta-seleccionada').style.display='flex';
    

  } 
}

function casaCargaLenta(){
  if(document.getElementById('itemX_Casa').style.display='flex'){
    document.getElementById('txt_casaCargaLenta').style.display='flex';
     document.getElementById('txt_titulo_casa').style.display='flex';
     document.getElementById('casaCargaLenta-Noseleccionada').style.display='none';
     document.getElementById('casaCargaLenta-seleccionada').style.display='flex';
   
  } 
}

function conectorCargaLenta(){
  if(document.getElementById('itemX_Conector').style.display='flex'){
    document.getElementById('txt_conectorCargaLenta').style.display='flex';
     document.getElementById('txt_titulo_conector').style.display='flex';
     document.getElementById('conectorCargaLenta-Noseleccionada').style.display='none';
     document.getElementById('conectorCargaLenta-seleccionada').style.display='flex';
  } 
}

function autoCargaLenta(){
  if(document.getElementById('itemX_CulataAuto').style.display='flex'){
    document.getElementById('txt_autoCargaLenta').style.display='flex';
     document.getElementById('txt_titulo_auto').style.display='flex';
     document.getElementById('autoCargaLenta-Noseleccionada').style.display='none';
     document.getElementById('autoCargaLenta-seleccionada').style.display='flex';
  } 
}

/* CARGA SEMIRAPIDA*/

function CargaSemiRapida(){
  if(document.getElementById('CargaSemiRapida_nucleo1').style.display='flex'){
    document.getElementById('CargaLenta_secuencia').style.display='none';
    document.getElementById('CargaSemiRapida_secuencia').style.display='flex';
   

  } 
}
function torreCargaSemiRapida(){
  if(document.getElementById('itemX_Torre').style.display='flex'){
    document.getElementById('txt_torre').style.display='flex';
    document.getElementById('txt_titulo_torre').style.display='flex';
    document.getElementById('torreCargaSemiRapida-Noseleccionada').style.display='none';
    document.getElementById('torreCargaSemiRapida-seleccionada').style.display='flex';
    

  } 
}