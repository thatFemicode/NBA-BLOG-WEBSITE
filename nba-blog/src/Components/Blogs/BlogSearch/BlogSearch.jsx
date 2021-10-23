import React from "react";
import { BlogSearchStyled } from "./BlogSearchStyled";
import ChipInput from "material-ui-chip-input";
import PrimaryButton from "../../Button/PrimaryButton";
const BlogSearch = () => {
  return (
    <BlogSearchStyled>
      <ChipInput
        style={{ margin: "10px 0" }}
        // value={tags}
        // onAdd={handleAdd}
        // onDelete={handleDelete}
        label="Search Tags"
        variant="outlined"
      />
      <div className="blog-search-container-fields-content-input">
        <label htmlFor="tags">Search Posts</label>
        <input
          name="search"
          type="text"
          placeholder="Search posts via title"
          // value={form.fullName}
          //   required
        />
      </div>
      <PrimaryButton name={"Search"} />
    </BlogSearchStyled>
  );
};

export default BlogSearch;
