//Crea un programa que utilice console.log para mostrar un mensaje de bienvenida.

let welcomeMessage:string = "Saludos bienvenido";
console.log(welcomeMessage);


//Crea una variable llamada "nombre" y asígnale tu nombre. Luego, utiliza console.log para mostrar el mensaje "¡Hola, [tu nombre]!" en la consola del navegador.

let usrName:string = "Eduardo";	
console.log(`¡Hola, ${usrName}!`);


//Crea una variable llamada "nombre" y asígnale tu nombre. Luego, utiliza alert para mostrar el mensaje "¡Hola, [tu nombre]!".

alert(`¡Hola, ${usrName}!`);

// Utiliza prompt y haz la siguiente pregunta: ¿Cuál es el lenguaje de programación que más te gusta?. Luego, almacena la respuesta en una variable y muestra la respuesta en la consola del navegador.

let favoriteLanguage = prompt("Cual es tu lenguaje de progrmamación favorito");
console.log(favoriteLanguage);


// Crea una variable llamada "valor1" y otra llamada "valor2", asignándoles valores numéricos de tu elección. Luego, realiza la suma de estos dos valores y almacena el resultado en una tercera variable llamada "resultado". Utiliza console.log para mostrar el mensaje "La suma de [valor1] y [valor2] es igual a [resultado]." en la consola.

alert('Vamos a sumar dos numeros');
let valor1: number = parseFloat(prompt("Escribe un valor") ?? "0");
let valor2: number = parseFloat(prompt("Escribe otro valor") ?? "0");
let resultadoSuma: number = valor1 + valor2;
console.log(`La suma de ${valor1} y ${valor2} es igual a ${resultadoSuma}`);


// Crea una variable llamada "valor1" y otra llamada "valor2", asignándoles valores numéricos de tu elección. Luego, realiza la resta de estos dos valores y almacena el resultado en una tercera variable llamada "resultado". Utiliza console.log para mostrar el mensaje "La diferencia entre [valor1] y [valor2] es igual a [resultado]." en la consola.
alert('Vamos a restar dos numeros');
let valor3: number = parseFloat(prompt("Escribe un valor") ?? "0");
let valor4: number = parseFloat(prompt("Escribe otro valor") ?? "0");
let resultadoResta: number = valor3 - valor4;
console.log(`La suma de ${valor3} y ${valor4} es igual a ${resultadoResta}`);


//Pide al usuario que ingrese su edad con prompt. Con base en la edad ingresada, utiliza un if para verificar si la persona es mayor o menor de edad y muestra un mensaje apropiado en la consola.

alert('Verificación de edad');
let edadUsuario: number = parseInt(prompt('Cuantos años tienes, no nos vamos a enojar')?? "0");

if (edadUsuario >= 18) {
    console.log('Eres mayor de edad');
    alert('Eres mayor de edad')
} else {
    console.log('Eres menor de edad');
    alert('Eres menor de edad');
}

//Crea una variable "numero" y solicita un valor con prompt. Luego, verifica si es positivo, negativo o cero utilizando un if-else y muestra el mensaje correspondiente.

let numberUser:number = NaN;
alert('Es un numero positivo o negativo');
while (isNaN(numberUser)) {
numberUser = parseInt(prompt('Escribe un numero')?? "NaN");
    if (!isNaN(numberUser)) {
        break;
    } else {
        alert('No es un numero');
    }
}
if (numberUser > 0) {
    alert('El numero es positivo');
}
else if (numberUser < 0) {
    alert('El numero es negativo');
}
else{
    alert('El numero es cero');
}


// Utiliza un bucle while para mostrar los números del 1 al 10 en la consola.
alert("contar numeros de 1 al 10");
let numero: number = 1;
while (numero <= 10) {
    console.log(numero);
    numero++;
}


// Crea una variable "nota" y asígnale un valor numérico. Utiliza un if-else para determinar si la nota es mayor o igual a 7 y muestra "Aprobado" o "Reprobado" en la consola.

let grade: number = 7;
if (grade >= 7) {
    console.log('Aprobado');
} else {
    console.log('Reprobado');
}


// Utiliza Math.random para generar cualquier número aleatorio y muestra ese número en la consola.

let numberRandom : number = Math.random();
console.log(numberRandom);


//Utiliza Math.random para generar un número entero entre 1 y 10 y muestra ese número en la consola.

let numberRandomBetweenOneToTen : number = Math.floor(Math.random()*10)+1;
console.log(numberRandomBetweenOneToTen); 


// Utiliza Math.random para generar un número entero entre 1 y 1000 y muestra ese número en la consola.

let numberRandomBetweenOneToOneThousand  : number = Math.floor(Math.random()*1000)+1;
console.log(numberRandomBetweenOneToOneThousand);