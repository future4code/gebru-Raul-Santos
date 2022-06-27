import knex from "knex";
import dotenv from "dotenv";
import { Request, Response } from "express";
import getActorById from "./functions";
import {connection} from "./conections";
import {app} from "./servidor"



dotenv.config();




app.get("/users/:id", async (req: Request, res: Response) => {
  try {
    const id = req.params.id

    console.log(await getActorById(id))

    res.end()
  } catch (error) {
		console.log(error)
    res.status(500).send("Unexpected error")}})