import styled from "styled-components";

export const StephStyled = styled.div`
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
    /* justify-content: space-between; */
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
  .steph-text {
    margin-top: -2rem;
    margin-bottom: 2rem;
  }
  .logo {
    width: 50%;
    @media (min-width: ${({ theme }) => theme.min}) {
      width: 30%;
    }
  }
  .steph-image {
    width: 80%;
    @media (min-width: ${({ theme }) => theme.desktop}) {
      width: 60%;
    }
    @media (min-width: ${({ theme }) => theme.balls}) {
      width: 35%;
    }
    @media (min-width: ${({ theme }) => theme.mind}) {
      width: 45%;
    }
  }
`;
