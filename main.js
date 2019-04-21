'use strict';

/* Juego que genera un número al azar que el jugador tiene que adivinar. El juego dará pistas acerca de si el número probado es demasiado alto o bajo, y contabilizará el número de intentos hasta que el juegador acierte. */

const inputContent = document.querySelector('.input');
const button = document.querySelector('.btn');
const text = document.querySelector('.subtext');
const randomNumber = getRandom(1, 100);
const counter = document.querySelector('.tries');
let i = 0;

/* Generar un número aleatorio y mostrarlo en la consola */

function getRandom(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}
console.log(randomNumber);

/* Al pulsar el botón de prueba, acceder al contenido del input y mostrarlo en la consola */
function game() {
    const userNumber = parseInt(inputContent.value);
/* Comparar el número elegido por el usuario con el número aleatorio e imprimir el feedback correspondiente */
    if (randomNumber === userNumber){
        text.innerHTML = "¡HAS GANADO, CAMPEONA!";
    } else if (randomNumber > userNumber) {
        text.innerHTML = "Tu número es demasiado bajo";
        counter.innerHTML = i;
        i = i + 1;
    } else (randomNumber < userNumber) 
        text.innerHTML = "Tu número es demasiado alto";
        counter.innerHTML = i;
        i = i + 1;
    }

/* Para escribir el contador: 
let i = 0, crea un contador y lo inicializa al 0
y dentro del if especifico que counter debe pintarme i porque representa los intentos del contador
tb añado i = i+1 para que continúe la suma de los intentos realizados
*/

button.addEventListener('click', game);
