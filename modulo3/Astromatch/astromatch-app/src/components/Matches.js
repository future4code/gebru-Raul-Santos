import React, { useState, useEffect } from 'react'
import axios from 'axios'
import {Container, Header, Div, List, FooterDiv} from '../Styles/Matche'
import { Alert } from './clear'
import AstromatchLogo from '../img/fogo.png'
import Logo from '../img/casa.png'
import Chat from '../img/icon.png'
import Bin from '../img/vasoura.png'


const Matches = (props) => {
  const [matches, setMatches] = useState([]);

  useEffect(() => {
    getMatches(props.matches);
  }, [props.matches]);

  const getMatches = () => {
    axios
      .get("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/julio-martins-gebru/matches")
      .then((res) => setMatches(res.data.matches))
      .catch((err) => console.log(err));
  };

  const clear = () => {
    axios

      .put("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/julio-martins-gebru/clear")
      .then(() => getMatches())
      Alert.fire({
        icon: 'error',
        title: 'Lista de Matches deletada!',
        width: 300,
        color: '#716add',
        
        backdrop: `
          rgba(0,0,123,0.4)
          
        `
      })
      .catch((err) => console.log(err));
  };

  const seeMatches = matches.map((person) => {
    return (
      <List>
        <img src={person.photo} alt={person.name} />
        <p>{person.name}</p>
      </List>
    );
  });

  return (
      <div>
        <Container>
            <Header>
                <a  onClick={() => props.changePages() }><img src={ Logo } /></a>
                <img src={ AstromatchLogo } />

                <a><img src={ Chat} /></a>
            </Header>
            <Div>
                { seeMatches }
            </Div>
            </Container>
            <FooterDiv>
                <a onClick={ clear }><img src={ Bin }/></a>
            </FooterDiv>
    </div>
  );
};

export default Matches; 