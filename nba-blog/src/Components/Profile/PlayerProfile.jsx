import React from 'react';
import { PlayerStyled } from './PlayerProfileStyled';
// import bgCircle from "../../img/lines.svg";
import { InnerLayout } from '../../Layout/Layout';
import content from './data';
import { useState, useEffect } from 'react';
import Kobe from './Kobe/Kobe';
import Lebron from './Lebron/Lebron';
import Kareem from './Kareem/Kareem';
import Jordan from './Jordan/Jordan';
import Steph from './Steph/Steph';
const PlayerProfile = () => {
  const [info, setInfo] = useState(content);
  const [value, setValue] = useState(info[0]);
  const renderData = () => {
    if (value === info[0]) {
      return <Lebron info={info[0]} />;
    } else if (value === info[1]) {
      return <Kobe info={info[1]} />;
    } else if (value === info[2]) {
      return <Steph info={info[2]} />;
    } else if (value === info[3]) {
      return <Jordan info={info[3]} />;
    } else if (value === info[4]) {
      return <Kareem info={info[4]} />;
    }
  };
  return (
    <PlayerStyled>
      <InnerLayout>
        <div className="player-text">
          <h1>Player Profiles</h1>
          <p>
            Have a look at some of the accomplished players in the league in
            different "eras"
          </p>
        </div>
        <div className="tabs-container">
          <div className="btn-con">
            {content.map((item, index) => {
              return (
                <button
                  key={item.id}
                  className={`tabs-btn ${
                    info[index] === value && 'active-btn'
                  } `}
                  onClick={() => {
                    setValue(info[index]);
                  }}
                >
                  {item.name}
                </button>
              );
            })}
          </div>
          <div className="player-prof">{renderData()}</div>
        </div>
      </InnerLayout>
    </PlayerStyled>
  );
};

export default PlayerProfile;
