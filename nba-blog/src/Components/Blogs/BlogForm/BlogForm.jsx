import React from "react";
import FileBase from "react-file-base64";
import { BlogFormStyled } from "./BlogFormStyled";

const BlogForm = () => {
  return (
    <BlogFormStyled>
      <h2>League of legends</h2>
      <div className="blog-form-container-fields">
        <div className="blog-form-container-fields-content">
          <form autoComplete="off">
            <h6>Create a post of your favourite player</h6>
            <div className="blog-form-container-fields-content-input">
              <label htmlFor="fullName">Player Name</label>
              <input
                name="firstName"
                type="text"
                placeholder="Player Name"
                // value={form.fullName}
                required
              />
            </div>
            <div className="blog-form-container-fields-content-input">
              <label htmlFor="fullName">Post</label>
              <textarea
                type="text"
                name="message"
                placeholder="Post Details"
                cols="29"
                rows="4"
                required
              ></textarea>
              {/* <input
            name="firstName"
            type="text"
            placeholder="First Name"
            // value={form.fullName}
            required
          /> */}
            </div>
            <div className="blog-form-container-fields-content-input">
              <label htmlFor="tags">Tags</label>
              <input
                name="tags"
                type="text"
                placeholder="Add team Tags"
                // value={form.fullName}
                required
              />
            </div>
            <FileBase type="file" multiple={false} />
            <div className="blog-form-container-fields-content-button">
              <button>Submit</button>
              <button>Clear</button>
            </div>
          </form>
        </div>
      </div>
    </BlogFormStyled>
  );
};

export default BlogForm;
