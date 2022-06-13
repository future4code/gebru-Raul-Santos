export type Clientes = {
    id:any,
    name: string,
    cpf: string,
    aniversario: string,
    valor: number,
    statement: Transaction[]
};

export type Transaction = {
    valor: number,
    date: string,
    descrição:string
};

export enum Operação {
    Pagamento = "Pagamento de conta",
    TrasferirID = "Transferencia paga",
    RecerberTransferencia= "Transferência recebida", 
    Deposito = "Depósito"
};





export const bancoDados: Clientes[]= [
    {   
        id:455755,
        name: "Raul Santos",
        cpf: "027.422.292.21",
        aniversario: "01/02/1995",
        valor: 2545,
        statement: [
            {
                valor: 188,
                date: "08/02/2021",
                descrição: Operação.Pagamento
            },
            {
                valor: 5500,
                date: "23/11/2019",
                descrição: Operação.Pagamento
            },
            {
                valor: 3000,
                date: "16/04/2002",
                descrição: Operação.Deposito
            },
            {
                valor: 1000,
                date: "05/01/2011",
                descrição: Operação.Deposito
            }
        ]
    },
    {
        id:45445,
        name: "Eliane Silva dos Santos",
        cpf: "454.788.787.24",
        aniversario: "02/12/1974",
        valor:10054,
        statement: [
            {
                valor: 15045,
                date: "08/11/2022",
                descrição: Operação.Deposito
            },
            {
                valor: 47598,
                date: "06/03/2082",
                descrição: Operação.RecerberTransferencia
            },
            {
                valor: 50045,
                date: "06/01/2022",
                descrição: Operação.RecerberTransferencia
            },
            {
                valor: 11250,
                date: "29/05/2025",
                descrição: Operação.RecerberTransferencia
            }
        ]
    },

]; 