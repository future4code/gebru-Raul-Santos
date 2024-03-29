import React, { useState } from "react";
import styled from "styled-components";

const CommentContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 5px;
`;

const InputComment = styled.input`
  width: 100%;
  margin-right: 5px;
`;

export const SecaoComentario = (props) => {
  const [inputValue, setInputValue] = useState("");

  const onChangeComentario = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <CommentContainer>
      <InputComment
        placeholder={"Comentário"}
        value={inputValue}
        onChange={onChangeComentario}
      />
      <button
        onClick={() => {
          props.enviarComentario(inputValue);
        }}
      >
        Enviar
      </button>
    </CommentContainer>
  );
};

export default SecaoComentario;
