let nro1 = 2
let nro2 = 200
let nro3 = 0

//SUMA
function sumar (nro1,nro2) {
    return nro1 + nro2
}
console.log(sumar (nro1, nro2));


//RESTA
function restar (nro1,nro2) {
    return nro1 - nro2
}
console.log(restar (nro1, nro2));


//MULTIPLICACION
function multiplicar (nro1,nro2) {
    return nro1 * nro2
}
console.log(multiplicar (nro1, nro2));


//DIVISION
function dividir (nro1,nro2) {
    return nro1 / nro2
}
console.log(dividir (nro1, nro2));


//CUADRADO
function cuadro (nro1) {
    return nro1 * nro1
}
console.log(multiplicar (nro1, nro1));


//PROMEDIO 3 NUMEROS
function promedio (nro1,nro2,nro3) {
    return sumar(sumar (nro1, nro2), nro3) / 3
}
console.log(promedio (nro1,nro2,nro3));


//CALCULAR PORCENTAJE
function CalcularPorcentaje (nro1,nro2) {
    return dividir (multiplicar (nro1, nro2), 100) 
}
console.log(CalcularPorcentaje (nro1,nro2));


//GENERADOR DE PORCENTAJE
function GenerarPorcentaje (nro1,nro2) {
    return dividir (multiplicar (nro1, 100), nro2) 
}
console.log(GenerarPorcentaje (nro1,nro2));