/*Dada una variable que almacene la edad de una persona: 
- Si la edad es "menor" que 18 muestra por consola un mensaje indicando que la persona tiene menos de 18 años.
- Si la edad es "igual o menor" que 18 y "menor" que 45 muestra por consola un mensaje que indicando que la persona tiene entre 18 y 44 años.
- Si la edad es "igual o mayor" que 45 muestra un mensaje por consola indicando que la persona tiene 45 o mas.
*/ 

'use strict';

let age = 15;

// Si la edad es menor de 18...
if(age < 18){
    console.log('Tiene menos de 18 años, por lo tanto es menor de edad')
}

// Si la edad es "mayor o igual que" a 18 y ademas "es menor" de 45...
else if(age >= 18 && age < 45){
    console.log('La persona tiene entre 18 y 44 años')
}

// Si ninguna de las condiciones anteriores se cumplen...

else{
    console.log('La persona tiene 45 años o mas')
}