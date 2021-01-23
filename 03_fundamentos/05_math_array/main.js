// Declarar un array numérico (entero) y crear un método que imprima:
// La suma de todos los elementos
// El elemento más grande
// El elemento más pequeño
// La media de los elementos
const assert = require('assert').strict;

const { maxHeaderSize } = require("http");



function doCalculation(array) {
    let suma = 0;
    let masGrande = array[0];
    let masPequeño = array[0];

    for (let i = 0; i<array.length; i++) {
        suma += array[i];
        if (array[i] > masGrande) {
            masGrande = array[i]
        }
        if (array[i] < masPequeño) {
            masPequeño = array[i]
        }
    }

    return {
        sum: suma,
        avg: suma / array.length,
        max: masGrande,
        min: masPequeño
    }
}



let result = doCalculation([1,2,3,4])
assert.strictEqual(result.sum, 10)
assert.strictEqual(result.avg, 2.5)
assert.strictEqual(result.max, 4)
assert.strictEqual(result.min, 1)
console.log(result)


doCalculation([5,5,5,5])
doCalculation([1,1,1,2,2,2,3,3,3,4,4,4,5,5,5])