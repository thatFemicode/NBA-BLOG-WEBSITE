import styled from "styled-components";
export const QuestionStyled = styled.div`
  background-color: #fff;
  /* margin: 1rem 0; */
  padding: 1.4rem 1rem;
  transition: all 0.4s ease-in-out;
  /* box-shadow: 0px 25px 50px rgba(22, 25, 79, 0.05); */
  p {
    transition: all 0.4s ease-in-out;
  }
  h4 {
    /* color: #16194f; */
    transition: all 0.4s ease-in-out;
    font-size: 1rem;
  }
  .toggle-title {
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: space-between;
    transition: all 0.4s ease-in-out;
    button {
      background: transparent;
      outline: none;
      cursor: pointer;
      border: none;
      width: 12%;
      @media (min-width: ${({ theme }) => theme.min}) {
        width: 4%;
      }
      @media (min-width: ${({ theme }) => theme.dont}) {
        width: 3%;
      }
    }
  }
  .description {
    padding-top: 1rem;
    transition: all 0.4s ease-in-out;
  }
  &:nth-child(2) {
    button {
      width: 15%;
      @media (min-width: ${({ theme }) => theme.min}) {
        width: 4%;
      }
      @media (min-width: ${({ theme }) => theme.dont}) {
        width: 3%;
      }
    }
  }
  &:nth-child(3) {
    button {
      width: 18%;
      @media (min-width: ${({ theme }) => theme.min}) {
        width: 4%;
      }
      @media (min-width: ${({ theme }) => theme.dont}) {
        width: 3%;
      }
    }
  }
  &:nth-child(4) {
    button {
      width: 18%;
      @media (min-width: ${({ theme }) => theme.min}) {
        width: 4%;
      }
      @media (min-width: ${({ theme }) => theme.dont}) {
        width: 3%;
      }
    }
  }
  &:nth-child(5) {
    button {
      width: 18%;
      @media (min-width: ${({ theme }) => theme.min}) {
        width: 4%;
      }
      @media (min-width: ${({ theme }) => theme.dont}) {
        width: 3%;
      }
    }
  }
`;
