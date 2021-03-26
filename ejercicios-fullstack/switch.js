'use strict';
const option = 4;

// El "switch" requiere de una variable que usamos como interruptor.
// Debemos indicar esta variable entre los parentesis.

switch (option) {
    // En el caso de que "option" sea igual a 0...
    case 0:
        console.log('Es un perro');
        break;

    case 1:
        console.log('Es un gato');
        break;

    case 2 :
        console.log('Es un conejo');
        break;
    
    default:
    console.log('No se reconoce el animal');
    break;
}