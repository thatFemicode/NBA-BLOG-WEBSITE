import React from 'react';
import { CommentStyled } from './CommentStyled';
import { useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { commentPost } from '../../../../../actions/post';
// import PrimaryButton from '../../../../Button/PrimaryButton';
const CommentSection = ({ post }) => {
  console.log(post);
  const [comments, setComments] = useState(post?.comments);
  // console.log(comments);
  const [comment, setComment] = useState('');
  const dispatch = useDispatch();
  const commentsRef = useRef();
  //   When we click comments we have to dispatch a new action to out redux
  //   out comments also need to contain the information about who is creating that comment so we will be grabbing user
  //   from local storage

  const user = JSON.parse(localStorage.getItem('profi'));
  const handleClick = async () => {
    // //   HWo wrote that comment and the comment itself below
    // const finalComment = `${user.result.name} : ${comment}`;
    // const newComments = await dispatch(commentPost(finalComment, post._id));
    // setComments(newComments);
    // setComment('');
    // // Whwn do we want to scrol immeduiately we havse a new comment
    // commentsRef.current.scrollIntoView({ behavior: 'smooth' });
    const newComments = await dispatch(
      commentPost(`${user?.result?.name}: ${comment}`, post._id)
    );

    setComment('');
    setComments(newComments);

    commentsRef.current.scrollIntoView({ behavior: 'smooth' });
  };
  if (!comments) return 'No comments';
  return (
    <CommentStyled>
      <div className="comments-container">
        <h6>Users Comments</h6>
        {!comments ? (
          <>
            <h2>No comments</h2>
          </>
        ) : (
          comments.map((c, i) => {
            return (
              <h5 className="comment" key={i}>
                <strong className="comment-name">{c.split(': ')[0]}</strong>
                {c.split(':')[1]}
              </h5>
            );
          })
        )}
        {/* {comments.map((c, i) => (
          <h3 key={i}>
            <strong>{c.split(':')[0]}</strong>
            {c.split(':')[1]}
          </h3>
        ))} */}
        <div ref={commentsRef} />
      </div>
      {user?.result?.name && (
        <div className="comments-box">
          <h6>Post your comments</h6>
          <div className="comments-box-input">
            <textarea
              name=""
              id=""
              rows="5"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            ></textarea>
            <button onClick={handleClick}>Comment 🏀</button>
            {/* <PrimaryButton name={'Comment 🏀'} onClick={handleClick} /> */}
          </div>
        </div>
      )}
    </CommentStyled>
  );
};

export default CommentSection;
