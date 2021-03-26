'use strict';
const numA = 456;
const numB = 4;
const option = 0;

// Calculador IF

if(option === 0){
    console.log(numA + numB);
}else if(option === 1){
    console.log(numA - numB);
}else if(option === 2){
    console.log(numA * numB);
}else if(option === 3){
    if(numB === 0){
        console.log('No es posible dividir entre 0');
    }else{
        console.log(numA / numB)
    }
}else if(option === 4){
    console.log(numA ** numB)
}else{
    console.log('No has seleccionado un tipo de operacion correcto')
}