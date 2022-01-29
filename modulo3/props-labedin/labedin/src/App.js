import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import CardPequeno from './components/CardPequeno/CardPequeno';
import ImagemButton from './components/ImagemButton/ImagemButton';
import Raul from './Img/Raul.jpg'
import Emails from './Img/email.png'
import Endereço from './Img/Endereco.png'
import Nasa from './Img/Nasa.png'
import Facebook from './Img/Facebook.png'
import Twitter from './Img/Twitter.png'



function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem={Raul} 
          nome="Raul Cezar" 
          descricao="Oi, eu sou o Raul, Tenho 24 anos e sou desenvolvedor Full-Stack."
        /> 
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />
      </div>
      
      <div classeName="Page-section-Container">

      <CardPequeno
          imagem={Emails}  
          email="Email: raulcezarhaha@gmail.com."
       />
      </div>

            <div classeName="Page-section-Container">

      <CardPequeno
          imagem={Endereço}  
          email="Rua: Lima Sobrinho, Liberdade 2."
       />
      </div>

      

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem="https://s3.amazonaws.com/future4.com.br/static/headf4-c492117ca2373dc85ca81bf715b3dc2a.png" 
          nome="Labenu" 
          descricao="Aluno da Lebenu S2!" 
        />
        
        <CardGrande 
          imagem={Nasa} 
          nome="NASA" 
          descricao="Apontando defeitos." 
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem={Facebook} 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem={Twitter}
          texto="Twitter" 
        />        
      </div>
    </div>
  );
}

export default App;
