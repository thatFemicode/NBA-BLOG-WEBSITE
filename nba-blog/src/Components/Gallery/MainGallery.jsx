import React from "react";
import { MainGalleryStyled } from "./GMainStyled";
import players from "./GreatPlayers/data";
import GreatPlayers from "./GreatPlayers/GreatPlayers";
import teams from "./GreatTeams/data";
import GreatTeams from "./GreatTeams/GreatTeams";

const MainGallery = () => {
  return (
    <MainGalleryStyled>
      <h2>Take a look at some of the games finest 🏀</h2>
      <div className="great-players">
        <div className="players">
          {players.map((player, index) => {
            return <GreatPlayers players={player} key={player.id} />;
          })}
        </div>
      </div>
      <h2>Teams that ran the league 🏀</h2>
      <p className="team-p">
        The League has had almost the same teams in its 75 years but here are
        some teams that ran the league
      </p>
      <div className="great-teams">
        <div className="teams">
          {teams.map((team, index) => {
            return <GreatTeams teams={team} key={team.id} />;
          })}
        </div>
      </div>
    </MainGalleryStyled>
  );
};

export default MainGallery;
