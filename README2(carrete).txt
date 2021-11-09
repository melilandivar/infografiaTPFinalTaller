#Como usar el carrete
A nivel de html basta con ubicar todas las etiquetas de un nucleo dentro del div correspondiente de ese nucleo. 
Dichos "div" se identifican con su propio id.

Para evitar tener que desplazarte al nucleo en el que trabajas cada vez que hagas un cambio, solo debes entrar 
"carrete.js" y cambiar el valor de la variable "nucleoActual" (linea 9) por el numero del nucleo.

Es posible que deban comentar el background-color de los nucleos en "carrete.css"

Estamos trabajando todos en un mismo html, por lo que intenten agregrar nombres de clases muy especificos, ejemplo:
<div class="nucleo1">
    <div class="nucleo1__auto">
        <div class="nucleo1__auto__ruedas">
Ese es un metodo para nombrar las clases, pero hay muchos. Si conocen otro, podemos ver cual no es mas comodo.

Para facilitar el manejo de codigo, creen un css para cada nucleo.


