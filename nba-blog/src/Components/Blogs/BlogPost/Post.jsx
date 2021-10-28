import React from 'react';
import { CardImage } from './Media/CardMedia';
import { PostStyled } from './PostStyled';
import Ellipse from '../EL.svg';
import Trash from '../Trash.svg';
import Thumb from '../Thumb.svg';
// import Teams from '../BlogForm/Teams.jpg';
import moment from 'moment';
import { useDispatch } from 'react-redux';
import { deletePost, likePost } from '../../../actions/post';
import { useHistory } from 'react-router-dom';

const Post = ({ post, setCurrentId }) => {
  const history = useHistory();
  // user is coming from localstorage
  const user = JSON.parse(localStorage.getItem('profi'));
  const Likes = () => {
    if (post.likes.length > 0) {
      return post.likes.find((like) => like === user?.result._id) ? (
        <>
          <img src={Thumb} alt="" />
          &nbsp;
          {post.likes.length > 2
            ? `You and ${post.likes.length - 1} others`
            : `${post.likes.length} like${post.likes.length > 1 ? 's' : ''}`}
        </>
      ) : (
        <>
          <img src={Thumb} alt="" />
          &nbsp; {post.likes.length}{' '}
          {post.likes.length === 1 ? 'Like' : 'Likes'}
        </>
      );
    }
    return (
      <>
        <img src={Thumb} alt="" />
        &nbsp; Like
      </>
    );
  };
  const dispatch = useDispatch();
  const openPost = () => {
    // dispatch(getPost(post._id, history));

    history.push(`/blog/${post._id}`);
  };
  return (
    <PostStyled>
      <CardImage bg={post.selectedFile} />
      <div className="post-overlay">
        <h6>{post.name}</h6>
        <span> {moment(post.createdAt).fromNow()}</span>
      </div>
      {user?.result?._id === post?.creator && (
        <div className="button-overlay">
          <button onClick={() => setCurrentId(post._id)}>
            <img src={Ellipse} alt="" />
          </button>
        </div>
      )}

      <div onClick={openPost}>
        <div className="tags">
          <p className="tags-text">
            {post.tags.map((tag) => {
              return `#${tag}`;
            })}
          </p>
        </div>
        <h5 className="player-name">{post.title}</h5>
        <div className="post-body">
          <p>{post.message.substring(0, 200)}</p>
        </div>
      </div>
      <div className="post-actions">
        <button
          className="button-like"
          onClick={() => {
            dispatch(likePost(post._id));
          }}
        >
          <Likes />
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
