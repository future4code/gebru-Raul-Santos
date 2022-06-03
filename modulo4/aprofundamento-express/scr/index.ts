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

   app.post('/afazeres/create', (req, res) => {

        try{

            const afazeresNome = req.body.name;

            if(!afazeresNome)
            throw new Error("É nescessario informar o nome da Tarefa");

            const NewAfazeres = {
                id:"",
                statusGeral:"",
                Tarefas:[]
            }

            users.push(afazeresNome);
            res
               .status(201)
               .send(`A Tarefa ${afazeresNome} foi criada com sucesso!`);
            

        }

        catch{

            
        }



   })