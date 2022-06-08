import app from "./base"
import {Compras} from "./data"
import { v4 as generateId } from 'uuid'

const Errors: { [key: string]: { status: number, message: string } } = {
    AUTHORIZATION_NOT_FOUND: { status: 401, message: "Favor enviar headrs authorization." },
    PLAYLIST_NOT_FOUND: { status: 404, message: "Playlist não encontrada" },
    TRACK_EXISTS: { status: 409, message: "Essa música já existe" },
    MISSING_PARAMETERS: { status: 422, message: "Informação faltando. Consulte a documentação" },
    SOME_ERROR: { status: 500, message: "Algo deu errado" }
}

const servidor = app
//  exercicio 1 teste

// app.get('/testes', (req, res) => {

//     try {

//         res.send("teste")

//     }
//     catch (error) {
//         console.log("Deu ruim o teste")
//     }
// })

app.get('/produtos', (req, res) => {

    try {


        const listaProdutos = Compras

        const PegarProdutos = listaProdutos.map((cadaProduto) => {
            return cadaProduto.name
        })

        const result = PegarProdutos.flat(1)

        res.status(200).send(result)

    }
    catch (error) {
        res.send("Error")
    }
})

app.post('/produtos:produtosId', (req, res) => {

    try {

    const {id,name,number} = req.body
    Compras.push({id, name, number})
    res.send("Produto adicionado com Sucessos")


    }
    catch (error) {
        res.send("Error")
    }
})
