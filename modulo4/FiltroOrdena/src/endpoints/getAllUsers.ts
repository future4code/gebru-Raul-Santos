import selectAllUsers from "../functions"
import knex from "knex";
import dotenv from "dotenv";
import { Request, Response } from "express";
import { recipe, users } from "./types";



export const getAllUsers = async(req: Request,res: Response,): Promise<void> =>{
    try {
       const users = await selectAllUsers()
 
       if(!users.length){
          res.statusCode = 404
          throw new Error("No recipes found")
       }
 
       res.send(users)
       
    } catch (error) {
       console.log(error)
       res.send(404 || 404)
    }
 }