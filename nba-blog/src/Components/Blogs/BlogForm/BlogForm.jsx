import React from "react";
import FileBase from "react-file-base64";
import { BlogFormStyled } from "./BlogFormStyled";

const BlogForm = () => {
  return (
    <BlogFormStyled>
      <FileBase type="file" multiple={false} />
    </BlogFormStyled>
  );
};

export default BlogForm;
