import React from "react";
import styled from "styled-components";
import { OuterLayout } from "../Layout/Layout";
import { PlayersStyled } from "./Styled/PlayersStyled";
import { TweenMax, TimelineMax, Power3, Power4 } from "gsap";
import { useRef, useEffect } from "react";
import Navbar from "../Components/Navbar/Navbar";
import Player from "../Components/Players/Player";
import Footer from "../Components/MainFooter/Footer";

const MainStyled = styled.div``;
const Players = () => {
  let screen = useRef(null);
  let body = useRef(null);
  useEffect(() => {
    const tl = new TimelineMax();
    tl.to(screen, {
      duration: 1.2,
      width: "100%",
      left: "0%",
      ease: Power3.easeInOut,
    });
    tl.to(screen, {
      duration: 1,
      left: "100%",
      ease: Power3.easeInOut,
      delay: 0.3,
    });
    tl.set(screen, { left: "-100%" });
    TweenMax.to(body, 0.3, {
      css: {
        opacity: "1",
        pointerEvents: "auto",
        ease: Power4.easeInOut,
      },
    }).delay(2);
    return () => {
      TweenMax.to(body, 1, {
        css: {
          opacity: "0",
          pointerEvents: "none",
        },
      });
    };
  }, []);
  return (
    <>
      <div className="load-container">
        <div className="load-screen3" ref={(el) => (screen = el)}></div>
      </div>
      <div data-barba="container" ref={(el) => (body = el)} className="Headd">
        <PlayersStyled>
          <OuterLayout>
            <MainStyled>
              <Navbar />
              <Player />
            </MainStyled>
          </OuterLayout>
          <Footer className="Headd " />
        </PlayersStyled>
      </div>
    </>
  );
};

export default Players;
