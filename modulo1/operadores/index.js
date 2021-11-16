    
                        //  Exercícios de interpretação de código
                                 
    // 1. Leia o código abaixo. Indique todas as mensagens impressas no console, **SEM EXECUTAR o programa**.
    
    // const bool1 = true
    // const bool2 = false
    // const bool3 = !bool2
    
    // let resultado = bool1 && bool2
    // console.log("a. ", resultado)
    // Resultado: (a.False)


    // resultado = bool1 && bool2 && bool3 
    // console.log("b. ", resultado)
    // Resultado: (b.False) 
    
    // resultado = !resultado && (bool1 || bool2) 
    // console.log("c. ", resultado)
    // Resultado: (c.True)
    
    // console.log("d. ", typeof resultado)
    // Resultado: (d. bolean)

    //  2. Seu colega se aproxima de você falando que o código dele não funciona como devia.  Vamos ajudá-lo: consegue perceber algum problema? O que será impresso no console? 
    
    
    // let primeiroNumero = Number(prompt("Digite um numero!"))
    // let segundoNumero =  Number(prompt("Digite outro numero!"))
    
    // const soma = primeiroNumero + segundoNumero
    
    // console.log(soma)

    // 3. Para o exercício anterior, sugira ao seu colega uma solução para que o valor impresso no console seja, de fato, a soma dos dois números.
    
    // let primeiroNumero = Number(prompt("Digite um numero!"))
    // let segundoNumero =  Number(prompt("Digite outro numero!"))
    
    // const soma = primeiroNumero + segundoNumero
    
    // console.log(soma)

                                      //Exercícios de escrita de código

    //   1. Faça um programa que:
    
    //   a) Pergunte a idade do usuário
        let idade_usuario
        idade_usuario = Number(prompt("Idade do Usuario"))                             
    //   b) Pergunte a idade do seu melhor amigo ou da sua melhor amiga
        let idade_melhor_amiga 
        idade_melhor_amiga = Number(prompt("Idade da melhor amiga"))                            
    //   c) **Imprima na console** a seguinte mensagem: "Sua idade é maior do que a do seu melhor amigo?", seguido pela resposta (`true` ou `false`)
        let maiorq = idade_usuario > idade_melhor_amiga
        console.log("Sua idade é maior que a do sua melhor amiga?")
        console.log(maiorq)                         
    //   d) **Imprima na console** a diferença de idade (não tem problema se sair um número negativo)
        console.log(idade_usuario - idade_melhor_amiga)                
    // 2. Faça um programa que:
    
    //   a) Peça ao usuário que insira um número **par**
        let numero_Par
        numero_Par = prompt("Insira um numero par")  
    
    //   b) Imprima na console **o resto da divisão** desse número por 2.
        let div = numero_Par / 2
        console.log(div)
    //   c) Teste o programa com diversos números pares. Você notou um padrão? Escreva em um comentário de código.
    //sempre retorna a metade
    //   d) O que acontece se o usuário inserir um número ímpar? Escreva em um comentário de código
    // ele me traz o numero fracionado
    
    // 3. Faça um programa que pergunte ao usuário sua idade em anos. Depois, imprima no console 
        let idade_user = Number(prompt("Qual Sua idade"))
        console.log(idade_user)
    // a) A idade do usuário em meses
        let meses_vida = 12 * idade_user
        console.log("Eu tenho",meses_vida ,"Meses")
    // b) A idade do usuário em dias
        let dias_vida = 365 * idade_user
        console.log("Eu tenho",dias_vida,"Dias")
    // c) A idade do u""suário em horas
        let horas_vida = 8760 * idade_user
        console.log("Eu tenho",horas_vida,"Horas")
    // 4. Faça um programa que pergunte ao usuário dois números. Em seguida, faça as operações e imprima no console as seguintes mensagens seguidas pelo `true` ou `false`:
    
        let num_1 = Number(prompt("Escreva um numero"))
        let num_2 = Number(prompt("Escreva um numero"))


    // O primeiro numero é maior que segundo? true
    maior_ = num_1 > num_2
    console.log("O primeiro numero é maior que segundo?", maior_)
    // O primeiro numero é igual ao segundo? false
    igual_ = num_1 === num_2
    console.log("O primeiro numero é igual ao segundo?",igual_)
    // O primeiro numero é divisível pelo segundo? true
    div_ = num_1 % num_2
    console.log("O primeiro numero é divisível pelo segundo?",!div_)
    // O segundo numero é divisível pelo primeiro? true
    div_2 = num_2 / num_1
    console.log("O segundo numero é divisível pelo primeiro?",div_2)

    
    //Desafios

    // 1. Para este exercício, será necessário o conhecimento das fórmulas para mudar a unidade de temperatura entre Graus Celsius(°C),  Graus Fahrenheit(°F) e Kelvin(K). Abaixo estão duas delas:
   

    // a) Calcule e mostre o valor de 77°F em  K, mostrando a unidade no console também.
    
        let fahrenheit_ = Number(prompt("Insira um valor em Fahrenheit"))
        conv_Kelvin = fahrenheit_ -32*(5/9) + 273.15
        console.log("o Numero em Kelvin ficou",conv_Kelvin)

    // b) Calcule e mostre o valor de 80°C em °F, mostrando a unidade no console também
        let celcius_ = Number(prompt("Insira um valor em Celcius"))
        conv_fahrenheit = celcius_ *(9/5) + 32
        console.log("o Numero em Celcius ficou",conv_fahrenheit)
    // c) Calcule e mostre o valor de 30°C em °F e K, mostrando as unidades no console também
        let celcius1_ = Number(prompt("Insira um valor em Celcius"))
        conv_fahrenheit = celcius1_ *(9/5) + 32
        console.log("o Numero em Celcius ficou",conv_fahrenheit)
        let celcius2_ = Number(prompt("Insira um valor em Celcius"))
        conv_kelvin = celcius2_ + 273,15
        console.log("o Numero em Kelvin ficou",conv_kelvin)
    