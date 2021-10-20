import React from "react";
import { InnerLayout } from "../../Layout/Layout";
import questions from "./data";
import { FAQStyled } from "./FaqStyled";
import Question from "./Question";
import JKL from "./svg/JKL.svg";
const Faq = () => {
  return (
    <FAQStyled>
      <InnerLayout>
        <div className="faq-text">
          <h1 className="faq-heading">
            Frequently <span>asked questions?</span>
          </h1>
          <p>
            Some questions that have been asked in the past and are still asked
          </p>
        </div>
        <div className="faq-main">
          <div className="questions-con">
            {questions.map((q) => {
              return <Question key={q.id} {...q} />;
            })}
          </div>
          <div className="faq-img">
            <img src={JKL} alt="" />
          </div>
        </div>
      </InnerLayout>
    </FAQStyled>
  );
};

export default Faq;
