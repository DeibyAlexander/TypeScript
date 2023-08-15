"use strict";
// 5. Construir el algoritmo que lea por teclado dos números,
// si el primero es mayor al segundo informar su suma y
// diferencia, en caso contrario, informar el producto y la
// división del primero respecto al segundo.
let numero0 = 0;
let numero1 = 5;
let numero2 = 8;
if (numero1 > numero2) {
    let total = numero1 + numero2;
    let diferencia = numero1 - numero2;
    console.log(total);
    console.log(diferencia);
}
else {
    let producto = numero1 * numero2;
    let division = numero1 / numero2;
    console.log(producto);
    console.log(division);
}
