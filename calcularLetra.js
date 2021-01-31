/**
 * Ejercicio que calcula la letr de los numeros de un dni
 */

const POSIBLES_LETRAS = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E']

let numeroDNI
let letraDNI

function comprobarNumero(){
    let esNumero = false
    while(!esNumero){
    numeroDNI = prompt('Introduce los numeros de tu DNI')
    if((numeroDNI.length === 8) && (!isNaN(numeroDNI))){
        esNumero = true;
    }else console.log(`${numeroDNI} no es un número válido`)
    }
    return String(numeroDNI)
}

function calcularLetraDNI(num){
    let operacion = num%23
    return String(POSIBLES_LETRAS[operacion])
}
console.log(comprobarNumero() + calcularLetraDNI(numeroDNI))
