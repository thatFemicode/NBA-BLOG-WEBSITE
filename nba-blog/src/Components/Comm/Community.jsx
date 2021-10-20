import React from "react";
import { InnerLayout } from "../../Layout/Layout";
import Card from "./Card";
import { CommunityStyled } from "./CommunityStyled";
import content from "./content";
const Community = () => {
  return (
    <CommunityStyled>
      <InnerLayout>
        <div className="community-text">
          <h1>Community for basketball lovers</h1>
          <p>
            Talk about your favourite players, have conversations about who you
            think is the GOAT 🐐
          </p>
        </div>
        <div className="community-info">
          {content.map((item, index) => {
            return <Card key={index} item={item} />;
          })}
        </div>
      </InnerLayout>
    </CommunityStyled>
  );
};

export default Community;
