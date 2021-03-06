import React from 'react';
import { KareemStyled } from './KareemStyled';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
const Kareem = ({ info }) => {
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
    <KareemStyled>
      <div className="kareem-text">
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
      <div className="kareem-image">
        <img src={image} alt="" className="images" ref={images} />
      </div>
    </KareemStyled>
  );
};

export default Kareem;
