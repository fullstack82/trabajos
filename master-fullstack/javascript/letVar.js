'use strict';
// Uso de Var y Let;

// Prueba con Var
var numero = 40;
console.log(numero); // valor 40

if (true) {
    var numero = 30;
    console.log(numero); // Valor 30
}


console.log(numero); // Valor 30


// Prueba con let
var texto = "curso js maria pinto";
console.log(texto); // Valor maria pinto

if(true){
    let texto = "hola";
    console.log(texto) // Valor Hola // Let solo actua en el bloque(local)
}

console.log(texto) // valor maria pinto