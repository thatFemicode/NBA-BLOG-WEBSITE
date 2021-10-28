import React from 'react';
import FileBase from 'react-file-base64';
import { BlogFormStyled } from './BlogFormStyled';
import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import { createPost, updatePost } from '../../../actions/post';
import { useHistory } from 'react-router-dom';

const BlogForm = ({ currentId, setCurrentId }) => {
  // console.log(currentId);
  const history = useHistory();
  const post = useSelector((state) =>
    currentId ? state.posts.posts.find((post) => post._id === currentId) : null
  );
  // console.log(post);
  const user = JSON.parse(localStorage.getItem('profi'));
  const dispatch = useDispatch();
  const [postData, setPostData] = useState({
    title: '',
    message: '',
    tags: '',
    selectedFile: '',
  });
  const clear = () => {
    setCurrentId(0);
    setPostData({ title: '', message: '', tags: [], selectedFile: '' });
  };
  // useEffect(() => {
  //   // console.log(postData);
  //   if (post) setPostData(post);
  //   // console.log(postData);
  // }, [post]);
  useEffect(() => {
    // if (!post?.title) clear();
    console.log(!post?.title);
    if (post) setPostData(post);
  }, [post]);
  // console.log(postData);
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   // 1st thing done on this after branch has been pushed to master
  //   if (currentId) {
  //     dispatch(updatePost(currentId, { postData, name: user?.result.name }));
  //   } else {
  //     dispatch(createPost({ ...postData, name: user?.result.name, history }));
  //     // note from the above user will be gotten from local torage
  //   }
  //   clear();
  // };
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (currentId === 0) {
      dispatch(createPost({ ...postData, name: user?.result?.name }, history));
      clear();
    } else {
      dispatch(
        updatePost(currentId, { ...postData, name: user?.result?.name })
      );
      clear();
    }
  };
  // const clear = () => {
  //   setCurrentId(null);
  //   setPostData({
  //     title: '',
  //     message: '',
  //     tags: '',
  //     selectedFile: '',
  //   });
  // };
  // if (!user?.result?.name) {
  //   return <h6>You have to Signup or Signin to create a post</h6>;
  // }
  return (
    <BlogFormStyled>
      <h2>League of legends</h2>
      {!user?.result?.name ? (
        <>
          <div className="main-text">
            <h2 className="authentication-text">
              You have to Signin or Signup to create a post
            </h2>
            <p>
              You still have the ability to search through the posts for your
              favourite player
            </p>
          </div>
        </>
      ) : (
        <div className="blog-form-container-fields">
          <div className="blog-form-container-fields-content">
            <form autoComplete="off" noValidate onSubmit={handleSubmit}>
              <h6>
                {currentId
                  ? 'Edit your post'
                  : 'Create a post of your favourite player'}
              </h6>
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
      )}
    </BlogFormStyled>
  );
};

export default BlogForm;
