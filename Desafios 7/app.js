"use strict";
// Crear una función que muestre "¡Hola, mundo!" en la consola.
const getGreetings = () => {
    let boxMessage = document.createElement("p");
    boxMessage.textContent = "Hola, mundo! 😊";
    document.body.appendChild(boxMessage);
};
// Llamar a la función para mostrar los saludos.
getGreetings();
// ------------------------------------------------------------------------------------------------
// Crear una función que reciba un nombre como parámetro y muestre "¡Hola, [nombre]!" en la consola. EXTRA que el mensaje sea capturado y mostrado en el documento html
function customGeeting(name) {
    let boxMessage = document.createElement("p");
    boxMessage.textContent = `Hola, ${name}!`;
    document.body.appendChild(boxMessage);
}
// EXTRA crear funcion para generar elementos de captura
function captureData(type, placeholder) {
    let nameInput = document.createElement("input");
    nameInput.type = type;
    nameInput.placeholder = placeholder;
    document.body.appendChild(nameInput);
    return nameInput;
}
// Capturar evento de presionar enter
let userName = captureData("Text", "Ingrese su nombre");
userName.addEventListener("keyup", function (event) {
    if (event.key === "Enter") {
        //console.log(nameInput.value);
        customGeeting(userName.value);
    }
});
generteSpace();
generteSpace();
// let nameInput = document.createElement("input");
// nameInput.type = "text";
// nameInput.placeholder = "Ingrese su nombre";
// document.body.appendChild(nameInput);
// // Capturar evento de presionar enter
// nameInput.addEventListener("keyup", function(event){
//     if(event.key === "Enter"){
//         //console.log(nameInput.value);
//         customGeeting(nameInput.value);
//     }
// });
// ------------------------------------------------------------------------------------------------
function generteSpace() {
    let space = document.createElement("br");
    document.body.appendChild(space);
}
// Crear una función que reciba un número como parámetro y devuelva el doble de ese número.
const doubleOperation = (userNumber) => {
    let boxMessage = document.createElement("p");
    boxMessage.textContent = `El doble de ${userNumber} es: ${userNumber * 2}`;
    document.body.appendChild(boxMessage);
};
let userNumber = captureData("Number", "Ingrese un numero");
userNumber.addEventListener("keyup", function (event) {
    if (event.key === "Enter") {
        //console.log(nameInput.value);
        doubleOperation(parseFloat(userNumber.value));
    }
});
generteSpace();
generteSpace();
// ------------------------------------------------------------------------------------------------
// Crear una función que reciba tres números como parámetros y devuelva su promedio.
const averageOperation = (num1, num2, num3) => {
    let boxMessage = document.createElement("p");
    boxMessage.textContent = `El promedio de ${num1}, ${num2} y ${num3} es: ${(num1 + num2 + num3) / 3}`;
    document.body.appendChild(boxMessage);
};
let num1 = captureData("Number", "Ingrese el primer numero");
let num2 = captureData("Number", "Ingrese el segundo numero");
let num3 = captureData("Number", "Ingrese el tercero numero");
let userButton = submitButton("Calcular el promedio");
generteSpace();
generteSpace();
function submitButton(actionMessage) {
    let button = document.createElement("button");
    button.textContent = actionMessage;
    document.body.appendChild(button);
    return button;
}
userButton.addEventListener("click", () => {
    averageOperation(parseFloat(num1.value), parseFloat(num2.value), parseFloat(num3.value));
});
// ------------------------------------------------------------------------------------------------
// Crear una función que reciba dos números como parámetros y devuelva el mayor de ellos.
const maximizerNumbers = (num1, num2) => {
    let maxiNumber;
    if (num1 < num2)
        maxiNumber = num2;
    else
        maxiNumber = num1;
    let boxMessage = document.createElement("p");
    boxMessage.textContent = `El número mayor es: ${maxiNumber}`;
    document.body.appendChild(boxMessage);
};
let num4 = captureData("Number", "Ingrese el primer numero");
let num5 = captureData("Number", "Ingrese el segundo numero");
let maximizeNumberUser = submitButton("El mayor es ...");
generteSpace();
generteSpace();
maximizeNumberUser.addEventListener("click", () => {
    maximizerNumbers(parseFloat(num4.value), parseFloat(num5.value));
});
// ------------------------------------------------------------------------------------------------
// Crear una función que reciba un número como parámetro y devuelva el resultado de multiplicar ese número por sí mismo.
let num6 = captureData("Number", "Ingrese un numero");
console.log(num6);
const squareOperation = (userNumber) => {
    let boxMessage = document.createElement("p");
    boxMessage.textContent = `El cuadrado de ${userNumber} es: ${userNumber * userNumber}`;
    document.body.appendChild(boxMessage);
};
num6.addEventListener("keyup", function (event) {
    if (event.key === "Enter") {
        //console.log(nameInput.value);
        squareOperation(parseFloat(num6.value));
    }
});
