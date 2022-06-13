import app from "./servidor"
import {bancoDados, Clientes,Operação, Transaction} from "./base"
import express, { Express, Request, Response } from "express";
import cors from "cors";


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

