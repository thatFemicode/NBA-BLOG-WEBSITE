import styled from "styled-components";

export const TeamStyled = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  @media (min-width: ${({ theme }) => theme.dont}) {
    flex-direction: row;
    justify-content: space-between;
  }
  @media (min-width: ${({ theme }) => theme.minsx}) {
    justify-content: space-evenly;
  }
  .team {
    &-text {
      flex: 1 0 400px;
      text-align: justify;
      line-height: 1.6;
      @media (min-width: ${({ theme }) => theme.desktop}) {
        flex: 0 0 600px;
      }
    }
    &-image {
      width: 100%;
    }
  }
  &:nth-child(3) {
    .team {
      &-text {
        margin-bottom: 2rem;
        @media (min-width: ${({ theme }) => theme.minsx}) {
          margin-right: 4rem;
        }
      }
      &-image {
        width: 100%;
        @media (min-width: ${({ theme }) => theme.desktop}) {
          width: 40%;
          margin-top: -6rem;
        }
        @media (min-width: ${({ theme }) => theme.dont}) {
          width: 25%;
          margin-top: 3rem;
        }
      }
    }
  }
  &:nth-child(1) {
    .team {
      &-text {
        margin-bottom: -3rem;
      }
      &-image {
        width: 100%;

        @media (min-width: ${({ theme }) => theme.desktop}) {
          width: 40%;
          margin-top: -6rem;
        }
        @media (min-width: ${({ theme }) => theme.dont}) {
          width: 25%;
          margin-top: 2rem;
        }
      }
    }
  }
  &:nth-child(2) {
    .team {
      &-text {
        margin-bottom: -3rem;
      }
      &-image {
        width: 100%;

        @media (min-width: ${({ theme }) => theme.desktop}) {
          width: 40%;
          margin-top: -6rem;
        }
        @media (min-width: ${({ theme }) => theme.dont}) {
          width: 30%;
          margin-top: 3rem;
        }
      }
    }
  }
  &:nth-child(4) {
    margin-bottom: 2rem;
    @media (min-width: ${({ theme }) => theme.dont}) {
      margin-top: 4rem;
    }
    .team {
      &-text {
        margin-bottom: -5rem;
        @media (min-width: ${({ theme }) => theme.dont}) {
          margin-top: -12rem;
        }
        @media (min-width: ${({ theme }) => theme.minsx}) {
          margin-right: 4rem;
        }
      }
      &-image {
        width: 100%;
        margin-top: 1rem;
        /* width: 60%;
        margin-top: -3rem; */
        @media (max-width: ${({ theme }) => theme.adapt}) {
          margin-top: 3rem;

          /* margin-bottom: -7rem; */
        }
        @media (min-width: ${({ theme }) => theme.desktop}) {
          width: 40%;
          margin-top: -6rem;

          /* margin-bottom: -7rem; */
        }
        @media (min-width: ${({ theme }) => theme.dont}) {
          width: 25%;
        }
      }
    }
  }
`;
