import React from 'react';
import { LebronStyled } from './LebronStyled';
import { gsap } from 'gsap';
import { useEffect, useRef } from 'react';
const Lebron = ({ info }) => {
  const { name, nickname, position, body, belief, image, logo, team } = info;
  const images = useRef();
  useEffect(() => {
    const kobe = images.current;
    gsap.to(kobe, {
      duration: 1,
      ease: 'power2.out',
      // onRepeat: repeatFunction,
      yoyo: true,
      y: -20,
      repeat: -1,
    });
  }, []);
  return (
    <LebronStyled>
      <div className="lebron-text">
        <img src={logo} alt="" className="logo" />
        <h2>{name}</h2>
        <h1>{team}</h1>
        <p>Nickname: {nickname.join(', ')}</p>
        <p>Position: {position}</p>
        <p>{belief}</p>
        <p>{body}</p>

        <div className="nickname">
          {/* {nickname.map((name, index) => {
            return <p key={index}>{name},</p>;
          })} */}
        </div>
      </div>
      <div className="lebron-image">
        <img src={image} alt="" className="images" ref={images} />
      </div>
    </LebronStyled>
  );
};

export default Lebron;
