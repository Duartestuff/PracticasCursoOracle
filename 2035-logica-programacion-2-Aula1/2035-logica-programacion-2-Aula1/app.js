//Document es el selector luedel "." se metodo y en lo parentesis van los parametros
let titulo = document.querySelector('h1');// esta variable es un objeto y por eso tiene metodos
// el document es un puente entre el sj y los lementos del html
titulo.innerText = 'Juego numero secreto';
//querySelector  se lecciona un elemento
let parrafo = document.querySelector('p');
parrafo.innerText = 'Indica un numero del 1 al 10';
/*
innerText: Esta propiedad define o retorna el contenido
textual de un nodo y sus descendientes.
textContent: Similar a innerText, pero no tiene en 
cuenta el estilo de CSS aplicado al texto.  
*/

//una funcion es un bloque de codigo que realizan una funcion
function intentoDeUsuario() {
    alert('click desde el boton')
    
}