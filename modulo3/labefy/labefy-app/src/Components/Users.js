import React from "react";
import styled from "styled-components";
import axios from "axios";
import UserDetail from "./UserDetail";




const Header = {  Headers: {
  Authorization: "Raul-Cezar-Gebru"

}}


export default class mylist extends React.Component{

state ={
  playListCriada:[]
}

componentDidMount() {
  this.playListAdicionada();

};



playListAdicionada = () => {

  const url = 'https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists'

  axios
  .get(url,Header)
  .then(res => {this.state({playListCriada: res.data.result.list})})

  .catch(error =>{
    return alert ("Erro ao Criar PlayList")
  })

};

render() {

  const novaPlaylist = this.state.playListCriada.map((list) => {
    return (
      <div key={list.id}>
        <span>{list.name}</span>

        
        </div>
    )


  });

  return(

    <div>

      <h1>Sua PlayList</h1>
      {novaPlaylist}


    </div>




  )




}};
  
