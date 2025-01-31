"use strict";
// Crea una función que calcule el índice de masa corporal (IMC) de una persona a partir de su altura en metros y peso en kilogramos, que se recibirán como parámetros.
function calculateIMC(weight, height) {
    let imc = weight / Math.pow(height, 2);
    console.log(`Tu IMC es: ${imc.toFixed(2)}`);
}
const generateSpace = () => {
    let space = document.createElement("br");
    document.body.appendChild(space);
};
generateSpace();
generateSpace();
// Crea una función que calcule el valor del factorial de un número pasado como parámetro.
function factorial(num) {
    if (num === 0 || num === 1) {
        return 1;
    }
    else {
        return num * factorial(num - 1);
    }
}
// Crea una función que convierta un valor en dólares, pasado como parámetro, y devuelva el valor equivalente en reales(moneda brasileña,si deseas puedes hacerlo con el valor del dólar en tu país). Para esto, considera la cotización del dólar igual a R$4,80.
function convertDollarToReal(dollarValue) {
    return dollarValue * 4.80;
}
// Crea una función que muestre en pantalla la lista de números primos entre 0 y un número dado como parámetro.
function displayPrimeNumbers(limit) {
    let listPrimeNumbers = [];
    for (let i = 2; i <= limit; i++) {
        let isPrime = true;
        for (let j = 2; j < i; j++) {
            if (i % j === 0) {
                isPrime = false;
                break;
            }
        }
        if (isPrime) {
            listPrimeNumbers.push(i);
        }
    }
    console.log(listPrimeNumbers);
}
// Crea una función que muestre en pantalla el área y el perímetro de una sala rectangular, utilizando la altura y la anchura que se proporcionarán como parámetros.
const rectangleAreaAndPerimeter = (h, l) => {
    let area = h * l;
    let perimeter = 2 * (h + l);
    console.log(`Area: ${area} u2, Perimeter: ${perimeter} u`);
};
//Crea una función que muestre en pantalla el área y el perímetro de una sala circular, utilizando su radio que se proporcionará como parámetro. Considera Pi = 3,14.
const circularAreaAndPerimeter = (r) => {
    let area = Math.PI * Math.pow(r, 2);
    let perimeter = 2 * Math.PI * r;
    console.log(`Area: ${area.toFixed(4)} u2, Perimeter: ${perimeter.toFixed(4)} u`);
};
// Crea una función que muestre en pantalla la tabla de multiplicar de un número dado como parámetro.
function displayMultiplicationTable(number) {
    for (let i = 1; i <= 10; i++) {
        console.log(`${number} x ${i} = ${number * i}`);
    }
}
