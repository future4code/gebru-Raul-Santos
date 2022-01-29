import React from 'react';
import styled from 'styled-components'

const Minicard = styled.div`
    display: flex;
    align-items: center;
    border: 1px solid black;
    padding: 20px 10px;
    margin-bottom: 10px;
    height: 200px;
`




function CardPequeno(props) {
    return (
        <Minicard className="Minicard-container">
            <img src={ props.imagem } />
            <div>
                
                <p>{ props.email }</p>
            </div>
        </Minicard>
    )
}

export default CardPequeno;