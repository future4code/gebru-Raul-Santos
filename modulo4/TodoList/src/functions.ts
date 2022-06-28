import {connection} from "./conections";

export type Usuario = {
    id: string,
    name: string,
    nickname: string,
    email: string
}

  const toDoList = "ToDoListUsuario"
  
  export const createUser = async (user:Usuario): Promise<void> => {

    await connection

    .insert(user)
    .into(`${toDoList}`);
}; 