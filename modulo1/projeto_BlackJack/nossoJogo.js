                 //********************************  // Parte de Boas Vindas // //********************************

       console.log("Boas Vindas ao jogo de Blackjack")

   
       if(confirm("Quer inicar uma nova rodada?")){
          confirm === "OK"
          console.log("Bom jogo")
                alert("bom jogo")
         }
         else{
            console.log("Fim de jogo")
            alert("fim de jogo")
         }
         
          //********************************  // Parte Comprar Cartas // //********************************
         const user = comprarCarta(); 

      //    console.log(user.texto) 

      //    console.log(user.valor) 

         const maquin = comprarCarta(); 

      //    console.log(maquin.texto) 

      //    console.log(maquin.valor) 

      const user1 = comprarCarta(); 

      //    console.log(user.texto) 

      //    console.log(user.valor) 

         const maquin1 = comprarCarta(); 

      //    console.log(maquin.texto) 

      //    console.log(maquin.valor) 


            //********************************  // Parte Usuario // //********************************
    let naipedeCarta = user.texto
    let naipedeCarta1 = user1.texto
    let valordeCarta = user.valor
    let valordeCarta1 = user1.valor
    somarUserValor = user.valor + user1.valor
    let usuario = valordeCarta1 + valordeCarta

    console.log("usuario recebe Carta: " + naipedeCarta + " e " + naipedeCarta1 + " " + " com valor " + somarUserValor)
                                 
             //********************************  // Parte Maquina // //********************************
    let naipedeCartaM = maquin.texto
    let naipedeCartaM1 = maquin1.texto
    let valordeCartaM = maquin.valor
    let valordeCartaM1 = maquin1.valor
    somarUserValorM = maquin.valor + maquin1.valor
    let maquina = valordeCarta1 + valordeCarta

    console.log("Maquina recebe Carta: " + naipedeCartaM + " e " + naipedeCartaM1 + " " + " com valor " + somarUserValorM)


            
             //********************************  // Parte Condicional // //********************************


if( somarUserValor > somarUserValorM){
      console.log("Usuario venceu")
}
else if( somarUserValor < somarUserValorM){
      console.log("Maquina Venceu")
}
else if( somarUserValor === somarUserValorM){
      console.log("Empate")
}
