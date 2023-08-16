"use strict";
//!-----CLASES-----
//TODO-> -----CENTROS------
class Centro {
    constructor(id, centro, departamento, ciudad, telefono) {
        this.id = id;
        this.centro = centro;
        this.departamento = departamento;
        this.ciudad = ciudad;
        this.telefono = telefono;
    }
    //! GETTERS
    get getCentro() {
        return this.centro;
    }
    get getDepartamento() {
        return this.departamento;
    }
    get getCiudad() {
        return this.ciudad;
    }
    get getTelefono() {
        return this.telefono;
    }
    //! SETTERS
    set setCentro(centro) {
        this.centro = centro;
    }
    set setDepartamento(departamento) {
        this.departamento = departamento;
    }
    set setCiudad(ciudad) {
        this.ciudad = ciudad;
    }
    set setTelefono(telefono) {
        this.telefono = telefono;
    }
}
//! Via Getters
const centro1 = new Centro(1, "CAMPUSLAND BUCARAMANGA", "Santander", "Bucaramanga", 3123678534);
const centro2 = new Centro(2, "CAMPUSLAND BUCARAMANGA", "Santander", "Bucaramanga", 3123678534);
const centro3 = new Centro(3, "CAMPUSLAND BUCARAMANGA", "Santander", "Bucaramanga", 3123678534);
const centro4 = new Centro(4, "CAMPUSLAND BUCARAMANGA", "Santander", "Bucaramanga", 3123678534);
const centro5 = new Centro(5, "CAMPUSLAND BUCARAMANGA", "Santander", "Bucaramanga", 3123678534);
//! Via Setters
centro1.centro = "CAMPUSLANDS FRONTERA";
console.log(centro1);
//TODO-> -----RUTA------
class Ruta {
    constructor(id, ruta, centro, trainer, horario) {
        this.id = id;
        this.ruta = ruta;
        this.centro = centro;
        this.trainer = trainer;
        this.horario = horario;
    }
    //! GETTERS
    get getRuta() {
        return this.ruta;
    }
    get getCentro() {
        return this.centro;
    }
    get getTrainer() {
        return this.trainer;
    }
    get getHorario() {
        return this.horario;
    }
    //! SETTERS
    set setRuta(ruta) {
        this.ruta = ruta;
    }
    set setCentro(centro) {
        this.centro = centro;
    }
    set setTrainer(trainer) {
        this.trainer = trainer;
    }
    set setHorario(horario) {
        this.horario = horario;
    }
}
//! Via Getters
const ruta1 = new Ruta(1, "JAVASCIPT", "CAMPUSLAND FRONTERA", "VERMEN", "6 a.m - 2 p.m");
const ruta2 = new Ruta(2, "HTML & CSS", "CAMPUSLAND BUCARAMANGA", "Miguel", "6 a.m - 2 p.m");
const ruta3 = new Ruta(3, "REACT", "CAMPUSLAND BUCARAMANGA", "Vermen", "6 a.m - 2 p.m");
const ruta4 = new Ruta(4, "C++", "CAMPUSLAND FORNTERA", "Jholver", "6 a.m - 2 p.m");
const ruta5 = new Ruta(5, "PHP", "CAMPUSLAND BUCARAMANGA", "Vermen", "6 a.m - 2 p.m");
//! Via Setters
ruta1.ruta = "NodeJs";
console.log(ruta1);
class Nivel {
    constructor(id, nivel, salon, ruta, duracion) {
        this.id = id;
        this.nivel = nivel;
        this.salon = salon;
        this.ruta = ruta;
        this.duracion = duracion;
    }
}
class Camper {
    constructor(id, camper, email, promedio, tipoIdentificacion, nroIdentificacion) {
        this.id = id;
        this.camper = camper;
        this.email = email;
        this.promedio = promedio;
        this.tipoIdentificacion = tipoIdentificacion;
        this.nroIdentificacion = nroIdentificacion;
    }
}
class Contrato {
    constructor(id, empresa, salario, modalidad) {
        this.id = id;
        this.empresa = empresa;
        this.salario = salario;
        this.modalidad = modalidad;
    }
}
