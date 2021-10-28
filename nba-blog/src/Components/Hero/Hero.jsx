import React from 'react';
import { InnerLayout } from '../../Layout/Layout';
import { HeroStyled } from './HeroStyled';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { useEffect, useRef } from 'react';
import AnimatedHeroButton from './AnimatedHeroButton';
// import kyrie from "../../img/kyrie.webp";
// import logo from "../../img/nba logo.svg";
// import Giannis from "./Giannis.svg";
// import ball from "../../img/basketballs.svg";
import ball from './Allen.svg';
// import Players from "./Players.svg";
// import Rim from "./Rimd.svg";
import Kukoc from './Kukoc.svg';
const Hero = () => {
  const images = useRef();
  useEffect(() => {
    const kobe = images.current;
    gsap.to(kobe, {
      duration: 1,
      ease: 'power2.out',
      // onRepeat: repeatFunction,
      yoyo: true,
      y: -50,
      repeat: -1,
    });
  }, []);
  return (
    <HeroStyled>
      <InnerLayout>
        <div className="hero">
          <div className="hero-main">
            <div className="hero-text">
              <h1>
                Lover of the game? join a community where you get to talk about
                your favourite teams and players
              </h1>
              <p>
                As the league celebrates its 75th Anniversary entering into this
                season, join a community where you can talk, post about your
                favorite players, teams comment on other people favourite
                players and also like. Sign up today and join the community.
              </p>
            </div>
            <div className="hero-form">
              <form action="">
                <input
                  type="email"
                  placeholder="email address"
                  className="input"
                  disabled
                />
                <Link to="/auth">
                  <AnimatedHeroButton name={'Get Access 🏀'} />
                </Link>
              </form>
            </div>
          </div>
          <div className="hero-image">
            <img src={Kukoc} className="hero-image-img" alt="" />
            <img src={ball} className="hero-image-ball" alt="" ref={images} />
          </div>
        </div>
      </InnerLayout>
    </HeroStyled>
  );
};

export default Hero;
