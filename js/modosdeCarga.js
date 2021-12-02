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
function CargaLenta(){
  if(document.getElementById('CargaLenta_nucleo1').style.display='flex'){
    document.getElementById('CargaLenta_secuencia').style.display='flex';       
    document.getElementById('CargaSemiRapida_secuencia').style.display='none';
    document.getElementById('CargaRapida_secuencia').style.display='none';      
  } 
}

function torreCargaLenta(){
  if(document.getElementById('itemX_Torre').style.display='flex'){
    document.getElementById('txt_torre').style.display='flex';
    document.getElementById('txt_titulo_torre').style.display='flex';
    document.getElementById('torreCargaLenta-Noseleccionada').style.display='none';
    document.getElementById('torreCargaLenta-seleccionada').style.display='flex';
    document.getElementById('progreso').style.display = 'flex';   
    document.getElementById('progreso').style.width = `20%`; 
  } 
}

function casaCargaLenta(){
  if(document.getElementById('itemX_Casa').style.display='flex'){
    document.getElementById('txt_casaCargaLenta').style.display='flex';
     document.getElementById('txt_titulo_casa').style.display='flex';
     document.getElementById('casaCargaLenta-Noseleccionada').style.display='none';
     document.getElementById('casaCargaLenta-seleccionada').style.display='flex';
     document.getElementById('progreso').style.width = `40%`;   
  } 
}

function conectorCargaLenta(){
  if(document.getElementById('itemX_Conector').style.display='flex'){
    document.getElementById('txt_conectorCargaLenta').style.display='flex';
     document.getElementById('txt_titulo_conector').style.display='flex';
     document.getElementById('conectorCargaLenta-Noseleccionada').style.display='none';
     document.getElementById('conectorCargaLenta-seleccionada').style.display='flex';
     document.getElementById('progreso').style.width = `60%`; 
  } 
}

function autoCargaLenta(){
  if(document.getElementById('itemX_CulataAuto').style.display='flex'){
    document.getElementById('txt_autoCargaLenta').style.display='flex';
     document.getElementById('txt_titulo_auto').style.display='flex';
     document.getElementById('autoCargaLenta-Noseleccionada').style.display='none';
     document.getElementById('autoCargaLenta-seleccionada').style.display='flex';
     document.getElementById('progreso').style.width = `70%`; 
  } 
}

/* CARGA SEMIRAPIDA*/

function CargaSemiRapida(){
  if(document.getElementById('CargaSemiRapida_nucleo1').style.display='flex'){
    document.getElementById('CargaLenta_secuencia').style.display='none';
    document.getElementById('CargaRapida_secuencia').style.display='none';
    document.getElementById('CargaSemiRapida_secuencia').style.display='flex';   
  } 
}
function torreCargaSemiRapida(){
  if(document.getElementById('itemX_Torre').style.display='flex'){
    document.getElementById('txt_torre_cargasemirapida').style.display='flex';
    document.getElementById('txt_titulo_torre_cargasemirapida').style.display='flex';
    document.getElementById('torreCargaSemiRapida-Noseleccionada').style.display='none';
    document.getElementById('torreCargaSemiRapida-seleccionada').style.display='flex';    
  } 
}
function casaCargaSemiRapida(){
  if(document.getElementById('itemX_Casa').style.display='flex'){
      document.getElementById('txt_titulo_casa_cargasemirapida').style.display='flex';
     document.getElementById('txt_casa_cargasemirapida').style.display='flex';
       document.getElementById('casaCargaSemiRapida-Noseleccionada').style.display='none';
    document.getElementById('casaCargaSemiRapida-seleccionada').style.display='flex';    
  } 
}
function conectorCargaSemiRapida(){
  if(document.getElementById('itemX_Conector').style.display='flex'){
    document.getElementById('txt_titulo_conector_cargasemirapida').style.display='flex';
    document.getElementById('txt_conector_cargasemirapida').style.display='flex';
       document.getElementById('conectorCargaSemiRapida-Noseleccionada').style.display='none';
    document.getElementById('conectorCargaSemiRapida-seleccionada').style.display='flex';     
  } 
}
function autoCargaSemiRapida(){
  if(document.getElementById('itemX_Auto').style.display='flex'){
    document.getElementById('txt_titulo_auto_cargasemirapida').style.display='flex';
    document.getElementById('txt_auto_cargasemirapida').style.display='flex';
       document.getElementById('autoCargaSemiRapida-Noseleccionada').style.display='none';
    document.getElementById('autoCargaSemiRapida-seleccionada').style.display='flex';     
  } 
}

/* CARGA RAPIDA*/
function CargaRapida(){
  if(document.getElementById('CargaRapida_nucleo1').style.display='flex'){
    document.getElementById('CargaLenta_secuencia').style.display='none';
    document.getElementById('CargaSemiRapida_secuencia').style.display='none';
    document.getElementById('CargaRapida_secuencia').style.display='flex';    
  } 
}
function torreCargaRapida(){
  if(document.getElementById('itemX_Torre').style.display='flex'){
    document.getElementById('txt_torre_cargarapida').style.display='flex';
    document.getElementById('txt_titulo_torre_cargarapida').style.display='flex';
    document.getElementById('torreCargaRapida-Noseleccionada').style.display='none';
    document.getElementById('torreCargaRapida-seleccionada').style.display='flex';     
  } 
}
function casaCargaRapida(){
  if(document.getElementById('itemX_Casa').style.display='flex'){
    document.getElementById('txt_casa_cargarapida').style.display='flex';
    document.getElementById('txt_titulo_casa_cargarapida').style.display='flex';
    document.getElementById('casaCargaRapida-Noseleccionada').style.display='none';
    document.getElementById('casaCargaRapida-seleccionada').style.display='flex';     
  } 
}
function conectorCargaRapida(){
  if(document.getElementById('itemX_Conector').style.display='flex'){
    document.getElementById('txt_conector_cargarapida').style.display='flex';
    document.getElementById('txt_titulo_conector_cargarapida').style.display='flex';
    document.getElementById('conectorCargaRapida-Noseleccionada').style.display='none';
    document.getElementById('conectorCargaRapida-seleccionada').style.display='flex';     
  } 
}
function autoCargaRapida(){
  if(document.getElementById('itemX_Auto').style.display='flex'){
    document.getElementById('txt_auto_cargarapida').style.display='flex';
    document.getElementById('txt_titulo_auto_cargarapida').style.display='flex';
    document.getElementById('autoCargaRapida-Noseleccionada').style.display='none';
    document.getElementById('autoCargaRapida-seleccionada').style.display='flex';     
  } 
}