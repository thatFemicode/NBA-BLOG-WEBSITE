import React from "react";
import { PostDetailsStyled } from "./PostDetailsStyled";
import BlogNav from "../../Nav/BlogNav";
import Teams from "../../BlogForm/Teams.jpg";
import { InnerLayout } from "../../../../Layout/Layout";
import CommentSection from "./Comment/CommentSection";

const PostDetails = () => {
  return (
    <PostDetailsStyled>
      <BlogNav />
      <InnerLayout>
        <div className="detail-main">
          <div className="detail-main-left">
            <div className="detail-main-left-main">
              <div className="detail-main-left-main-image">
                <img src={Teams} alt="" />
              </div>
              <div className="detail-main-left-main-text">
                <p>Player name:Andrew Wiggins</p>
                <p>Posted by:Andrew Wiggins</p>
                <p>#Dubnation</p>
                <p>Posted 24days ago</p>
              </div>
            </div>
            <div className="detail-main-left-comment">
              <CommentSection />
            </div>
          </div>
          <div className="detail-main-right">
            <h2>Post Details</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
              natus laudantium similique debitis maiores autem aliquid
              obcaecati, sint nostrum illum delectus sunt, ab ut cumque sed et,
              nulla consectetur voluptatibus explicabo. Aliquid rerum ratione
              sit, voluptatem maxime recusandae totam mollitia officiis
              necessitatibus doloremque provident, ex, accusantium repudiandae
              molestiae nostrum molestias. Explicabo quidem facilis fugiat
              incidunt! Aperiam ipsam quam explicabo rem, laboriosam similique
              autem aliquid mollitia voluptate. Nostrum maiores deserunt quia
              exercitationem fuga numquam eligendi quo amet debitis laudantium
              suscipit corporis nam laboriosam, quasi fugit illum quis eius
              dolorem, temporibus cum, qui odio dolore minus earum. Qui, modi
              atque? Tempore vel illo nostrum sunt sequi omnis, facilis dolor
              eligendi vero eius ullam recusandae maiores natus! Odit dolor
              culpa totam praesentium vero quibusdam iusto quasi nesciunt
              laborum! Aperiam autem accusamus illum eligendi. Vitae quas, sit
              placeat incidunt doloribus fugiat ipsam eos minima culpa alias
              sunt laboriosam. Atque nam porro, reprehenderit cum expedita
              corrupti sit nostrum, aspernatur quibusdam excepturi voluptas,
              natus placeat sint nemo voluptates quod libero quisquam laboriosam
              architecto minima. Consequuntur eveniet beatae obcaecati vero
              assumenda, praesentium impedit aspernatur est commodi recusandae.
              Sapiente labore unde optio dolorum accusantium nemo atque. Quo
              mollitia incidunt deserunt vel sint eius amet numquam blanditiis.
              Magnam, est.
            </p>
          </div>
        </div>
      </InnerLayout>
    </PostDetailsStyled>
  );
};

export default PostDetails;
