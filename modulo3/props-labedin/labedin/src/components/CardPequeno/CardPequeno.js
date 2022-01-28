import React from 'react';
import './CardPequeno.css'
import styled from 'styled-components'

function CardPequeno(props) {
    return (
        <div className="Minicard-container">
            <img src={ props.imagem } />
            <div>
                
                <p>{ props.email }</p>
            </div>
        </div>
    )
}

export default CardPequeno;