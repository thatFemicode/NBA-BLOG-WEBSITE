import styled from "styled-components";

export const BlogMainStyled = styled.div`
  width: 100%;
  .blog-header {
    background-color: #fff;
    display: flex;
    justify-content: space-between;

    &-form {
      flex: 2 0;
      padding: 2rem;
    }
    &-image {
      @media screen and (max-width: 768px) {
        display: none;
      }
      flex: 1 0;
      display: flex;
      height: 60vh;
      @media screen and (min-height: 968px) and (max-height: 1388px) {
        height: unset;
      }
      @media (min-width: ${({ theme }) => theme.desktop}) {
        height: unset;
      }
      @media (min-width: ${({ theme }) => theme.kobe}) {
        height: 50vh;
      }
      img {
        object-fit: cover;
        width: 200%;
        height: 100%;
        margin-left: 3rem;
        @media (min-width: ${({ theme }) => theme.dont}) {
          margin-left: 5rem;
        }
        @media (min-width: ${({ theme }) => theme.kobe}) {
          margin-left: 9rem;
        }
      }
    }
  }
`;
