```
function contaOcorrencias(arrayDeNumeros, numeroEscolhido){
  // Escreva seu código aqui
  let total = 0
  if(arrayDeNumeros.includes(numeroEscolhido)){
    for (const number of arrayDeNumeros) {
      if (number === numeroEscolhido){
        total ++
      }
    }
    return `O número ${numeroEscolhido} aparece ${total}x´
    else{
    return "numero não encontrado"
    }
    }
```

