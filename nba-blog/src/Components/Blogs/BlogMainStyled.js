import styled from 'styled-components';

export const BlogMainStyled = styled.div`
  width: 100%;
  /* position: relative; */

  .blog-header {
    background-color: #fff;
    border-radius: 1rem;
    display: flex;
    justify-content: space-between;
    /* position: relative; */

    &-form {
      flex: 2 0;
      padding: 2rem;
      /* display: flex; */
      align-items: center;
      @media (max-width: ${({ theme }) => theme.min}) {
        flex-direction: column;
      }
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
        height: 60vh;
      }
      img {
        object-fit: cover;
        width: 200%;
        height: 100%;
        /* margin-left: 3rem; */
        @media (min-width: ${({ theme }) => theme.dont}) {
          /* margin-left: 5rem; */
        }
        @media (min-width: ${({ theme }) => theme.kobe}) {
          margin-left: 6rem;
        }
      }
    }
  }
  .blog-main {
    display: grid;
    grid-template-columns: 1fr;
    gap: 1rem;
    margin-top: 3rem;
    @media (min-width: ${({ theme }) => theme.min}) {
      grid-template-columns: repeat(2, minmax(0, 1fr));
      gap: 1rem;
    }
    @media (min-width: ${({ theme }) => theme.desktop}) {
      grid-template-columns: repeat(3, minmax(0, 1fr));
      gap: 1rem;
    }
    @media (min-width: ${({ theme }) => theme.dont}) {
      grid-template-columns: repeat(4, minmax(0, 1fr));
      gap: 1rem;
    }
  }
`;
