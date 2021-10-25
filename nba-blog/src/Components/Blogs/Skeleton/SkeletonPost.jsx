import React from 'react';
import styled from 'styled-components';
import SkeletonElement from './SkeletonElement';
import Shimmer from './Shimmer';
const SkeletonPostStyled = styled.div`
  margin: 20px auto;
  padding: 10px 15px;
  border-radius: 4px;
  position: relative;
  overflow: hidden;
  width: 100%;
  /* &.skeleton {
    background: #777;
  } */
`;
const SkeletonPost = () => {
  return (
    <SkeletonPostStyled className="">
      <div className="skeleton-posts">
        <SkeletonElement type="thumbnail" />
        <SkeletonElement type="text" />
      </div>
      <Shimmer />
    </SkeletonPostStyled>
  );
};

export default SkeletonPost;
