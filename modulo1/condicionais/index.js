// 1. Leia o código abaixo:
    
 
    // const respostaDoUsuario = prompt("Digite o número que você quer testar")
    // const numero = Number(respostaDoUsuario)
    
    // if (numero % 2 === 0) {
    //   console.log("Passou no teste.")
    // } else {
    //   console.log("Não passou no teste.")
    // }

    
    // // a) Explique o que o código faz. Qual o teste que ele realiza? 

    //  // se o numero que o usuario for divisivel por 2 passa no teste, se não for não passa

    // // b) Para que tipos de números ele imprime no console "Passou no teste"? 
    //    // que são divididos por 2

    
    // // c) Para que tipos de números a mensagem é "Não passou no teste"?
    // // que não são divididos por 2

    // 2. O código abaixo foi feito por uma pessoa desenvolvedora, contratada para automatizar algumas tarefas de um supermercado:
    

    // let fruta = prompt("Escolha uma fruta")
    // let preco
    // switch (fruta) {
    //   case "Laranja":
    //     preco = 3.5
    //     break;
    //   case "Maçã":
    //     preco = 2.25
    //     break;
    //   case "Uva":
    //     preco = 0.30
    //     break;
    //   case "Pêra":
    //     preco = 5.5
    //     break; // BREAK PARA O ITEM c.
    //   default:
    //     preco = 5
    //     break;
    // }
    // console.log("O preço da fruta ", fruta, " é ", "R$ ", preco)

    
    // // a) Para que serve o código acima?
    
    // //ele recebe a fruta do usuario e imprime o valor da mesma, caso de erro ele retorna o valor 5
    
    // // b) Qual será a mensagem impressa no console, se o valor de fruta for `"Maçã"`?
    // //2.25
    
    // // c) Considere que um usuário queira comprar uma `Pêra`, qual seria a mensagem impressa no console se retirássemos o `break` que está logo acima do `default` (o `break` indicado pelo comentário "BREAK PARA O ITEM c.")?
    // //mostrará o mesmo valor


    // 3. Leia o código abaixo:
    

    // const numero = Number(prompt("Digite o primeiro número."))
    
    // if(numero > 0) {
    //   console.log("Esse número passou no teste")
    // 	let mensagem = "Essa mensagem é secreta!!!"
    // }
    
    // console.log(mensagem)

    
    // a) O que a primeira linha está fazendo?

    //está comparando se o primeiro N° do usuario é maior que 0
    
    // b) Considere um usuário digitou o número 10. Qual será a mensagem do terminal? E se fosse o número -10?
     //passou no teste
    // c) Haverá algum erro no console? Justifique usando os conceitos de bloco ou escopo.
    //se o numero for menor que 0


    // 1. Faça um programa que pergunta ao usuário qual a idade dele e imprima no console se ele/ela pode dirigir (apenas maiores de idade).

    // // a) Faça um `prompt` para receber a idade do usuário e guarde em uma variável.
    // const numero = Number(prompt("Escreva sua idade"))
    // let = numero
    // // b) Garanta que essa variável é do tipo `Number`, você deve usar o cast para number para isso.
    
    // // c) Agora veja se essa idade do usuário corresponde à idade mínima que permite dirigir. Se sim, imprima no console `"Você pode dirigir"`, caso contrário, imprima `"Você não pode dirigir."`
    // if(numero > 18) {
    //     console.log("você pode dirigir")
    // }
    // else{ console.log("sem idade para dirigir")}

    // 2. Agora faça um programa que verifica que turno do dia um aluno estuda. Peça para digitar **M** (matutino) ou **V** (Vespertino) ou **N** (Noturno). Imprima no console a mensagem "Bom Dia!", "Boa Tarde!" ou "Boa Noite!". Utilize o bloco `if/else`
    
    // const turno = prompt("Escreva V para escolher (Vespertino) ou M para escolher (Matutino)").toUpperCase()
    // let = turno

    // if(turno === "V"){
    //     console.log("Boa tarde")
    // }
    //     if(turno === "M"){
    //         console.log("Bom dia")
    //     }
    //     if(turno == "N"){
    //         console.log("Boa noite")
    //     }
    //     else(console.log("Escolhe M, N ou V"))

    // 3. Repita o exercício anterior, mas utilizando a estrutura de `switch case` agora.

    // const turno = prompt("Escreva V para escolher (Vespertino) ou M para escolher (Matutino)").toUpperCase()
    
    // let imprimir

    // switch(turno){
    // case "M":
    // imprimir = "bom dia"
    // break;


    //     case "V":
    //     imprimir = "boa tarde"
    //     break;

  
    //         case "N":
    //         imprimir = "boa noite"
    //         break;

    // }
    //     console.log("bem vindo e " , imprimir)
   

    // 4. Considere a situação: você vai ao cinema com um amigo ou amiga, porém ele/ela só assistirá a um filme com você se ele for do gênero fantasia **e** se o ingresso está abaixo de 15 reais. Faça um código que pergunta ao usuário qual o gênero de filme que vão assistir e outra pergunta sobre o preço do ingresso, então verifique se seu amigo ou amiga vai topar assistir o filme. Caso positivo, imprima no console a mensagem: `"Bom filme!"`, caso contrário, imprima `"Escolha outro filme :("`

    // const tipodeFilme = prompt("Qual Genero de filme vão assistir ")
    // const preçoIngresso = Number(prompt("Qual o valor do ingresso?"))

    // if(preçoIngresso < 15 && tipodeFilme === "fantasia"){
    //     console.log("Bom Filme")
    // }
    // else (console.log("Escolha Outro Filme"))

    // 1. Modifique o código do exercício 4 de escrita de código para, antes de imprimir a mensagem `"Bom filme!"`, pergunte ao usuário, pelo `prompt` qual lanchinho ele vai comprar (pipoca, chocolate, doces, etc) e imprima no console as mensagens `"Bom filme!"` e `"Aproveite o seu [LANCHINHO]"`, trocando [LANCHINHO] pelo que o usuário colocou no input.
        
       

    // const tipodeFilme = prompt("Qual Genero de filme vão assistir ")
    // const preçoIngresso = Number(prompt("Qual o valor do ingresso?"))
    // const lanche = prompt("Qual lanche você gostária de comer ?")


    // if(preçoIngresso < 15 && tipodeFilme === "fantasia"){
    //     console.log("Bom Filme e aproveite sua" , lanche)
        
    // }
    // else (console.log("Escolha Outro Filme"))

    // 2. Você foi contratado para criar um sistema de vendas de ingressos de jogos de um estádio de futebol. Para esta compra, o usuário deve fornecer algumas informações:
    // - Nome completo;
    // - Tipo de jogo: IN indica internacional; e DO indica doméstico;
    // - Etapa do jogo: SF indica semi-final; DT indica decisão de terceiro lugar; e FI indica final
    // - Categoria: pode ser as opções 1, 2, 3 ou 4;
    // - Quantidade de ingressos
    
    
