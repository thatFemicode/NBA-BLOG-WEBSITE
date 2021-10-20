import styled from "styled-components";

export const KobeStyled = styled.div`
  background-color: #fff;
  border-radius: 1.3rem;
  padding: 2rem;
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
    padding: 3rem;
    padding-bottom: 1rem;
    /* margin: 0 auto; */
    /* align-items: center; */
  }
  .kobe-text {
    margin-top: 1rem;
  }
  .kobe-image {
    margin-top: 2rem;
    width: 80%;
    @media (min-width: ${({ theme }) => theme.balls}) {
      width: 400%;
    }
    @media (min-width: ${({ theme }) => theme.balls}) {
      width: 400%;
    }
    @media (min-width: ${({ theme }) => theme.kobe}) {
      width: 300%;
    }
    img {
      width: 100%;
    }
  }
  .logo {
    width: 50%;
    @media (min-width: ${({ theme }) => theme.min}) {
      width: 30%;
    }
  }
`;
