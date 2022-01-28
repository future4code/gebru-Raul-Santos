import React from 'react';
import styled from 'styled-components';

const CardGrand = styled.div`

display: flex;
align-items: center;
border: 1px solid black;
padding: 20px 10px;
margin-bottom: 10px;
height: 200px;
`
const ImagensGrandeCard = styled.img`

width: 70px;
    margin-right: 10px;
    border-radius: 50%;

`

function CardGrande(props) {
    return (
        <CardGrand >
            <ImagensGrandeCard src={ props.imagem } />
            <div>
                <h4>{ props.nome }</h4>
                <p>{ props.descricao }</p>
            </div>
        </CardGrand>
    )
}

export default CardGrande;