import React from "react";
import { TeamStyled } from "./GreatTeamStyled";

const GreatTeams = ({ teams }) => {
  const { name, image, body } = teams;
  return (
    <TeamStyled>
      <div className="team-text">
        <h2>{name}</h2>
        <p>{body}</p>
      </div>
      <div className="team-image">
        <img src={image} alt="" />
      </div>
    </TeamStyled>
  );
};

export default GreatTeams;
