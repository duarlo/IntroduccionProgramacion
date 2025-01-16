// Pregunta al usuario qué día de la semana es. Si la respuesta es "Sábado" o "Domingo", muestra "¡Buen fin de semana!". De lo contrario, muestra "¡Buena semana!".
let diasSemana = ['lunes', 'martes', 'miercoles', 'jueves', 'viernes', 'sabado','domingo'];
//console.log(diasSemana);
let entreSemana = diasSemana.slice(0, -2);
//console.log(entreSemana);
let finSemana = diasSemana.slice(-2,);
//console.log(finSemana);

// le pide al usuario que introduzca algun valor dentro de las opciones
while(true){
    let usuarioSemana=prompt('escribe un dia de la semana en minusculas  y sin acentos');
    //console.log(usuarioSemana);
    // si es fin de semana devuelve el mensaje de Buen fin de semana
    if(finSemana.includes(usuarioSemana)) {
        alert('Buen fin de semana!');
        break;
    }
    // si es entre semana devuelve el mensaje de Buena semana
    else if(entreSemana.includes(usuarioSemana)) {
        alert('Buena semana!');
        break;
    }
    // usuario tecleo de forma incorrecta
    else{
        alert('El dia de la semana no es valido');
    }
}

// función que verifica si un número ingresado por el usuario es positivo o negativo. Muestra una alerta informativa.
let typeofnumbers=(numberUser)=>
    {
        if(numberUser > 0)
        {
            messageUser = 'Es un numero positivo';
        }
        else if(numberUser < 0)
            {
            messageUser = 'Es un numero negativo';

            }
        else
        {
            messageUser = 'Es cero';
        }
        return messageUser;
    };
// introduce un valor por parte del usuario
let number = prompt('Escribe un numero');
// devuelve el numero y el tipo de numero
alert(`El ${number}, ${typeofnumbers(number)}`);

//Crea un sistema de puntuación para un juego. Si la puntuación es mayor o igual a 100, muestra "¡Felicidades, has ganado!". En caso contrario, muestra "Intentalo nuevamente para ganar."

// consite en un juego que da 4 tiros al azar que pueden ser de 0 o 50 puntos estos se guardan en una variable y si sobrepasa los 100 puntos ganas y  en caso contrario pierdes

let tiros = [];

for (let i = 0; i <4; i++) {
tiros.push(Math.floor(Math.random() * 65));
}
//console.log(tiros);
tiros.forEach((i)=> alert(`tus numeros son: ${i}`));

let puntaje = tiros.reduce((total, punto) => total + punto,0);

if (puntaje >= 100) {
    alert(`Felicidades has juntado ${puntaje}, has ganado!`);
}
else {
    alert(`Solamente juntaste ${puntaje} debes juntar al menos 100 , perdiste.`);
}

//Crea un mensaje que informe al usuario sobre el saldo de su cuenta, utilizando un template string para incluir el valor del saldo.
let balance = 125
if(balance >= 0)
{
    alert(`Tu saldo es: $${balance}`);
}
else
{
    alert('No tienes saldo');
}
//Pide al usuario que ingrese su nombre mediante un prompt. Luego, muestra una alerta de bienvenida usando ese nombre.
let yourName= null;
while(yourName == '' || yourName == null)
{
    yourName = prompt('¿Cual es tu nombre?');
}
alert(`Bienvenido, ${yourName}!`);
