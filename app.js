

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;

}
let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = []
let NumeroMaximo = 10;

function CondicionesIniciales() {
    asignarTextoElemento('h1', 'juego del número secreto');
    asignarTextoElemento('p', `Indica un número del 1 al ${NumeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}
CondicionesIniciales();

//-----------------------------------------------------------------

//console.log(listaNumerosSorteados);
function generarNumeroSecreto() {
    let numeroGEnerado = Math.floor(Math.random() * NumeroMaximo) + 1;
    console.log(numeroGEnerado);
    console.log(listaNumerosSorteados);
    if (listaNumerosSorteados.length == NumeroMaximo) {
        asignarTextoElemento('p', 'Llegaste al maximo numero de intentos');
    } else {
        // Si el numero generado esta incluido en la lista 
        if (listaNumerosSorteados.includes(numeroGEnerado)) {
            return generarNumeroSecreto();

        } else {
            listaNumerosSorteados.push(numeroGEnerado);
            return numeroGEnerado
        }

    }

}

//-----------------------------------------------------------------


function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    console.log(numeroSecreto);
    //console.log(intentos);
    //while(numeroDeUsuario != numeroSecreto){
    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento('p', `acertaste el número es ${numeroDeUsuario}.Lo hiciste en ${intentos} ${intentos == 1 ? 'vez' : 'veces'} `);
        document.getElementById("reiniciar").removeAttribute('disabled');
    } else {
        if (numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento('p', 'el numero secreto es menor ');

        } else {
            asignarTextoElemento('p', 'el numero secreto es mayor');

        }
        intentos++;
        LimpiarCaja();
    }
    return;
    //}
}
function LimpiarCaja() {
    document.querySelector('#valorUsuario').value = '';
}
function reiniciarJuego() {
    LimpiarCaja();
    CondicionesIniciales();
    document.querySelector("#reiniciar").setAttribute('disabled', 'true');


}
