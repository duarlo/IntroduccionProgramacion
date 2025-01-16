// mediante DOM llamar la etiqueta body para ingresar elementos dentro de el
const page = document.getElementsByTagName('body');

// Muestra una alerta con el mensaje "Bienvenido@ a nuestro sitio web"
welcomeMessage = 'Bienvenido@ a nuestro sitio web'
alert(welcomeMessage)

// EXTRA Muestre el mensaje anterior y introduzcalo como un elemento html
// crea un elemento h1 
const fisrtChallenge = document.createElement('H1')
// ingresa texto dentro de fistChallenge
fisrtChallenge.innerHTML = welcomeMessage;
// agrega el contenido a page
page[0].append(fisrtChallenge);

// Declare una variable llamada name y asignale el nombre de 'lua'
let name = 'Lua';
// declara una variable age y asignale el valor de 25
let age = 25;
// Establece una variable numberSells y asignale el valor de 50
let numbersSells=50;
// Establece una variable balaceAvalible y asignale el valor de 1000 
let balancesAvalible=1000;

// EXTRA Muestra todo lo anterior nombre y edad numero de ventas adiciona el termino agentcommision de 5 y un impuesto retenido de 15% y net profit y adicionarlo al balance Avalible
const agentCommision= 5
const withheldTax=20
// crear un elemento HTML dentro del documento
const secondChallenge = document.createElement('p');
// calculo del impuesto retenido del 20%
let withheld = (agentCommision*numbersSells)*(withheldTax/100)
// comision neta
let netProfit =  (agentCommision*numbersSells)- withheld
// asigna una cadena al elemento html
secondChallenge.innerHTML = `El nombre del empleado es ${name} su edad es de ${age} y el numero de ventas que ha realizado este mes es ${numbersSells} la comisión es de ${agentCommision} y impuesto retenido es de ${withheld} y sus ganacias son del ${netProfit} y su saldo total es de ${netProfit+balancesAvalible}`
// agrega dentro del elemento body el elemento recien creado
page[0].append(secondChallenge);


// Muestra una alerta con el texto "¡Error! completa todos los campos"
let errorMessage = "¡Error! Completa todos los campos";
// variables que necesitaresmos para mostrar la alert
let userNamePromt;
let userAgePromt;
let messagePromt;
// se decidira combinar con el siguiente ejercicio
// Utiliza un promt para preguntar el nombre del usuario y almacénalo dento de una variable
while (true) 
{
    // CUIDADO revisa bien el scope de JS por que estas realizando muchas asignaciones
    let userName = prompt('Ingrese su nombre');
    if (userName !== null && userName !== '') {
        userNamePromt = userName;
        break; 
    }
    else
    {
        alert(errorMessage);
    }
}
// Mensajes
let congrats = '¡Puedes obtener tu licencia!'
let apologies = 'No puedes obtener tu licencia todavía :('
// variable para guardar la edad
let userAge ;
// captura datos de la edad y devuelve un mensaje
while (true)
{
    let userAge = prompt('Ingrese su edad');
    if (userAge !== null && userAge !== '') {
        if ( userAge >= 18)
        {
            alert(congrats);
            messagePromt = congrats
        }
        else if(userAge <= 18 && userAge >= 0){
            alert(apologies);
            messagePromt = apologies
        }
        userAgePromt = userAge
        break;
    }
    else
    {
        alert(errorMessage);
    }
}

// EXTRA muestra en el documento HTML
//Crea un elemento p 
const thirdChallenge = document.createElement('p');
// Asigna texto dentro del elemento p
thirdChallenge.innerHTML = `Saludos tu nombre es: ${userNamePromt} y tu edad es: ${userAgePromt} y ${messagePromt}`;
// Agrega dentro de la etiqueta body el elemento p
page[0].append(thirdChallenge);



