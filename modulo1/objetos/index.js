// 1.  Leia o código abaixo
    
    
    // const filme = {
    // 	nome: "Auto da Compadecida", 
    // 	ano: 2000, 
    // 	elenco: [
    // 		"Matheus Nachtergaele", "Selton Mello", "Denise Fraga", 
    // 		"Virginia Cavendish"
    // 		], 
    // 	transmissoesHoje: [
    // 		{canal: "Telecine", horario: "21h"}, 
    // 		{canal: "Canal Brasil", horario: "19h"}, 
    // 		{canal: "Globo", horario: "14h"}
    // 		]
    // }
    
    // console.log(filme.elenco[0])
    // console.log(filme.elenco[filme.elenco.length - 1])
    // console.log(filme.transmissoesHoje[2])

    
    // a) O que vai ser impresso no console?
    //no primeiro console temos o nome - Matheus nachtergaele
    //no segundo console temos denise fraga
    //no terceiro console temos canal globo as 14

    // 2. Leia o código abaixo
    

    // const cachorro = {
    // 	nome: "Juca", 
    // 	idade: 3, 
    // 	raca: "SRD"
    // }
    
    // const gato = {...cachorro, nome: "Juba"}
    
    // const tartaruga = {...gato, nome: gato.nome.replaceAll("a", "o")}
    
    // console.log(cachorro)
    // console.log(gato)
    // console.log(tartaruga)
        
    // a) O que vai ser impresso no console?
    //no primeiro console temos juca , idade 3, SRD
    //no segundo console temos juba , idade 3, SRD
    //no terceiro console temos jubo , idade 3, SRD
    
    // b) O que faz a sintaxe dos três pontos antes do nome de um objeto?
    //ela copia o objeto 

    // 3. Leia o código abaixo
    
    
    // function minhaFuncao(objeto, propriedade) {
    // 	return objeto[propriedade]
    // }
    
    // const pessoa = {
    //   nome: "Caio", 
    //   idade: 23, 
    //   backender: false
    // }
    
    // console.log(minhaFuncao(pessoa, "backender"))
    // console.log(minhaFuncao(pessoa, "altura"))
    
    
    // a) O que vai ser impresso no console?
    //apenas o backender, não temos altura dentro do objeto
    
    // b) Explique o valor impresso no console. Você sabe por que isso aconteceu?
    //não temos dentro do objeto (altura)

    
    
    
    
    
    // 1. Resolva os passos a seguir: 
    
    // a) Crie um objeto. Ele deve conter duas propriedades: nome (string) e apelidos (um array que sempre terá exatamente **três apelidos**). Depois, escreva uma função que recebe como entrada um objeto e imprime uma mensagem no modelo abaixo**:** 
    
//     // // Exemplo de entrada
//     // const pessoa = {
//     //    nome: "Amanda", 
//     //    apelidos: ["Amandinha", "Mandinha", "Mandi"]
//     // }
    
//    const pessoa = {
//        nome: "Raul",
//        apelidos: ["Cabeção","luar","pudge"],
//        } 
    
//        const consolidacao=(apelidostop)=> {
//        const frase = `oi meu nome é ${pessoa.nome}, mas você pode me chamar de: ${pessoa.apelidos[1]}`
//        console.log(frase)
        

    
     
//     }
//     consolidacao(pessoa)
  
        
    
    
//     // b) Agora, usando **o operador spread**, crie um novo objeto mantendo o valor da propriedade nome, mas com uma nova lista de três apelidos. Depois, chame a função feita no item anterior passando como argumento o novo objeto
    
//  const novoapelido ={
//    ...consolidacao,
//    apelidos:["berlin","sumurai","cavalo" ],

//  }

// console.log(novoapelido)

// 2. Resolva os passos a seguir: 
    
    // a) Crie dois objetos diferentes com as seguintes propriedades: nome, idade e profissão. 
    const objeto ={
    nome: "Bruno",
    idade:"23",
    profissão: "instrutor"
    }

    const objeto1 ={
        nome: "Raul",
        idade:"24",
        profissão: "aluno"
    }

    // b) Escreva uma função que receba esses objetos e retorne um array com as seguintes informações:
     const retornartudo=(obejeto) => {
     console.log(`${objeto.nome}, ${objeto.nome.length}, ${objeto.profissão}, ${obejeto.profissão.length}`)

     } 
     retornartudo(objeto)
        
   