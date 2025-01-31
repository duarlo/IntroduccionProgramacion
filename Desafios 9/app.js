"use strict";
// Crea una lista vacía llamada "listaGenerica".
// Extra: funcion para crear listas vacias
const listaGenerica = () => {
    return [];
};
let listaVacia = listaGenerica();
// Crea una lista de lenguajes de programación llamada "lenguagesDeProgramacion con los siguientes elementos: 'JavaScript', 'C', 'C++', 'Kotlin' y 'Python'.
let lenguajesDeProgramacion = ["JavaScript", "C", "C++", "kotlin", "python"];
// EXTRA imprimirlos en el documento en forma de lista
const lists = (list) => {
    const block = document.createElement("ul");
    list.forEach(elemento => {
        const listItem = document.createElement("li");
        listItem.textContent = elemento;
        block.appendChild(listItem);
    });
    document.body.appendChild(block);
};
lists(lenguajesDeProgramacion);
// Agrega a la lista "lenguagesDeProgramacion los siguientes elementos: 'Java', 'Ruby' y 'GoLang'.
let nuevosLenguajesDeProgramacion = ['Java', 'Ruby', 'Golang'];
lenguajesDeProgramacion.push(...nuevosLenguajesDeProgramacion);
// EXTRA imprimirlos en el documento en forma de lista
lists(lenguajesDeProgramacion);
// Crea una función que muestre en la consola todos los elementos de la lista "lenguagesDeProgramacion.
console.log(lenguajesDeProgramacion);
// Crea una función que muestre en la consola todos los elementos de la lista "lenguagesDeProgramacion en orden inverso.
lenguajesDeProgramacion.reverse();
console.log(lenguajesDeProgramacion);
lists(lenguajesDeProgramacion);
// Crea una función que calcule el promedio de los elementos en una lista de números.
let numberList = [4.9, 5, 6.1, 14, 16, 8.9, 7.7];
function average(numbers) {
    let sum = numbers.reduce((total, number) => total + number, 0);
    return sum / numbers.length;
}
console.log(`El promedio de los siguientes numeros:${numberList} es:${average(numberList).toFixed(2)}`);
// EXTRA imprimirlo en el documento en forma de parrafo
const printer = (string) => {
    const block = document.createElement("p");
    block.textContent = string;
    document.body.appendChild(block);
};
printer(`El promedio de los siguientes numeros:${numberList} es: ${average(numberList).toFixed(2)}`);
// Crea una función que muestre en la consola el número más grande y el número más pequeño en una lista.
const maximizeNumberList = (numbers) => {
    return Math.max(...numbers);
};
const minimizeNumberList = (numbers) => {
    return Math.min(...numbers);
};
console.log(maximizeNumberList(numberList));
printer(`De la siguiente lista de numeroses: ${numberList}, el más pequeño es: ${maximizeNumberList(numberList)} y el más pequeño es: ${minimizeNumberList(numberList)}.`);
// Crea una función que devuelva la suma de todos los elementos en una lista.
const totalSum = (numbers) => {
    return numbers.reduce((total, number) => total + number, 0);
};
printer(`De la siguiente lista de numeros: ${numberList}, su suma es: ${totalSum(numberList)}`);
// Crea una función que devuelva la posición en la lista donde se encuentra un elemento pasado como parámetro, o -1 si no existe en la lista.
const findNumberInList = (numbers, numberToFind) => {
    return numbers.indexOf(numberToFind);
};
let numberToFind = 4.9;
if (findNumberInList(numberList, numberToFind) !== -1) {
    printer(`El numero ${numberToFind} se encuentra en la lista. en la posición:${findNumberInList(numberList, numberToFind)}`);
}
else {
    printer(`El numero ${numberToFind} no se encuentra en la lista.`);
}
// Crea una función que reciba dos listas de números del mismo tamaño y devuelva una nueva lista con la suma de los elementos uno a uno.
// NOTA: debemos revisar como se comporta si las listas son de diferentes tamaños
const SumOnetoOne = (listnumbersa, listnumbersb) => {
    return listnumbersa.map((a, i) => a + listnumbersb[i]);
};
printer(`de la siguiente lista ${numberList} y de la otra lista ${numberList} su suma de elementos uno a uno es: ${SumOnetoOne(numberList, numberList)}`);
// Crea una función que reciba una lista de números y devuelva una nueva lista con el cuadrado de cada número.
const squareNumbers = (numbers) => {
    return numbers.map(number => number * number);
};
printer(`de la siguiente lista ${numberList} su lista con el cuadrado de cada numero es: ${squareNumbers(numberList).map(number => number.toFixed(2))}`);
