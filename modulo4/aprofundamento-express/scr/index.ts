//  exercicio 1

import app  from "./data";
import { users } from './baseAPI/afazeres';

app.get("/ping", (req,res) => {
 res.send("Pong!")
}
)

app.get("/afazeres", (req,res) => {
    try{

        const afazeres = users

        res.send(afazeres);
    }

    catch(error:any){

        res.send(error.message);


    }
   }
   )

   app.get("/afazeres/concluida", (req,res) => {
    try{

        const afazer = req.query.afazer

        let trazerBololean:boolean;

        if(afazer === "true"){
            trazerBololean = true
        }

        else{

            trazerBololean = false
        }

        const resultado = users.filter(afazer => afazer.statusGeral === trazerBololean)

        res.send(resultado)
        
        
    }
    catch(error:any){

        res.send(error.message);
   }
}
   )