'use strict';

const numA = 10;
const numB = 789;
const option = '*';

switch (option) {
    case '+':
        console.log(numA + numB);
        break;

    case '-':
        console.log(numA - numB);
        break;

    case '*':
        console.log(numA * numB);
        break;

    case '/':
        if (numB === 0) {
            console.log('No es posible dividir entre 0')
        } else {
            console.log(numA / numB)
        }
        break;

    case '**':
        console.log(numA ** numB);
        break;

        default: 
        console.log('No has seleccionado un tipo de operacion correcto.');
        break;
}