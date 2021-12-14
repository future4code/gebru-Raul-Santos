// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {
    return  array.length

}

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
  return array.reverse()
}

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
array.sort((a, b) => a - b)
return array
}
// EXERCÍCIO 04
function retornaNumerosPares(array) {

let numeroPar = []
    for(let i of array)
    if(i % 2 === 0){
    numeroPar.push(i)
    }
    return numeroPar
}
// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
let numeroP = array.filter(pares => (pares%2) === 0).map(pares => 
    (pares**2))
    return numeroP
}
// EXERCÍCIO 06
function retornaMaiorNumero(array) {
  let retornaMaior = Math.max.apply(null,array)
  return retornaMaior 
}
// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {

let objetos = {
maiorNumero:[],
maiorDivisivelPorMenor:[],
diferenca:[],
}

objetos.maiorNumero = Math.max(num1,num2)
objetos.maiorDivisivelPorMenor =  objetos.maiorNumero % Math.min(num1, num2)  === 0
objetos.diferenca = objetos.maiorNumero - Math.min(num1, num2)

return objetos

}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
let numerosPar = []
// for(let i of n){
// if(i%2 ===0)
// numerosPar.push(i)
// }
// return numerosPar
// }
for (let i = 0; numerosPar.length < n; i ++){
if(i % 2 === 0){
  numerosPar.push(i)
}
}
return numerosPar
}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {
if(ladoA === ladoB && ladoA === ladoC){
 return "Equilátero"
}

else if(ladoA === ladoB || ladoA === ladoC || ladoB === ladoC){
 return"Isósceles"
}
else{
  return"Escaleno"
}

}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
  let novoArray =[]
  let novoArrayF = []
  let novoArray1 = Math.max.apply(null,array)
  let novoArray2 = Math.min.apply(null,array)
  novoArray.pop(novoArray1,novoArray2)
  let novoArrayF1 = Math.max.apply(null,array)
  let novoArrayF2 = Math.min.apply(null,array)
  novoArrayF.push(novoArrayF1, novoArrayF2)
  return novoArrayF
  
}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {

  return `Venha assistir ao filme ${filme.nome}, de ${filme.ano}, dirigido por ${filme.diretor} e estrelado por ${filme.atores.join(", ")}.`}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {

//   let pessoa ={
//   nome: [],
//   idade: [],
//   endereco:[],
//   email:[],
//   }
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
const autorizar = pessoas.filter( (pessoa)=> {
  return pessoa.idade > 14 && pessoa.altura > 1.5 && pessoa.idade <60
})
 return autorizar
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
const autorizar = pessoas.filter( (pessoa)=> {
  return pessoa.idade <= 14 || pessoa.altura < 1.5 || pessoa.idade >=60
})
 return autorizar

}
// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {
  const desconto = contas.map((desc)=>{
    return {...desc, saldoTotal: (desc.saldoTotal)}
})
const descont1 = contas.map((desc1)=>{
  return {...desc1, compras: (desc1.compras)}
})
  return desconto - descont1

}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
  
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
   
}