"use strict";
// 9. N atletas han pasado a finales en salto triple en los juegos
// olímpicos femenino de 2022. Diseñe un programa que pida por
// teclado los nombres de cada atleta finalista y a su vez, sus
// marcas del salto en metros. Informar el nombre de la atleta
// campeona que se quede con la medalla de oro y si rompió
// récord, reportar el pago que será de 500 millones. El récord
// esta en 15,50 metros.
let nombreAtleta = "Mariana";
let marcaSalto = 18;
let nombreCampeona = "";
let record = 15.40;
let rompioRecord = "no";
let atletas = 1;
for (let n = 0; n < atletas; n++) {
    for (let f = 0; f < marcaSalto; f++) {
        if (marcaSalto > record) {
            record = marcaSalto;
            nombreAtleta = nombreCampeona;
            rompioRecord = "si";
        }
    }
}
console.log(`El ganador de la medalla de oro fue ${nombreAtleta} con una marca de salto ${record} y ${rompioRecord} se le da el pago de 500millones`);
