import knex from "knex";
import dotenv from "dotenv";
import { Request, Response } from "express";
import {createUser, Usuario} from "./functions";
import {connection} from "./conections";
import {app} from "./servidor"



dotenv.config();




export const postUser = async (req: Request, res: Response) => {
  try {
    const { name, nickname, email} = req.body

    const newUser:Usuario ={
    id:("4554455"),
    name: name,
    nickname: nickname,
    email: email,
   }
   await createUser(newUser)
    res.status(201).send("Deu certo");
  } catch (error: any) {
    res.status(404).send("Error");
  }
}