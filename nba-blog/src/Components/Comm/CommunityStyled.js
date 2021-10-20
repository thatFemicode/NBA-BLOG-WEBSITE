import styled from "styled-components";
export const CommunityStyled = styled.section`
  margin-top: 10rem;

  @media (min-width: ${({ theme }) => theme.max}) {
    margin-top: 6rem;
  }
  @media (min-width: ${({ theme }) => theme.desktop}) {
    margin-top: 4rem;
  }
  @media (max-width: ${({ theme }) => theme.adapt}) {
    /* padding-top: 0rem; */
    margin-top: 10rem;
  }
  @media (min-width: ${({ theme }) => theme.dont}) {
    margin-top: 3.4rem;
    /* height: 100vh; */
    /* display: flex;
    justify-content: center;
    align-items: center; */
    /* justify-content: center; */
    /* align-content: center; */
    /* justify-items: center; */
  }
  @media (min-width: ${({ theme }) => theme.minsx}) {
    margin-top: 14rem;
  }
  @media (min-width: ${({ theme }) => theme.minss}) {
    margin-top: -9rem;
  }
  .community {
    &-text {
      width: 100%;
      max-width: 36rem;

      h1 {
        font-size: 2.2rem;
        @media (min-width: ${({ theme }) => theme.desktop}) {
          font-size: 3rem;
        }
      }
      p {
        font-size: 1rem;
        @media (min-width: ${({ theme }) => theme.desktop}) {
          font-size: 1.4rem;
        }
      }
    }
    &-info {
      margin-top: 5rem;
      display: grid;
      gap: 1.25rem;
      grid-template-columns: repeat(1, minmax(0, 1fr));
      @media (min-width: ${({ theme }) => theme.desktop}) {
        grid-template-columns: repeat(2, minmax(0, 1fr));
      }
    }
  }
`;
