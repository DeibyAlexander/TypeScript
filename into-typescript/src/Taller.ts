

//!-----CLASES-----



//TODO-> -------------------CENTROS----------------------

class Centro{
    constructor(
        public readonly id:number,
        public centro:String,
        public departamento:String,
        public ciudad:String,
        public telefono:number
    ){}


    //! GETTERS

    get getCentro():String{
        return this.centro
    }
    
    get getDepartamento() : String {
        return this.departamento
    }

    get getCiudad():String{
        return this.ciudad
    }
    get getTelefono():number{
        return this.telefono
    }

    //! SETTERS
    
    set setCentro(centro:String){
        this.centro = centro
    }

    set setDepartamento(departamento:String){
        this.departamento = departamento
    }

    set setCiudad(ciudad:String){
        this.ciudad = ciudad
    }
    
    set setTelefono(telefono:number){
        this.telefono = telefono
    }


}
//! Via Getters

const centro1 = new Centro(1,"CAMPUSLAND BUCARAMANGA","Santander","Bucaramanga",3123678534)
const centro2 = new Centro(2,"CAMPUSLAND BUCARAMANGA","Santander","Bucaramanga",3123678534)
const centro3 = new Centro(3,"CAMPUSLAND BUCARAMANGA","Santander","Bucaramanga",3123678534)
const centro4 = new Centro(4,"CAMPUSLAND BUCARAMANGA","Santander","Bucaramanga",3123678534)
const centro5 = new Centro(5,"CAMPUSLAND BUCARAMANGA","Santander","Bucaramanga",3123678534)



//! Via Setters

centro1.centro= "CAMPUSLANDS FRONTERA"

console.log(centro1);





//TODO-> -------------------RUTAS----------------------

class Ruta{
    constructor(
        public readonly id:number,
        public ruta:String,
        public centro:String,
        public trainer:String,
        public horario:String
    ){}

     //! GETTERS

     get getRuta():String{
        return this.ruta
    }
    
    get getCentro() : String {
        return this.centro
    }

    get getTrainer():String{
        return this.trainer
    }
    get getHorario():String{
        return this.horario
    }

    //! SETTERS
    

    set setRuta(ruta:String){
        this.ruta = ruta
    }

    set setCentro(centro:String){
        this.centro = centro
    }

    set setTrainer(trainer:String){
        this.trainer = trainer
    }
    
    set setHorario(horario:String){
        this.horario = horario
    }


}


//! Via Getters

const ruta1 = new Ruta(1,"JAVASCIPT","CAMPUSLAND FRONTERA","VERMEN","6 a.m - 2 p.m")
const ruta2 = new Ruta(2,"HTML & CSS","CAMPUSLAND BUCARAMANGA","Miguel","6 a.m - 2 p.m")
const ruta3 = new Ruta(3,"REACT","CAMPUSLAND BUCARAMANGA","Vermen","6 a.m - 2 p.m")
const ruta4 = new Ruta(4,"C++","CAMPUSLAND FORNTERA","Jholver","6 a.m - 2 p.m")
const ruta5 = new Ruta(5,"PHP","CAMPUSLAND BUCARAMANGA","Vermen","6 a.m - 2 p.m")



//! Via Setters

ruta1.ruta= "NodeJs"

console.log(ruta1);




//TODO-> -------------------NIVELS----------------------

class Nivel{
    constructor(
        public readonly id:number,
        public nivel:String,
        public salon:String,
        public ruta:String,
        public duracion:String
    ){}

         //! GETTERS

         get getRuta():String{
            return this.ruta
        }
        
        get getCentro() : String {
            return this.centro
        }
    
        get getTrainer():String{
            return this.trainer
        }
        get getHorario():String{
            return this.horario
        }
    
        //! SETTERS
        
    
        set setRuta(ruta:String){
            this.ruta = ruta
        }
    
        set setCentro(centro:String){
            this.centro = centro
        }
    
        set setTrainer(trainer:String){
            this.trainer = trainer
        }
        
        set setHorario(horario:String){
            this.horario = horario
        }

}



//TODO-> -------------------CAMPERS----------------------

class Camper{
    constructor(
        public readonly id:number,
        public camper:String,
        public email:String,
        public promedio:number,
        public tipoIdentificacion:String,
        public nroIdentificacion:number
    ){}
}

class Contrato{
    constructor(
        public readonly id:number,
        public empresa:String,
        public salario:number,
        public modalidad:String
    ){}
}