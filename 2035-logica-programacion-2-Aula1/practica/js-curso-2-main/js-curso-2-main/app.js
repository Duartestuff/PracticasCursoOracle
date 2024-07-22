let titulo = document.querySelector("h1");
titulo.innerText = 'Hora del Desafio';

function botonClickAlert() {
    alert('El botón fue clicado');
}

    
let ciudadBrasil;  

function nombreDeCiudad() {

   ciudadBrasil =prompt('Nombra una ciudad de Brasil');

   alert("Estuve en "+ciudadBrasil+" y me acordé de ti");
}function yoAmoJs(){
    alert('Yo amo JS')
}

let numero1;
let numero2;
let resultado;
function suma( numero1,numero2) {
    
    numero1 = parseInt(prompt('Primer numero'));
    numero2 = parseInt(prompt('Segundo numero'));

    if (isNaN(numero1) || isNaN(numero2)) {

alert ('Por favor ingresa valores validos');

        return;
    } 

    resultado = numero1 + numero2;

    alert( 'la suma de '+numero1+' y '+numero2+' es '+resultado);
}