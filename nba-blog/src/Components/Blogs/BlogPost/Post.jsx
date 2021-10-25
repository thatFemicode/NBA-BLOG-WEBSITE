import React from 'react';
import { CardImage } from './Media/CardMedia';
import { PostStyled } from './PostStyled';
import Ellipse from '../EL.svg';
import Trash from '../Trash.svg';
import Thumb from '../Thumb.svg';
import Teams from '../BlogForm/Teams.jpg';
import moment from 'moment';
import { useDispatch } from 'react-redux';
import { deletePost, likePost } from '../../../actions/post';
const Post = ({ post, setCurrentId }) => {
  const dispatch = useDispatch();
  return (
    <PostStyled>
      <CardImage bg={post.selectedFile} />
      <div className="post-overlay">
        <h6>Maya David</h6>
        <span> {moment(post.createdAt).fromNow()}</span>
      </div>
      <div className="button-overlay">
        <button onClick={() => setCurrentId(post._id)}>
          <img src={Ellipse} alt="" />
        </button>
      </div>
      <div className="tags">
        <p className="tags-text">
          {post.tags.map((tag) => {
            return `#${tag}`;
          })}
        </p>
      </div>
      <h5 className="player-name">{post.title}</h5>
      <div className="post-body">
        <p>{post.message}</p>
      </div>
      <div className="post-actions">
        <button
          className="button-like"
          onClick={() => {
            dispatch(likePost(post._id));
          }}
        >
          <img src={Thumb} alt="" /> Like {post.likeCount}
        </button>
        <button
          className="button-delete"
          onClick={() => {
            dispatch(deletePost(post._id));
          }}
        >
          <img src={Trash} alt="" />
        </button>
      </div>
    </PostStyled>
  );
};

export default Post;
