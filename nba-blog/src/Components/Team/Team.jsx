import React from "react";
import { InnerLayout } from "../../Layout/Layout";
import { TeamStyled } from "./TeamS";
import { Link } from "react-router-dom";
import Trophy from "./Trophy.svg";
import content from "./data";
import MainTeam from "./Main/MainTeam";
import AnimatedHeroButton from "../Hero/AnimatedHeroButton";

const Team = () => {
  return (
    <TeamStyled>
      <InnerLayout>
        <div className="team-hero">
          <div className="team-hero-text">
            <h2>
              30 Teams, <br /> One game One ball Who will be crowned champions?
            </h2>
            <p>
              with 30 teams in the NBA, they all compete fro the reward at the
              end of the season, the Larry Obrien Trophy
            </p>
            <div className="team-hero-text-button">
              <Link className="button-1" to="/auth">
                Signin 🏀
              </Link>
              <Link className="button-2" to="/blog">
                Blog 🏀
              </Link>
            </div>
          </div>
          <div className="team-hero-img">
            <img src={Trophy} alt="" />
          </div>
        </div>
        <div className="teams">
          <h2>Teams in the National Basketball Association</h2>
          <div className="teams-img">
            {content.map((item, index) => {
              return <MainTeam team={item} key={item.id} />;
            })}
          </div>
        </div>
        <div className="nba">
          <h2>Start posting today, it is the NBA.</h2>
          <p> Catch your favorite games on league pass</p>
          <form action="">
            <input
              type="email"
              placeholder="email address"
              className="input"
              disabled
            />
            <Link to="/auth">
              <AnimatedHeroButton name={"Get Access 🏀"} />
            </Link>
          </form>
        </div>
      </InnerLayout>
    </TeamStyled>
  );
};

export default Team;
