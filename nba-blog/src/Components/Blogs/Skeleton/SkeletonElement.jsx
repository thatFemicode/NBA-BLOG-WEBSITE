import React from 'react';
import styled from 'styled-components';
const SkeletonStyled = styled.div`
  .skeleton {
    background: #ddd;
    overflow: hidden;
    margin: 10px 0;
    border-radius: 4px;

    &.thumbnail {
      width: 100%;
      min-height: 150px;
      background: #ddd;
    }
    &.text {
      width: 100%;
      min-height: 100px;
    }
  }
`;
const SkeletonElement = ({ type }) => {
  const classes = `skeleton ${type}`;
  return (
    <SkeletonStyled>
      <div className={classes}></div>
    </SkeletonStyled>
  );
};

export default SkeletonElement;
