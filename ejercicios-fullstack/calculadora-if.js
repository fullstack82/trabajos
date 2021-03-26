'use strict';

const num_a = 18;
const num_b = 5;
const option = 0;


if(option === 0){
    console.log(num_a + num_b)
}else if(option === 1){
    console.log(num_a - num_b)
}else if(option === 2){
    console.log(num_a * num_b)
}else if(option === 3){
    // Comprobamos si "num_b" es igual a 0. En ese caso la division no es posible dado que no se puede dividir entre 0

    if(num_b === 0){
        console.log('No es posible dividir entre 0')
    }else{
        console.log(num_a / num_b)
    }
}else if(option === 4){
    console.log(num_a ** num_b)
}else{
    console.log('No has seleccionado un tipo de operacion correcto.')
}