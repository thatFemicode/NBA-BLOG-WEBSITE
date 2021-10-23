import React from "react";
import { InnerLayout } from "../../Layout/Layout";
import { BlogMainStyled } from "./BlogMainStyled";
import BlogNav from "./Nav/BlogNav";
import Teams from "./BlogForm/Teams.svg";
import BlogForm from "./BlogForm/BlogForm";
import BlogSearch from "./BlogSearch/BlogSearch";
import Post from "./BlogPost/Post";
const Blogmain = () => {
  return (
    <BlogMainStyled>
      <BlogNav />
      <InnerLayout>
        <div className="blog-header">
          <div className="blog-header-form">
            <BlogForm />
            <BlogSearch />
          </div>
          <div className="blog-header-image">
            <img src={Teams} alt="" />
          </div>
        </div>
        <div className="blog-main">
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
        </div>
      </InnerLayout>
    </BlogMainStyled>
  );
};

export default Blogmain;
