import React from "react";
import AnimatedHeroButton from "../Hero/AnimatedHeroButton";
import { StyledCard } from "./CardStyled";
import PrimaryButton from "./CommunityButton";
import CommunityButton from "./CommunityButton";

const Card = ({ item }) => {
  const { id, title, body, icon, image, images, about } = item;
  return (
    <StyledCard
      column={id === 1 && "1/-1"}
      padding={id !== 1 && "1.5rem"}
      paddingD={id !== 1 && "2.5rem"}
      paddingH={id !== 1 && "3.75rem"}
      bgColor={id === 1 && " #1d428a"}
      bgColor3={id === 3 && "#fff"}
      color={id === 3 && "#000"}
      paddingRl={id === 1 && "1.5rem"}
      paddingRlm={id === 1 && "2.5rem"}
      paddingRlh={id === 1 && "3.75rem"}
      paddingB={id === 1 && "10rem"}
      paddingBm={id === 1 && "15rem"}
      paddingBd={id === 1 && "8rem"}
      paddingT={id === 1 && "2.5rem"}
      paddingTm={id === 1 && "3.75rem"}
      paddingTh={id === 1 && "5rem"}
    >
      <div className="card">
        <div className="card-main">
          <div className="card-image">
            <img src={icon} alt="" />
          </div>
          <div className="card-text">
            <h1>{title}</h1>
            <p>{body}</p>
            <PrimaryButton name={title} />
          </div>
        </div>
        <div className="card-img">
          <img src={image} alt="" className="balls" />
          <img src={image} alt="" className="balls" />
          <img src={image} alt="" className="balls" />
        </div>
      </div>
    </StyledCard>
  );
};

export default Card;
