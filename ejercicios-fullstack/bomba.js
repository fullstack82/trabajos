/* Desactiva la bomba...Llego el momento de poner en practica todo lo aprendido hasta ahora para
- desactivar la bomba.
- Tranquilos, no tenemos que ser expertos en explosivos.
- Se trata de crear un juego en el que damos al usuario 5 intentos para tratar de desactivar la bomba.

Estos son los pasos que debes seguir para tratar de conseguir el objetivo:
- Generar un numero aleatorio del 1 al 10. Existe una funcion en Javascript que nos permite generar un nº al azar, ¿por que no investigas un poco?
- Una vez hayamos generado el numero de desactivacion daremos al usuario un total de 5 intentos para tratar de averiguar el numero en cuestion;
- Si acierta detendremos el bucle y mostramos un mensaje que indica que la bomba ha sido desactivada. De lo contrario indicamos que la bomba a explotado.
*/ 

// Generamos un numero aleatorio
const password = Math.ceil(Math.random() * 3);



// Damos al usuario 5 intentos
for(let i = 0; i < 5; i++){

    // Permitimos al usuario insertar un numero
    const userPassword = parseInt(prompt('Inserte la contraseña'));


    // Comprobamos si el usuario a acertado
    if(userPassword === password){
        alert('Vives un dia más');
        break;
    }

    // Si el usuarion ha agotado los intentos y no ha acertado
    if(i === 4 && userPassword !== password){
        alert('Booooom')
    }
}