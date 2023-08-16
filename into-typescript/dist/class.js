"use strict";
class Astronauta {
    /*     public id:number;
        public nombre:String;
        public record:String;
    
    
        constructor(id:number, nombre:string, record:string){
            this.id = id,
            this.nombre= nombre,
            this.record = record
        } */
    constructor(id, nombre, _record, recompensa) {
        this.id = id;
        this.nombre = nombre;
        this._record = _record;
        this.recompensa = recompensa;
    }
    obtenerRecompensa(record) {
        if (record === 'Artemis') {
            this.recompensa = "Gano 5 millones";
        }
        else {
            this.recompensa = "NO gano nada";
        }
    }
    set record(record) {
        this._record = record;
    }
    get record() {
        return this._record;
    }
}
//! Via Constructor
const astro1 = new Astronauta(1, "Jose", "Artemis", "Artemis");
console.log(astro1);
console.log(`Record ${astro1.record}`);
// ! Via Setter
astro1.record = "Sol";
console.log(`Record vai Setter ${astro1.record}`);
//! Ejercicio de recompensa
astro1.recompensa = "Artemis";
console.log(`La recompensa ${astro1.recompensa}`);
