                  //    Exercícios de interpretação de código //

// 1. Analise o programa abaixo e diga o que será impresso no console, **SEM EXECUTAR o programa.**
    
//  let a = 10
//  let b = 10

//  console.log(b)

//  b = 5
//  console.log(a, b)

//resposta é (10 , 5)

//

//  2.Analise o programa abaixo e diga o que será impresso no console, SEM EXECUTAR o programa.

// let a = 10
// let b = 20
// c = a
// b = c
// a = b

// console.log(a, b, c)

// Resposta é (10 10 10)

//   3. Analise o programa abaixo, entenda o que ele faz e sugira melhores nomes para as variáveis. Lembre-se que devemos escolher nomes significativos, usar o padrão camelCase. Alem disso, os nomes não podem começar com números ou caracteres especiais.

// let horasTrabalhadas = prompt("Quantas horas você trabalha por dia?")
// let valorDia = prompt("Quanto você recebe por dia?")
// alert(`Voce recebe ${horasTrabalhadas/valorDia} por hora`)

// Efetuei a troca dos nomes das variaveis //

                    // Exercícios de escrita de código //


                                        
// 1.Construa um programa, seguindo os seguintes passos://

// a) Declare uma variável para armazenar um nome, sem atribuir um valor.
// let nome = "Raul"
// b) Declare uma variável para armazenar uma idade, sem atribuir um valor.
// let idade = "24"            
// c) Imprima na tela o tipo dessas variáveis que acabou de criar, usando o comando `typeof`.
// console.log(typeof nome)
// d) Reflita: por que esse tipo foi impresso? Escreva a resposta em um comentário de código.

// Apareceu undefind pois não coloquei nada dentro da variavel para o código typeof conseguir ler

// e) Pergunte ao usuário seu nome e sua idade, atribuindo esses dois valores às variáveis que acabou de criar.

// nome = prompt("Qual seu nome?")
// idade = prompt("Qual Sua idade?")
// console.log (nome, idade)

// 2.Escreva um programa que faça 3 perguntas de Sim ou Não, armazenado em uma variável. Por exemplo: "Você está usando uma roupa azul hoje?". Depois, siga os passos:

// a) Crie três novas variáveis, contendo as respostas
// let time = "sim"
// let cidade = "sim"
// let nome = "Não"
// b) Imprima na tela todas as perguntas seguidas por suas respectivas respostas.
// time = prompt("Você é Flamenguista ?")
// cidade = prompt("mora em parauapebas?")
// nome = prompt("seu nome é carlos ?")
// console.log(time,cidade,nome)

// 3.Suponha que temos duas variáveis a e b, cada uma com um valor inicial
// let a = 10
// let b = 25

// Agora, queremos trocar os valores delas, de forma que `a` passe a ter o valor de `b` e `b` passe a ter o valor de `a`. 

// Ou seja, no caso desse exemplo acima, `a` passaria a ser 25 e `b` passaria a ser 10.

let a = 10
let b = 25
c = a
d = b

// // Aqui faremos uma lógica para trocar os valores

// // Depois de trocados, teremos o seguinte resultado:
console.log("O novo valor de a é", d) // O novo valor de a é 25
console.log("O novo valor de b é", c) // O novo valor de b é 10

// Crie a lógica que deve ser inserida no código para que os valores de a e b sejam trocados, independente de qual valor essas variáveis assumam inicialmente (ou seja: não basta dizer que a = 25 e b = 10 porque se os valores iniciais mudarem, a lógica do seu programa teria que mudar também).
