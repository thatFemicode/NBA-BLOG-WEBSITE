import styled from "styled-components";

export const FAQStyled = styled.section`
  .questions-con {
    padding-top: 3rem;
    @media (min-width: ${({ theme }) => theme.dont}) {
      width: 50%;
    }
  }
  .faq {
    &-main {
      background-color: #fff;
      border-radius: 24px;
      @media (min-width: ${({ theme }) => theme.dont}) {
        display: flex;
        justify-content: space-around;
        align-items: center;
      }
    }
    &-img {
      display: none;
      @media (min-width: ${({ theme }) => theme.dont}) {
        display: block;
        width: 30%;
        margin-right: 2rem;
      }
    }
    &-text {
      width: 100%;
      max-width: 36rem;
      margin-bottom: 3rem;

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
  }
`;
