import knex from "knex";
import dotenv from "dotenv";
import { Request, Response } from "express";
// import getActorById from "./functions";
// import {connection} from "./conections";
// import {app} from "./servidor"



// dotenv.config();


// type Transaction =[0,1,2,3]

// class UserAccount {
//   private cpf: string;
//   private name: string;
//   private age: number;
//   private balance: number = 0;
//   private transactions: Transaction[] = [];

//   constructor(
//      cpf: string,
//      name: string,
//      age: number,
//   ) {
//      console.log("Chamando o construtor da classe UserAccount")
//      this.cpf = cpf;
//      this.name = name;
//      this.age = age;
//      console.log(age)
     
//   }

// }


// class Transaction {
//  private description:string;
//  private Valores:number;
//  private date:string;

// constructor(

//   description:string,
//   Valores:number,
//   date:string,

// )

// {
//   this.description = description
//   this.Valores = Valores,
//   this.date = date

// }

// }

type UserAccount = [1,2,3]

class Bank {
  private accounts: UserAccount[];

  constructor(accounts: UserAccount[]) {
    this.accounts = accounts;
  }

}

