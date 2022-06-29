import knex from "knex";
import dotenv from "dotenv";
import { Request, Response } from "express";
import {getAllUsers} from "./endpoints/getAllUsers"
import {app} from "./servidor"


dotenv.config();

const serv = app




app.get("/users", getAllUsers)