import React from 'react';
import { PostDetailsStyled } from './PostDetailsStyled';
import BlogNav from '../../Nav/BlogNav';
// import Teams from '../../BlogForm/Teams.jpg';
import { InnerLayout } from '../../../../Layout/Layout';
import CommentSection from './Comment/CommentSection';
// import { useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getPost } from '../../../../actions/post';
import moment from 'moment';
const PostDetails = () => {
  const { post } = useSelector((state) => state.posts);
  const [poster, setPoster] = useState(post);
  // console.log(isLoading);
  console.log(post);
  const dispatch = useDispatch();
  // const history = useHistory();
  const { id } = useParams();
  useEffect(() => {
    dispatch(getPost(id));
    setPoster(post);
  }, [id]);
  return (
    <PostDetailsStyled>
      <BlogNav />
      <InnerLayout>
        <div className="detail-main">
          <div className="detail-main-left">
            <div className="detail-main-left-main">
              <div className="detail-main-left-main-image">
                <img src={post.selectedFile} alt="" />
              </div>
              <div className="detail-main-left-main-text">
                <p>Player name:{post.title || 'No Player Name'}</p>
                <p>
                  Posted by:{post.name || 'A random person just posted this'}
                </p>
                <p>{post.tags || 'No tags on this Post'}</p>
                <p>Posted: {moment(post.createdAt).fromNow()}</p>
              </div>
            </div>
            <div className="detail-main-left-comment">
              <CommentSection post={poster} />
            </div>
          </div>
          <div className="detail-main-right">
            <h2>Post Details</h2>
            <p>{post.message || 'Post details does not exist'}</p>
          </div>
        </div>
      </InnerLayout>
    </PostDetailsStyled>
  );
};

export default PostDetails;
