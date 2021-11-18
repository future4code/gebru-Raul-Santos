// 1.  Indique todas as mensagens impressas no console, **SEM EXECUTAR o programa**.
    
    
    // let array
    // console.log('a. ', array)
    // resposta é a.  undefined

    // array = null
    // console.log('b. ', array)
    // resposta é b.  Null

    // array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
    // console.log('c. ', array.length)
    // Resposta é c. 11

    // let i = 0
    // console.log('d. ', array[i])
    // resposta é 3) 

    // array[i+1] = 19
    // console.log('e. ', array)
    // resposta é (11) [3, 19, 5, 6, 7, 8, 9, 10, 11, 12, 13]
    
    // const valor = array[i+6]
    // console.log('f. ', valor)
    // valor é 9

    // 2. Leia o código abaixo com atenção 
    
    
    // const frase = prompt("Digite uma frase")
    
    // console.log(frase.toUpperCase().replaceAll("A", "I"), frase.length)
    // reposta é SUBI NUM ÔNIBUS EM MIRROCOS 27
    
    // Qual será o valor impresso no console se a entrada do usuário for: `"Subi num ônibus em Marrocos"`?


    // 1. Faça um programa que pergunte ao usuário seu nome e seu e-mail. Em seguida, Imprima no console a seguinte mensagem:
    // O e-mail `emailDoUsuario` foi cadastrado com sucesso. Seja bem-vinda(o), `nomeDoUsuario`!
    
    // nome = prompt("Escreva seu nome")
    // email = prompt("Escreva seu E-mail")
    // console.log("O e-mail ",email ,"Foi cadastrado com Sucesso.", "Seja bem vindo(o)",nome)

    // 2. Faça um programa que contenha um array com 5 das suas comidas preferidas, armazenado em uma variável. Em seguida, siga os passos:
    // const comidas = ["lasanha","figado","churrasco","Macarrão","Galinha"]
    // a) Imprima no console o array completo
    //    console.log(comidas)
    // b) Imprima no console a mensagem "Essas são as minhas comidas preferidas: ", seguida por cada uma das comidas, **uma embaixo da outra**.
    // console.log("essas são minhas comidas favoritas:") 
    // console.log(comidas[0])
    // console.log(comidas[1])
    // console.log(comidas[2])
    // console.log(comidas[3])
    // console.log(comidas[4])
    // c) Aqui vai um desafio: pergunte ao usuário uma comida preferida. Troque a segunda comida da sua lista pela inserida pelo usuário. Imprima no consolea nova lista
    // let comidaPreferida = prompt("Qual sua Comida Favorita?")
    // comidas.splice(1,1 ,comidaPreferida)
    // console.log(comidas)


    // 3. Faça um programa, seguindo os passos:
    
    // a) Crie um array vazio e guarde-o em uma variável, chamada `listaDeTarefas`
    
    // listaDeTarefas = []
    // // b) Pergunte ao usuário 3 tarefas que ele precise realizar no dia e armazene-as, uma por uma, no array
    // let tarefa1 = prompt("insira a tarefa N° 1")
    // let tarefa2 = prompt("insira a tarefa N° 2")
    // let tarefa3 = prompt("insira a tarefa N° 3")
    // listaDeTarefas = [tarefa1,tarefa2,tarefa3]
    // // c) Imprima o array no console
    // console.log(listaDeTarefas)
    // // d) Peça ao usuário que digite o **índice** de uma tarefa que ele já realizou: 0, 1 ou 2 
    // insiraIndice = Number(prompt("Insira o numero do indice da suas tarefas"))
    // // e) Remova da lista o item de índice que o usuário escolheu.
    // listaDeTarefas.splice(insiraIndice,1)
    // // f) Imprima o array no console
    // console.log(listaDeTarefas)

    // // 1. Receba uma frase e retorne um array onde cada elemento é uma das palavras da frase, ignorando os espaços
    //   const frase = "uma vez flamengo, sempre flamengo"
    //   let fazendoUmaBagunca = frase.split(" ")
    //   console.log(fazendoUmaBagunca)   

    // // 2. Dado o array `["Banana", "Morango", "Abacaxi", "Laranja", "Ameixa"]`, faça um programa que acha o índice da palavra Abacaxi e imprime tanto o índice quanto o tamanho do array

    //   saladaDeFruta = ["Banana", "Morango", "Abacaxi", "Laranja", "Ameixa"]
    //   const acharAbacaxi = saladaDeFruta.indexOf("Abacaxi")
    //   console.log(acharAbacaxi, saladaDeFruta.length)
      