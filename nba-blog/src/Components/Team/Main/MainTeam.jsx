import React from "react";
import { MainTeamStyled } from "./MainTeamStyled";
const MainTeam = ({ team }) => {
  const { image } = team;
  return (
    <MainTeamStyled>
      <img src={image} alt="" />
    </MainTeamStyled>
  );
};

export default MainTeam;
