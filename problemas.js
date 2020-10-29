/**
1) Programa una función que cuente el número de caracteres de una cadena de texto.
pe. miFuncion("Hola Mundo") devolverá 10.
**/

function contarCaracteres(cadena) {
    console.log('La cadena ingresada tiene ', cadena.length, ' caracteres.');
}

contarCaracteres('Hola Mundo');

/**
2) Programa una función que te devuelva el texto recortado según el número de caracteres indicados.
pe. miFuncion("Hola Mundo", 4) devolverá "Hola".
**/

function recortarTexto(cadena, num_fin) {
    console.log('Cadena original: ', cadena);
    console.log('Cadena recortada: ', cadena.substring(0, num_fin));
}

recortarTexto('Hola Mundo', 4);

/**
3) Programa una función que dada una String te devuelva un Array de textos separados por cierto caracter.
pe. miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal'].
**/

function devuelveArray(cadena, caracter) {
    console.log('Valor ingresado: ', cadena);
    console.log('Arreglo: ', cadena.split(caracter));
}

devuelveArray('Hola que tal', ' ');

/**
4) Programa una función que repita un texto X veces.
pe. miFuncion('Hola Mundo', 3) devolverá Hola Mundo Hola Mundo Hola Mundo.
**/

function repiteTexto(cadena, x) {
    for (let i = x; i > 0; i--) {
        console.log(cadena);
    }
}

repiteTexto('Hola Mundo', 3);
