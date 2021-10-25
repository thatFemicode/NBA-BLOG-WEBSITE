import styled, { keyframes } from 'styled-components';
const loading = keyframes`
from {
    left:-20px;
} to {
    left:100%
}
`;
const StyledSkeleton = styled.div`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  box-shadow: 1px 1px 20px rgba(0, 0, 0, 0.2);
  border-radius: 4px;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    display: block;
    position: absolute;
    left: -200px;
    top: 0;
    height: 100%;
    width: 200px;
    background: linear-gradient(to right, #fff 0%, #f7f7f7 50%, #fff 100%);
    animation: ${loading} 1000ms ease-in-out infinite;
  }
`;

const Skeleton = ({ width, height }) => {
  return <StyledSkeleton width={width} height={height} />;
};

export default Skeleton;
