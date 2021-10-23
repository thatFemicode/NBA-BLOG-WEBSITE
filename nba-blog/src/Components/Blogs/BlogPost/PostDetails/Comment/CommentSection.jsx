import React from "react";
import { CommentStyled } from "./CommentStyled";
import PrimaryButton from "../../../../Button/PrimaryButton";
const CommentSection = () => {
  return (
    <CommentStyled>
      <div className="comments-container">
        <h6>Users Comments</h6>
      </div>
      <div className="comments-box">
        <h6>Post your comments</h6>
        <div className="comments-box-input">
          <textarea name="" id="" rows="5"></textarea>
          <PrimaryButton name={"Comment 🏀"} />
        </div>
      </div>
    </CommentStyled>
  );
};

export default CommentSection;
