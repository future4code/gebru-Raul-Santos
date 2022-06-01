import express from "express";
import cors from "cors";
import { AddressInfo } from "net";
import { users } from "./data";
import { Request, Response } from "express";
const app = express();
app.use(express.json());
app.use(cors()) //habilita o cors

const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});;

// Main = tudo dentro de Data.ts

app.get("/Main", (req, res) => {    
    
    try{

        const listaUsuarios = users

        const userPlaylist = listaUsuarios.map((cadaUsuario) => {
            return cadaUsuario.Usuarios
        })

        const result = userPlaylist.flat(1)

        res.status(200).send(result)

    }
    catch(error){
    res.status(400).end("Não encontrado")

    }
})

app.get('/cadastro/:nome', (req: Request, res: Response) => {

    console.log("req.body", req.body.nome)


    
})