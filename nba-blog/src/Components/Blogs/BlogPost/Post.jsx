import React from "react";
import { CardImage } from "./Media/CardMedia";
import { PostStyled } from "./PostStyled";
import Ellipse from "../EL.svg";
import Trash from "../Trash.svg";
import Thumb from "../Thumb.svg";
import Teams from "../BlogForm/Teams.jpg";
const Post = () => {
  return (
    <PostStyled>
      <CardImage bg={Teams} />
      <div className="post-overlay">
        <h6>Maya David</h6>
        <span>23 days ago</span>
      </div>
      <div className="button-overlay">
        <button>
          <img src={Ellipse} alt="" />
        </button>
      </div>
      <div className="tags">
        <p className="tags-text">#Suns</p>
      </div>
      <h5 className="player-name">Guy</h5>
      <div className="post-body">
        <p>Me</p>
      </div>
      <div className="post-actions">
        <button className="button-like">
          <img src={Thumb} alt="" /> Like
        </button>
        <button className="button-delete">
          <img src={Trash} alt="" />
        </button>
      </div>
    </PostStyled>
  );
};

export default Post;
