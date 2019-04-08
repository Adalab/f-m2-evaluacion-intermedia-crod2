'use strict';

/* Juego que genera un número al azar que el jugador tiene que adivinar. El juego dará pistas acerca de si el número probado es demasiado alto o bajo, y contabilizará el número de intentos hasta que el juegador acierte. */

/* Generar un número aleatorio y mostrarlo en la consola */

function getRandom(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

console.log(getRandom(1, 100));