
/*
comentario en parrafo
*/
//comentario en linea
alert('Bienvenidos al juego del número secreto');
//primero se declaran las variables
let numeroSecreto = Math.floor(Math.random() * 100 + 1);

//let numeroSecreto = Math.floor(Math.random()*10+1);
//let numeroSecreto = prompt('Jugador 1, ingresa un numero del 1 al 10');
let numeroUsuario = 0;
let intentos = 1;
let palabraFinal = 'intento';
let maximosIntentos = 50;

while (numeroSecreto != numeroUsuario) {
    numeroUsuario = parseInt(prompt('Jugador 2, Elige un número entre 1 y 100'));

    if (numeroUsuario == numeroSecreto) {
        alert("Adivinaste, lo lograste en: " + intentos + " " + palabraFinal);
    } else {
        //alert("No lo adivinaste, el numero es :" +numeroSecreto);
        if (numeroUsuario > numeroSecreto) {
            alert('El número es menor');
        } else {
            alert('El número es mayor');
        }
    }

    intentos++;
    palabraFinal = 'intentos';

    if (intentos > maximosIntentos) {
        alert('Legaste al numero maximo de intentos');
        break;
    }
}