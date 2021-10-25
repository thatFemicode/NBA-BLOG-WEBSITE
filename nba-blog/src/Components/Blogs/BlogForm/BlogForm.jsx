import React from 'react';
import FileBase from 'react-file-base64';
import { BlogFormStyled } from './BlogFormStyled';
import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import { createPost, updatePost } from '../../../actions/post';
const BlogForm = ({ currentId, setCurrentId }) => {
  const post = useSelector((state) =>
    currentId ? state.posts.find((post) => post._id === currentId) : null
  );
  const dispatch = useDispatch();
  const [postData, setPostData] = useState({
    title: '',
    message: '',
    tags: '',
    selectedFile: '',
  });
  useEffect(() => {
    if (post) setPostData(post);
  }, [post]);
  console.log(postData);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (currentId) {
      dispatch(updatePost(currentId, postData));
    } else {
      dispatch(createPost(postData));
    }
    clear();
  };
  const clear = () => {
    setCurrentId(null);
    setPostData({
      title: '',
      message: '',
      tags: '',
      selectedFile: '',
    });
  };
  return (
    <BlogFormStyled>
      <h2>League of legends</h2>
      <div className="blog-form-container-fields">
        <div className="blog-form-container-fields-content">
          <form autoComplete="off" noValidate onSubmit={handleSubmit}>
            <h6>Create a post of your favourite player</h6>
            <div className="blog-form-container-fields-content-input">
              <label htmlFor="playerName">Player Name</label>
              <input
                type="text"
                name="title"
                placeholder="Player Name"
                value={postData.title}
                required
                onChange={(e) =>
                  setPostData({ ...postData, title: e.target.value })
                }
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
                value={postData.message}
                onChange={(e) =>
                  setPostData({ ...postData, message: e.target.value })
                }
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
                value={postData.tags}
                required
                onChange={(e) =>
                  setPostData({ ...postData, tags: e.target.value })
                }
              />
            </div>
            <FileBase
              type="file"
              multiple={false}
              onDone={({ base64 }) =>
                setPostData({ ...postData, selectedFile: base64 })
              }
            />
            <div className="blog-form-container-fields-content-button">
              <button>Submit</button>
              <button onClick={clear}> Clear</button>
            </div>
          </form>
        </div>
      </div>
    </BlogFormStyled>
  );
};

export default BlogForm;
