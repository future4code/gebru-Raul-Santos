enum Setores {
    MARKETING = "marketing",
    VENDAS = "vendas",
    FINANCEIRO = "financeiro",
}

type Funcionarios = {
    nome: string
    salário: number,
    setor: Setores,
    presencial: boolean
}

const listaColaboradores: Funcionarios[] = [{
    nome: "Raul",
    salário: 8100,
    setor: Setores.MARKETING, 
    presencial: true 
},{
    nome: "Carlos",
    salário: 9130, 
    setor: Setores.VENDAS, 
    presencial: false
},{ 
    nome: "Salete",
    salário: 2200, 
    setor: Setores.FINANCEIRO, 
    presencial: true
},{ 
    nome: "Pedro",
    salário: 3654, 
    setor: Setores.MARKETING, 
    presencial: false
}]

const Pessoalmente = (listaColaboradores: Funcionarios[]): any => {
    const presencial: Funcionarios[] = listaColaboradores.filter((pres) => {
        if(pres.setor === Setores.MARKETING && pres.presencial === true) {
            return listaColaboradores
        }
        return presencial
    })
}

console.log(Pessoalmente(listaColaboradores)) 

