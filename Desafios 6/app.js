"use strict";
// Cambia el contenido de la etiqueta h1 con document.querySelector y asigna el siguiente texto: "Hora del Desafío".
const title = document.getElementsByTagName("h1");
title[0].innerHTML = "Hora del Desafío";
// Crea una función que muestre en la consola el mensaje "El botón fue clicado" siempre que se presione el botón "Console".
const showMessageBox = () => {
    alert("El botón fue clicado");
};
// Crea una función que se ejecute cuando se haga clic en el botón "prompt", preguntando el nombre de una ciudad de Brasil. Luego, muestra una alerta con el mensaje concatenando la respuesta con el texto: "Estuve en {ciudad} y me acordé de ti".
const showPromptCities = () => {
    let city = prompt("Escribe el nombre de alguna ciudad de brazil");
    if (city) {
        alert(`Estuve en ${city} y me acordé de ti`);
    }
    else {
        alert("No ingresaste un nombre de ciudad");
        showPromptCities();
    }
};
// Crea una función que muestre una alerta con el mensaje: "Yo amo JS" siempre que se presione el botón "Alerta".
const showAlert = () => {
    alert(`Yo ❤️ JS...
        
        
        ...(quiza talvez un poco TS pero no le digan)`);
};
// Al hacer clic en el botón "suma", pide 2 números y muestra el resultado de la suma en una alerta.
const addFunction = () => {
    let num1 = parseFloat(prompt("Ingrese el primer número") || "");
    let num2 = parseFloat(prompt("Ingrese el segundo número") || "");
    if (!isNaN(num1) && !isNaN(num2)) {
        alert(`La suma de ${num1} y ${num2} es: ${num1 + num2}`);
    }
    else {
        alert("No ingresaste números válidos");
        addFunction();
    }
};
