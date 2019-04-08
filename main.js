'use strict';

/* Juego que genera un número al azar que el jugador tiene que adivinar. El juego dará pistas acerca de si el número probado es demasiado alto o bajo, y contabilizará el número de intentos hasta que el juegador acierte. */

const button = document.querySelector('.btn');
const inputContent = document.querySelector('.input');
const randomNumber = getRandom(1, 100);


/* Generar un número aleatorio y mostrarlo en la consola */

function getRandom(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}
console.log(randomNumber);

/* Al pulsar el botón de prueba, acceder al contenido del input y mostrarlo en la consola */

function result() {
    const defaultContent = inputContent.value;
    const userNumber = parseInt(defaultContent);
    console.log(userNumber);
}

button.addEventListener('click', result);

/* Comparar el número elegido por el usuario con el número aleatorio e imprimir el feedback correspondiente */


