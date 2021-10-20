import styled from "styled-components";
export const PlayerStyled = styled.section`
  /* margin-top: 2rem; */
  .players {
    /* margin-right: 1rem;
    margin-left: 1rem; */
    /* margin-top: 2rem; */

    @media (min-width: ${({ theme }) => theme.desktop}) {
      margin-top: 15rem;
    }
    @media (max-width: ${({ theme }) => theme.foot}) {
      margin-top: 3rem;
    }
    /* @media (max-height: ${({ theme }) => theme.desktop}) {
      margin-top: 3rem;
    } */
    &-main {
      h1 {
        font-size: 2.1rem;
        font-weight: 900;
        max-width: 400px;
      }
      &-text {
        &-main {
          text-align: justify;
          line-height: 1.6;
          @media (min-width: ${({ theme }) => theme.desktop}) {
          }

          p {
            margin-bottom: 1rem;

            &:nth-child(1) {
              margin-top: 1rem;
            }
          }
        }
      }

      &-stats {
        margin-top: 3rem;
        &-flex {
          @media (min-width: ${({ theme }) => theme.desktop}) {
            display: flex;
            /* flex-wrap: wrap; */

            gap: 1rem;
            align-items: center;
            justify-content: center;
            /* width: 90%; */
            /* margin: 0 auto; */
          }
          @media (min-width: ${({ theme }) => theme.mind}) {
            width: 90%;
            margin: 0 auto;
          }
        }
        &-main {
          flex: 3 0 400px;
          .stats {
            margin-top: 1rem;
            /* text-align: justify; */
          }
        }
      }
    }
    &-img {
      flex: 2 0 400px;

      img {
        width: 100%;
      }
      p {
        font-weight: 600;
        @media (min-width: ${({ theme }) => theme.desktop}) {
          margin-top: -4rem;
        }
      }
    }
  }
`;
