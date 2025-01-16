//Variables
let numeroMaximoPosible = 100;
let numeroSecreto = Math.floor(Math.random()*numeroMaximoPosible)+1;
let numeroUsuario;
let intentos = 1;
//let palabraVeces = 'vez';
let maximosIntentos = 6;


while (numeroUsuario != numeroSecreto) {
// filtrado de numeros: no admite caracteres
    do {	
        numeroUsuario = prompt(`Me indicas un número entre 1 y ${numeroMaximoPosible} por favor:`);
        numeroUsuario = (parseInt(numeroUsuario));
        console.log(numeroUsuario);
            if (isNaN(numeroUsuario)) {
                alert('Por favor, ingrese un número válido');
            }
    } 
    while (isNaN(numeroUsuario));

    // console.log(typeof(numeroUsuario));

    // filtrado de numeros que superen los limites
    if (numeroUsuario == numeroSecreto) {
        //Acertamos, fue verdadera la condición
        alert(`Acertaste, el número es: ${numeroUsuario}. Lo hiciste en ${intentos} ${intentos == 1 ? 'vez' : 'veces' }`);
    } 
    else {
        if (numeroUsuario > numeroSecreto) {
            alert('El número secreto es menor');
        } else {
            alert('El número secreto es mayor');
        }
        //Incrementamos el contador cuando no acierta
        //intentos = intentos + 1;
        //intentos += 1;
        intentos++;

        //palabraVeces = 'veces';
        if (intentos > maximosIntentos) {
            alert(`Llegaste al número máximo de ${maximosIntentos} intentos`);
            break;
        }
        //La condición no se cumplió
        //alert('Lo siento, no acertaste el número');
    }

}