import React from "react";
import { InnerLayout } from "../../Layout/Layout";
import { FooterStyled } from "./FooterStyled";
import { Link } from "react-router-dom";
import AnimatedHeroButton from "../Hero/AnimatedHeroButton";
import Nba from "./img/nba-logo.svg";
import SVL from "./img/SVL.svg";
const FooterMain = () => {
  return (
    <FooterStyled>
      <InnerLayout>
        <div className="footer-con">
          <div className="footer-left">
            <img src={SVL} alt="" />
          </div>
          <div className="logo-con">
            <div className="logo-items">
              <div className="logo-form">
                <h1 className="logo-text">
                  Love the game, Signup today and discuss 🏀
                </h1>
                <form action="">
                  <input
                    type="email"
                    placeholder="email address"
                    className="input"
                    disabled
                  />
                  <Link to="/auth">
                    <AnimatedHeroButton name={"Get Access 🏀"} />
                  </Link>
                </form>
              </div>
              <div className="logo-main">
                <img src={Nba} alt="" />
              </div>
            </div>
          </div>
        </div>
      </InnerLayout>
    </FooterStyled>
  );
};

export default FooterMain;
