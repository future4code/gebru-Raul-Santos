// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  // implemente sua lógica aqui
  altura = prompt("Escreva altura")
  largura = prompt("Escreva largura") 
  console.log(altura * largura)
}

// EXERCÍCIO 02
function imprimeIdade() {
  // implemente sua lógica aqui
 anoAtual = prompt("Escreva o ano atual")
 anoNascimento = prompt("Escreva seu ano de Nascismento")
 console.log(anoAtual-anoNascimento)
}

// EXERCÍCIO 03
 function calculaIMC(peso, altura) {
// implemente sua lógica aqui
 
 return peso/(altura*altura).toFixed(3)
 
}
// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  // implemente sua lógica aqui
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."
  let nome = prompt("Escreva seu nome")
  let idade = prompt("Escreva sua idade")
  let email = prompt("Escreva seu E-mail")
  console.log("Meu nome é " + nome + ", tenho " + idade + " anos, e o meu email é "  + email +".") 
  return nome,idade,email
}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  // implemente sua lógica aqui
 let cor1 = prompt("Escreve cor 1")
 let cor2 = prompt("Escreve cor 2")
 let cor3 = prompt("Escreve cor 3")
let array = [cor1, cor2, cor3]
 console.log(array)
}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  // implemente sua lógica aqui
  tudoGrande = string.toUpperCase()
  return tudoGrande
}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui
  lucro = custo / valorIngresso
  return lucro
}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui
 tamanho1 = string1.length
 tamanho2 = string2.length
 return tamanho1 === tamanho2
}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui
 retornando1 = array
 return retornando1[0]
}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui
 retornUltimo = array.slice(-1)
 return retornUltimo[0]
}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui
let copiaArray = array.slice()
copiaArray[0] = array[array.length -1]
copiaArray[array.length -1] = array[0]
return copiaArray

}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui
 txt1 = string1.toUpperCase()
 txt2 = string2.toUpperCase()
 return txt1 === txt2
}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui
  let anoAtual = prompt("Escreva o ano atual")
  let anoNascimento = prompt("Escreva ano de Nascimento")
  let AnoCadastroCarteira = prompt("Ano de cadastro da CNH")
  

}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui

}