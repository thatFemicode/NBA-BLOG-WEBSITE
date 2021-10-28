import styled from 'styled-components';
export const PostDetailsStyled = styled.div`
  .detail-main {
    display: flex;
    justify-content: space-between;

    @media (max-width: ${({ theme }) => theme.post}) {
      flex-direction: column;
    }
    &-left {
      flex: 1 0 50%;
      &-main {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 90%;
        margin-bottom: 3rem;

        @media (max-width: ${({ theme }) => theme.kobe}) {
          width: 90%;
        }
        @media (max-width: ${({ theme }) => theme.dont}) {
          width: 65%;
        }
        @media (min-width: ${({ theme }) => theme.mins}) {
          width: 70%;
        }
        @media (max-width: ${({ theme }) => theme.desktop}) {
          width: 85%;
        }
        @media (max-width: ${({ theme }) => theme.min}) {
          flex-direction: column;
        }
        &-image {
          margin-right: 1rem;
          img {
            max-height: 300px;
            max-width: 400px;
            @media (max-width: ${({ theme }) => theme.min}) {
              max-height: 100%;
              max-width: 100%;
              margin-bottom: 1rem;
            }
            @media (max-width: ${({ theme }) => theme.img}) {
              max-height: 300px;
              max-width: 201px;
            }
          }
        }
        &-text {
          p {
            font-weight: 800;
            font-size: 0.9rem;
            margin-bottom: 0.4rem;
            text-transform: capitalize;
          }
        }
      }
      &-comment {
        @media (max-width: ${({ theme }) => theme.desktop}) {
          margin-bottom: 3rem;
        }
      }
    }
    &-right {
      flex: 1 0 40%;

      p {
        text-align: justify;
        white-space: break-spaces;
      }
    }
  }
`;
