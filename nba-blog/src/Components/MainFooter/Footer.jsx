import React from "react";
import { FootStyled } from "./MainFooterStyled";
import nba from "../../img/logo/nbalogo.svg";
import { InnerLayout, OuterLayout } from "../../Layout/Layout";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <FootStyled>
      <OuterLayout>
        <InnerLayout>
          <div className="footer-con">
            <div className="logo-con">
              <div className="logo-items">
                <Link to="/">
                  <img src={nba} alt="" />
                </Link>
              </div>
            </div>
            <ul className="bottom-nav">
              <div className="links1">
                <li className="feat">Features</li>
                <li>
                  <Link className="link-btn" to="/blog">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link className="link-btn" to="/players">
                    Players
                  </Link>
                </li>
                <li>
                  <Link className="link-btn" to="/features">
                    Team
                  </Link>
                </li>
              </div>
              <div className="links2">
                <li>
                  <Link className="link-btn" to="/gallery">
                    Gallery
                  </Link>
                </li>
              </div>
            </ul>
          </div>
        </InnerLayout>
      </OuterLayout>
    </FootStyled>
  );
};

export default Footer;
