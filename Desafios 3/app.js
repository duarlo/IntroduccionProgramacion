
// Crea un contador que comience en 1 y valla hasta 10 utilizando un bucle while. Muestra cada numero
numero = 1;
while(numero<=10)
{
    alert(numero);
    numero++;
}
// Crea un contador que comience en 10 y vaya hasta 0 usando un bucle 'while'. Muestra cada número
numero = 10;
while(numero>=1)
{
    alert(numero);
    numero--;
}
// Crea un programa de cuenta regresiva. Pide un número y cuenta desde 0 hasta ese número utilizando un bucle 'while' en la consola del navegador.
let numberSelectionRegresive;

while(true)
{
    let number = prompt("elige un numero para realizar una cuenta atas, No puede ser 0 o negativo");
    if(number == null || number <= 0)
        {
            prompt("Numero no valido")
        }
    else
        {
            numberSelectionRegresive = number;
            break;
        }
}

let finalRegresive = 0;
console.log("Cuenta regresiva");
while(finalRegresive <= numberSelectionRegresive)
{
    console.log(numberSelectionRegresive);
    numberSelectionRegresive--;
}
// Crea un programa de cuenta progresiva. Pide un número y cuenta desde 0 hasta ese número utilizando un bucle 'while' en la consola del navegador.

let numberSelectionProgressive;

while(true)
{
    let number = prompt("elige un numero para realizar una cuenta hacia adelante, No puede ser 0 o negativo");
    if(number == null || number <= 0)
        {
            prompt("Numero no valido")
        }
    else
        {
            numberSelectionProgressive = number;
            break;
        }
}

let initialProgressive = 0;
console.log("Cuenta progresiva");
while(initialProgressive <= numberSelectionProgressive)
{
    console.log(initialProgressive);
    initialProgressive++;
}