import React from 'react';
import styled from 'styled-components';

const ImagemBotao = styled.div`
    display: flex;
    align-items: center;
    border: 1px solid black;
    border-radius: 50px;
    width: 200px;
    padding: 15px 30px;
    margin: 10px auto;

`

const ImagemBotao1 = styled.div`
    width: 30px;
    margin-right: 10px;

`

function ImagemButton(props) {
    return (
        <ImagemBotao className="image-button-container">
            <ImagemBotao1 src={ props.imagem }/>
            <p>{ props.texto }</p>
        </ImagemBotao>

    )
}

export default ImagemButton;