import React from "react";
import { useState } from "react";
import { QuestionStyled } from "./QuestionStyled";
import plus from "./svg/add.svg";
import minus from "./svg/sub.svg";
const Question = ({ title, description }) => {
  const [toggle, setToggle] = useState(false);

  const btnToggler = () => {
    setToggle(!toggle);
  };
  return (
    <QuestionStyled>
      <div className="toggle-title">
        <h4>{title}</h4>
        <button onClick={btnToggler}>
          {toggle ? (
            <img src={minus} alt="" className="button" />
          ) : (
            <img src={plus} alt="" className="button" />
          )}
        </button>
      </div>
      <div className="toggle-description">
        {toggle && <p className="description">{description}</p>}
      </div>
    </QuestionStyled>
  );
};

export default Question;
