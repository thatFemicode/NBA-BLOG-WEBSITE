import React from "react";
import styled from "styled-components";

const ButtonStyled = styled.button`
  font-size: 1rem;
  padding: 0.25rem 0.75rem;
  border-radius: 0.3rem;
  border-color: transparent;
  color: white;
  background-color: #000;
  cursor: pointer;
`;
const PrimaryButton = ({ name }) => {
  return <ButtonStyled>{name} 🏀</ButtonStyled>;
};

export default PrimaryButton;
