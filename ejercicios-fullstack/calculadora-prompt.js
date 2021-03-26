'use strict';

const numero_a = parseInt(prompt('Introduce el primer numero'));
const numero_b = parseInt(prompt('Introduce el segundo numero'));
const option = prompt('Selecciona el tipo de operacion: suma(+), resta(-), multiplicacion(*), division(/) y potencia(**)');


if(option === '+'){
    alert(numero_a + numero_b)
}else if(option === '-'){
    alert(numero_a - numero_b)
}else if(option === '*'){
    alert(numero_a * numero_b)
}else if(option === '/'){
    if(numero_b !== 0){
        alert('No es posible dividir entre 0')
    }
}else if(option === '**'){
    alert(numero_a ** numero_b)
}else{
    alert('No has seleccionado un tipo de operacion correcto.')
}