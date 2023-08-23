"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
class Astronauta {
    constructor(id, nombre, _record, recompensa, mission = []) {
        this.id = id;
        this.nombre = nombre;
        this._record = _record;
        this.recompensa = recompensa;
        this.mission = mission;
    }
    getLaunches() {
        return __awaiter(this, void 0, void 0, function* () {
            const url = 'https://api.spacexdata.com/v3/launches';
            const { data } = yield axios_1.default.get(url);
            let contador = 0;
            data.forEach((element) => {
                const { mission_name } = element;
                this.mission[contador] = mission_name;
                contador = contador + 1;
            });
            console.log(this.mission);
            return this.mission;
        });
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
// ! Metodo async invocation
astro1.getLaunches();
