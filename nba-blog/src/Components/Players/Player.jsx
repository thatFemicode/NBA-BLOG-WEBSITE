import React from "react";
import { InnerLayout } from "../../Layout/Layout";
import PlayersHero from "../PlayersHero/PlayersHero";
import { PlayerStyled } from "./PlayerStyled";
import KAS from "./svg/KAS.svg";
const Player = () => {
  return (
    <PlayerStyled>
      <InnerLayout>
        <PlayersHero />
        <section className="players">
          <div className="players-main">
            <div className="players-main-text">
              <h1>The NBA Brotherhood</h1>
              <div className="players-main-text-main">
                <p>
                  The brotherhood in the league is nothing compared to other
                  sports where players are friends and family off the court but
                  as the ball goes up on the court, they compete to the highest
                  level and bring out the best from each other.
                </p>
                <p>
                  There have been some great players in the league from, players
                  that do not get half the recogition they are meant to, some
                  players like Bill Walton, John Stockton, Karl Malone and
                  someother greats. The main picture on this page depicts the
                  real relationship between players except when you offend
                  russel westbrook 🤣, that man finna hate you
                </p>
              </div>
            </div>
            <div className="players-main-stats">
              <h1>Some Stats of great players in this league</h1>
              <div className="players-main-stats-flex">
                <div className="players-img">
                  <img src={KAS} alt="" />
                </div>
                <div className="players-main-stats-main">
                  <div className="stats">
                    <h3>Most tripple doubles in legue history</h3>
                    <p>Russel Westbrook 🏀</p>
                  </div>
                  <div className="stats">
                    <h3>Most Three pointer in league history</h3>
                    <p>Ray Allen 🏀</p>
                  </div>
                  <div className="stats">
                    <h3>Most championships in league history</h3>
                    <p>
                      Bill Russel <span>11</span> 🏀
                    </p>
                  </div>
                  <div className="stats">
                    <h3>Most assist in league history</h3>
                    <p>John Stockton 🏀</p>
                  </div>
                  <div className="stats">
                    <h3>Most dominat Player in league history</h3>
                    <p>Shaquille O'Neal 🏀</p>
                  </div>
                  <div className="stats">
                    <h3>Most Minutes played in league history</h3>
                    <p>Kareem Abdul-Jabaar 🏀</p>
                  </div>
                  <div className="stats">
                    <h3>Most blocks in league history</h3>
                    <p>Hakeem Olajuwon 🏀</p>
                  </div>
                  <div className="stats">
                    <h3>Most steals in league history</h3>
                    <p>John Stockton 🏀</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </InnerLayout>
    </PlayerStyled>
  );
};

export default Player;
