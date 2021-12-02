// 1.  Leia o código abaixo
    

    // const usuarios = [
    //   { nome: "Amanda Rangel", apelido: "Mandi" },
    //   { nome: "Laís Petra", apelido: "Laura" },
    //   { nome: "Letícia Chijo", apelido: "Chijo" }
    // ]
    
    // const novoArrayA = usuarios.map((item, index, array) => {
    //    console.log(item, index, array)
    // })

    // // a) O que vai ser impresso no console?
    
    // // nome e aplelidos listados no objeto

    // 2. Leia o código abaixo
    

    // const usuarios = [
    //   { nome: "Amanda Rangel", apelido: "Mandi" },
    //   { nome: "Laís Petra", apelido: "Laura" },
    //   { nome: "Letícia Chijo", apelido: "Chijo" },
    // ]
    
    // const novoArrayB = usuarios.map((item, index, array) => {
    //    return item.nome
    // })
    
    // console.log(novoArrayB)

    
    // a) O que vai ser impresso no console?

    // retorna apenas o nome do objetos

    // 3. Leia o código abaixo
    

    // const usuarios = [
    //   { nome: "Amanda Rangel", apelido: "Mandi" },
    //   { nome: "Laís Petra", apelido: "Laura" },
    //   { nome: "Letícia Chijo", apelido: "Chijo" },
    // ]
    
    // const novoArrayC = usuarios.filter((item, index, array) => {
    //    return item.apelido !== "Chijo"
    // })
    
    // console.log(novoArrayC)

    
    // a) O que vai ser impresso no console?

    // vai ser impresso apenas o nome e apelidos que não contenham chijo na aba apelidos


    // // 1. Dado o seguinte array de cachorrinhos que são clientes de um pet shop, realize as operações pedidas nos itens abaixo utilizando as funções de array **map** e **filter:**
    
    // const pets = [
    //    { nome: "Lupin", raca: "Salsicha"},
    //    { nome: "Polly", raca: "Lhasa Apso"},
    //    { nome: "Madame", raca: "Poodle"},
    //    { nome: "Quentinho", raca: "Salsicha"},
    //    { nome: "Fluffy", raca: "Poodle"},
    //    { nome: "Caramelo", raca: "Vira-lata"},
    // ]

    
    
    
        
    
    // a) Crie um novo array que contenha apenas o nome dos doguinhos
     
    // const apenasDog = pets.map((dog)=> {
    //     return dog.nome 


    // })
    //  console.log(apenasDog)


    
    // b) Crie um novo array apenas com os [cachorros salsicha]

    //    const apenasSalsicha = pets.filter((salsicha) =>{
    //    return salsicha.raca === "Salsicha"  

    //    })
    //   console.log(apenasSalsicha)
      
    // c) Crie um novo array que possuirá mensagens para enviar para todos os clientes que são poodles. A mensagem deve ser: "Você ganhou um cupom de desconto de 10% para tosar o/a `[NOME]`!"

    //  const clientesPoodles = pets.filter((desconto) =>{
    //      if (desconto.raca === "Poodle"){
    //          console.log(`Desconto para você ${desconto.nome}`)
    //      }
    //     return desconto.raca

    //  } )

    

    // 2. Dado o seguinte array de produtos, realize as operações pedidas nos itens abaixo utilizando as funções de array **map** e **filter:**
    
 
    const produtos = [
       { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
       { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
       { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
       { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
       { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
       { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
       { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
       { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
       { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
       { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
    ]


    
    // a) Crie um novo array que contenha apenas o nome de cada item

//     const apenasNome = produtos.map((nome) =>{
//         return nome.nome
//     })

// console.log(apenasNome)
    
    // b) Crie um novo array que contenha um objeto com o nome e o preço de cada item, aplicando 5% de desconto em todos eles
     
    //  const desconto = produtos.map((desconto, nome) =>{
    //   return desconto.nome + " " + desconto.preco * 95/100

      

    //  })
    //  console.log(desconto)





    // c) Crie um novo array que contenha apenas os objetos da categoria Bebidas

    // const apenasBebidas = produtos.filter((bebidas) => {
    // return bebidas.categoria === "Bebidas"

    // })
  
    // console.log(apenasBebidas)

    // d) Crie um novo array que contenha apenas os objetos cujo nome contenha a palavra "Ypê"
   
//     const ApenasPalavraYpe = produtos.filter((procurar) => {
//     return procurar.nome.includes("Ypê")

//     })
//    console.log(ApenasPalavraYpe)
        
    
    // e) Crie um novo array onde cada item é uma frase "Compre [NOME] por [PREÇO]". Esse array deve conter frases apenas dos itens cujo nome contenha a palavra "Ypê"
    
 
    // produtos.filter(item => 
    //     item.nome.includes("Ypê"))
    // .map(item => 
    //     console.log(`compre ${item.nome} por ${item.preco}`))   
