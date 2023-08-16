class Astronauta {

    constructor(
        public readonly id:number,
        public nombre:String,
        private _record:String,
        public recompensa?:String
    ){}
    obtenerRecompensa(record:String){
        if (record === 'Artemis') {
            this.recompensa = "Gano 5 millones"
   
            
        }
        else{
            this.recompensa = "NO gano nada"

        }
    }

    set record(record:String){
        this._record = record
    }

    get record():String{
        return this._record
    }

    
}


//! Via Constructor

const astro1 = new Astronauta(1,"Jose","Artemis","Artemis")

console.log(astro1);
console.log(`Record ${astro1.record}`);


// ! Via Setter

astro1.record= "Sol"
console.log(`Record vai Setter ${astro1.record}`);


//! Ejercicio de recompensa

astro1.recompensa= "Artemis"
console.log(`La recompensa ${astro1.recompensa}`);







