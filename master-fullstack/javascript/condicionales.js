'use strict';

//  Condicion If

var edad = 38;
var nombre = "Maria";

if (edad >= 18) {
    // Es mayor de edad
    console.log(nombre + " tiene " + edad + " años, es mayor de edad");



    if (edad >= 33) {
        console.log('Todavia eres milenial');
    } else if (edad >= 70) {
        console.log('Eres anciano')
    } else {
        console.log('Ya no eres milenial')
    }
} else {
    // Es menor de edad
    console.log(nombre + " tiene " + edad + " años, es MENOR de edad");
};

// Operadores logicos

var year = 2021;

// Negacion
if (year != 2016) {
    console.log("Estamos en la era actual")
}
else {
    console.log("Estamos en la era postmoderna");
};


// And 
if(year >= 2000 && year <= 2022 && year != 2018){
    console.log("Estamos en la era actual")
}else{
    console.log("Estamos en la era postmoderna")
}


// Or
if(year == 2008 || (year >= 2018 && year == 2028)){
    console.log("El año acaba en 8")
}else{
    console.log("año no registrado")
}