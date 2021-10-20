import styled from "styled-components";

export const JordanStyled = styled.div`
  background-color: #fff;
  padding: 2rem;
  border-radius: 1.3rem;
  color: #552583;
  @media (min-width: ${({ theme }) => theme.desktop}) {
    padding: 3rem;
    padding-bottom: 1rem;
  }
  @media (min-width: ${({ theme }) => theme.balls}) {
    display: flex;
    padding: 2rem;
    width: 900px;
    margin: 0 auto;
  }
  @media (min-width: ${({ theme }) => theme.kobe}) {
    display: flex;
    justify-content: space-evenly;
    padding: 4rem;
    padding-bottom: 1rem;
    /* margin: 0 auto; */
    /* align-items: center; */
  }
  /* .nickname {
    display: flex;
  } */
  .jordan-text {
    margin-top: 1rem;
    margin-bottom: 3rem;
  }
  .logo {
    width: 40%;
    @media (min-width: ${({ theme }) => theme.min}) {
      width: 30%;
    }
  }
  .jordan-image {
    width: 80%;
    @media (min-width: ${({ theme }) => theme.desktop}) {
      width: 60%;
    }
    @media (min-width: ${({ theme }) => theme.balls}) {
      width: 70%;
    }
    @media (min-width: ${({ theme }) => theme.mind}) {
      width: 60%;
    }
  }
`;
