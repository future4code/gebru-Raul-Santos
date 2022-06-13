import app from "./servidor"
import {bancoDados, Clientes,Operação, Transaction} from "./base"
import express, { Express, Request, Response } from "express";
import cors from "cors";
import { v4 as generateId } from "uuid";

const erros = {
    GENERICO_NOT_FOUND: {
      status: 400,
      message: "método ou caminho inválidos, JSON inválido…",
    },
   CAMPOSBODY_NOT_FOUND: {
      status: 401,
      message: "Todos os campos devem ser preenchidos!",
    },
   SALDO_NOT_FOUND: {
      status: 401,
      message: "credenciais ausentes ou inválidas!",
    },
    AGE_NOT_FOUND: {
      status: 403,
      message: "Usuário deve ter no mínimo 18 anos, para abertura da conta!",
    },
    USUARIO_NOT_FOUND: {
      status: 403,
      message: "usuário não tem as permissões necessárias",
    },
    NAME_NOT_FOUND: { status: 401, message: "name ou price está faltando!" },
    PRICE_NOT_FOUND: {
      status: 422,
      message: "O valor inserido não pode ser igual a zera ou menor",
    },
    PRICE2_NOT_FOUND: {
      status: 422,
      message: "O valor inserido deve ser do tipo number",
    },
    SOME_ERROR: { status: 500, message: "Algo deu errado" },
  }; 


app.get("/users", (req: Request, res: Response) => {
  let errorCode: number = 500;
  try {
    res.status(200).send(bancoDados);
  } catch (error: any) {
    if (errorCode === 500) {
      res.status(errorCode).send({ message: "Erro na busca" });
    }
    res.status(errorCode).send({ message: error.message });
  }
});



app.post('/contas/criar', (req: Request, res: Response) => {
    try{
        const {name, cpf, aniversario} = req.body 
        const dataAtual = new Date()
        const anoAtual = dataAtual.getFullYear();
        const pegandoAno = aniversario.split('/')
        const anoParaSaberIdade : number = pegandoAno[2] as number
        const idade = anoAtual - anoParaSaberIdade
        const use = bancoDados.find((user) => user.cpf === cpf)
        if(use?.cpf === cpf){
          throw new Error(erros.AGE_NOT_FOUND.message)
        }
        if(!name || !cpf || !aniversario)
        throw new Error (erros.CAMPOSBODY_NOT_FOUND.message)
        
        if(idade < 18)
         throw new Error(erros.AGE_NOT_FOUND.message)
        bancoDados.push({
            id:generateId(),
            name,
            cpf,
            aniversario,
            valor: 0.00,
            statement: [{valor: 0.00, descrição:"", date:""}]
        })
       res.send("conta criada")
    
    } catch(error : any){
        switch (error.message) {
            case erros.AGE_NOT_FOUND.message:
                res.status(erros.AGE_NOT_FOUND.status).send(erros.AGE_NOT_FOUND.message)
                break
            case erros.CAMPOSBODY_NOT_FOUND.message:
                res.status(erros.CAMPOSBODY_NOT_FOUND.status).send(erros.CAMPOSBODY_NOT_FOUND.message)
                break
            case erros.AGE_NOT_FOUND.message:
                res.status(erros.AGE_NOT_FOUND.status).send(erros.AGE_NOT_FOUND.message)
                break
            default:
                res.status(erros.SOME_ERROR.status).send(erros.SOME_ERROR.message)
        }
    }
})
