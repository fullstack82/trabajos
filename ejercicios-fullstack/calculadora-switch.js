/* Crea una calculadora con "Switch" que opere con dos números. La calculadora utilizará
- la variante "option" para decidir el tipo de operación a realizar.
- Debemos poder sumar, restar, multiplicar y dividir. Como bonus, debe permitir elevar el nº A a la potencia de B.
*/


'use strict';

const numA = 5;
const numB = 23;
const option = '**';


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
        // Comporbamos si "numB" es igual a 0. En ese caso la division no es posibles dado que no se puede dividir entre 0;
        if(numB === 0){
            console.log('No es posible dividir entre 0')
        }else{
            console.log(numA / numB)
        }
        break;


        case '**':
            console.log(numA ** numB);
            break;


            default: 
            console.log('No has seleccionado un tipo de operacion correcto');
            break;
    
}