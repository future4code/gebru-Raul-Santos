// 1. O que o código abaixo está fazendo? Qual o resultado impresso no console?
    

    // let valor = 0
    // for(let i = 0; i < 5; i++) {
    //   valor += i
    // }
    // console.log(valor)

    // ele criou um loop para parar apenas quando o numero for menor que 5, e depois pediu para variavel valor somar com a variavel I

    // 2. Leia o código abaixo:
    

    // const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
    // for (let numero of lista) {
    //   if (numero > 18) {
    // 		console.log(numero)
    // 	}
    // }

    
    // a) O que vai ser impresso no console?
    
    // os numeros acima de 18 até 30
    
    // b) Se eu quisesse acessar o **índice** de cada elemento dessa lista, o `for...of...` é suficiente? Se sim, o que poderia ser usado para fazer isso?
     // colocar no if maior que 9, ele ira percorrer toda a lista

    //  3. Qual seria o resultado impresso no console, se o usuário digitasse o número `4` ?
    

    // const quantidadeTotal = Number(prompt("Digite a quantidade de linhas: "))
    // let quantidadeAtual = 0
    // while(quantidadeAtual < quantidadeTotal){
    //   let linha = ""
    //   for(let asteriscos = 0; asteriscos < quantidadeAtual + 1; asteriscos++){
    //     linha += "*"
    //   }
    //   console.log(linha)
    //   quantidadeAtual++
    // }

    //ele ficaria imprimiando linhas de asteriscos até chegar em 5 linhas, a cada linha aumentaria um asterisco

    // 1. Pergunte ao usuário quantos bichinhos de estimação ele tem e guarde esse dado em uma variável. 
    
//     let quantidadeBichinho = Number(prompt("Quantos Bichinhos você tem ?"))
  
//     let todosArray =[]

//     if (quantidadeBichinho === 0) {
//       console.log("Que pena ! Adote um animal !")
//         }

//      else 
//      for(let i = 0; i < quantidadeBichinho; i++){ 
//       let todosNovos = prompt("Digita ai um bicho")
 
//       todosArray = todosNovos
//       console.log(todosArray)
//  }

// 2. Considere que você tenha acesso a um `array`  (chamado de 'array original') que é composto somente de números. Baseando-se nisso, crie uma função para cada um dos itens abaixo, realizando as operações pedidas:
    
// a

// const arrayOriginal = [10,20,30,40,50,60]
// function imprimirTudo (array){

// for ( let imprirmir of array )
// console.log(imprirmir)

// }

// imprimirTudo(arrayOriginal)


// b

// const arrayOriginal = [10,20,30,40,50,60]
// function imprimirTudo (array){

// for ( let dividir of array){
//     console.log(dividir/10)
// }

// }

// imprimirTudo(arrayOriginal)

// c
// const arrayOriginal = [09,01,10,20,30,40,50,60]
// function imprimirPares (array) {
//   let arrayNumerosPares = []
//   for(let valor of array){
//     if(valor % 2 === 0){
//       arrayNumerosPares.push(valor)
//     }

//   }
//   console.log(arrayNumerosPares)
// }
// imprimirPares(arrayOriginal)

//d

// const arrayString = [10,35,42]

// function novoArray (arrayString){
// let texto = []
// let i = 0

// for (let txt of arrayString){
//     texto.push(`o elemento do index ${i} é ${txt} `) 
//     i++
//     console.log(texto)
// }

// }
// novoArray (arrayString)

//e

// const arrayString = [10,35,42]

// function valores (array){
// let valorMaximo = 42
// let valorMinimo = 10

// for (let valores of array)
// if (valorMaximo > valorMinimo){
//     console.log(valorMaximo) 
//     console.log(valorMinimo)

// }



// }

// valores(arrayString)

