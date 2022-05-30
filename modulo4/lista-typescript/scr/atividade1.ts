const exer1 = (nome:string,data:string):string =>{

    const arraydata : string[] = data.split("/");
    


    return(`"Olá me chamo ${nome}, nasci no dia} do mês de ${arraydata[0]} do ano de ${arraydata[1]}"`)


}

exer1("Raul","21/02/1997")
console.log(exer1)