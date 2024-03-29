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
            return cadaUsuario.posts
        })

        const result = userPlaylist.flat(1)

        res.status(200).send(result)

    }
    catch(error){
    res.status(400).end("Não encontrado")

    }
})

app.get('/posts', (req: Request, res: Response) => {

    try {
        
        const PostId = req.query.id
        let usuarios: {}[] = []

        for (let element of users) {
            for (let post of element.posts) {
                if (post.id === PostId) {
                    usuarios.push(post.usuarios)
                }
            }
        }

        res.status(200).send(usuarios)

    }
    catch (error) {
        res.status(400).end("Id não encontrado")
    }
})
