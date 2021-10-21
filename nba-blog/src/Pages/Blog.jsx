import React from "react";
import BlogMain from "../Components/Blogs/BlogMain";
import { OuterLayout } from "../Layout/Layout";
import { BlogStyled } from "./Styled/BlogStyled";

const Blog = () => {
  return (
    <BlogStyled>
      <OuterLayout>
        <BlogMain />
      </OuterLayout>
    </BlogStyled>
  );
};

export default Blog;
