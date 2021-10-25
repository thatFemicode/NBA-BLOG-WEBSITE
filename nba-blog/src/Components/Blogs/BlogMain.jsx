import React from 'react';
import { InnerLayout } from '../../Layout/Layout';
import { BlogMainStyled } from './BlogMainStyled';
import BlogNav from './Nav/BlogNav';
import Teams from './BlogForm/Teams.svg';
import BlogForm from './BlogForm/BlogForm';
import BlogSearch from './BlogSearch/BlogSearch';
import Post from './BlogPost/Post';
import { useSelector } from 'react-redux';
import SkeletonPost from './Skeleton/SkeletonPost';
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getPosts } from '../../actions/post';
// import {getPosts} from "./"
const Blogmain = () => {
  const [currentId, setCurrentId] = useState(null);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPosts());
  }, [currentId]);
  const posts = useSelector((state) => state.posts);
  console.log(posts);
  return (
    <BlogMainStyled>
      <BlogNav />
      <InnerLayout>
        <div className="blog-header">
          <div className="blog-header-form">
            <BlogForm currentId={currentId} setCurrentId={setCurrentId} />
            <BlogSearch />
          </div>
          <div className="blog-header-image">
            <img src={Teams} alt="" />
          </div>
        </div>
        <div className="blog-main">
          {!posts.length &&
            [1, 2, 3, 4, 5, 6, 7, 8].map((n) => <SkeletonPost key={n} />)}
          {posts.map((post) => {
            return (
              <Post key={post._id} post={post} setCurrentId={setCurrentId} />
            );
          })}

          {/* <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post /> */}
          {/* <SkeletonPost /> */}
        </div>
      </InnerLayout>
    </BlogMainStyled>
  );
};

export default Blogmain;
