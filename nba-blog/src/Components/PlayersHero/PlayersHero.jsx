import React from "react";
import { PlayerHeroStyled } from "./PlayersHeroStyled";
import { Link } from "react-router-dom";
import MJK from "./svg/MJK.svg";
import ball from "./svg/Allen.svg";
import { gsap } from "gsap";
import { useEffect, useRef } from "react";
const PlayersHero = () => {
  const images = useRef();
  useEffect(() => {
    const kobe = images.current;
    gsap.to(kobe, {
      duration: 1,
      ease: "power2.out",
      // onRepeat: repeatFunction,
      yoyo: true,
      y: -50,
      repeat: -1,
    });
  }, []);
  return (
    <PlayerHeroStyled>
      <div className="ph-text">
        <h2>The league where legends live</h2>
        <p>
          The game has had over 4000 players in its 75 years, post about your
          favorite players
        </p>
        <div className="ph-text-button">
          <Link className="button-1" to="/auth">
            Signin 🏀
          </Link>
          <Link className="button-2" to="/blog">
            Blog 🏀
          </Link>
        </div>
      </div>
      <div className="ph-image">
        <img src={MJK} alt="" />
        <img src={ball} alt="" className="ball" ref={images} />
      </div>
    </PlayerHeroStyled>
  );
};

export default PlayersHero;
