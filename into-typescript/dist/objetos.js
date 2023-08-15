"use strict";
//* Objects Arrays
let goleadores = ['Jisuss', 'Amed', 'Yedher'];
let goles = [0, 5, -2];
console.log(`Goleadores: ${goleadores}`);
console.log(`Goleadores: ${goles}`);
//* Metodo Alternativo para definir arrays en typescript
let whereTherePenalties = [false];
console.log(`where There Penalties: ${whereTherePenalties}`);
//* Typescript infiere los metodos aplicables segun el tipo de datos
console.log(goleadores.map(ele => ele.toString()));
//* Objects
let goleadoresId = [10, 7, 9, 11];
goleadoresId.push(1);
console.log(goleadoresId);
goleadoresId.push(+'13');
console.log(typeof goleadoresId);
const object = {
    id: 8,
    name: "Obejct",
    edad: 123
};
object.edad = 11;
// object.id= 5
console.log(object);
