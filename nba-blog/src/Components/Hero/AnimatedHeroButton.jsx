import React from "react";
import styled from "styled-components";
import ball from "../../img/basketball.svg";
const AnimatedButton = styled.button`
  padding-left: 0.9rem;
  background-color: #1d428a;
  padding: 0.6rem 1.5rem;
  font-family: inherit;
  font-family: inherit;
  color: #fff;
  /* border-radius: 4px; */
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
  border-bottom-left-radius: 0px;
  border-top-left-radius: 0px;
  outline: none;
  border: none;
  cursor: pointer;
  align-items: center;
  justify-content: space-between;
  position: relative;
  display: inline-block;
  /* display: flex; */
  /* align-items: center;
  justify-content: space-between; */
  position: relative;
  overflow: hidden;
  transition: all 0.4s ease-in-out;
  &:hover {
    background-color: #c8102e;
    .ball {
      transition: all 0.4s ease-in-out;
      transform: translateX(-120px);
    }
  }
  .ball {
    position: absolute;
    pointer-events: none;
    transition: all 0.4s ease-in-out;
    top: 0;
    right: 0;
  }
`;
const AnimatedHeroButton = ({ name }) => {
  return (
    <AnimatedButton>
      {name}
      <img src={ball} alt="" className="ball" />
    </AnimatedButton>
  );
};

export default AnimatedHeroButton;
