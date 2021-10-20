import styled from "styled-components";

export const LebronStyled = styled.div`
  background-color: #fdb927;
  padding: 2rem;
  color: #552583;
  border-radius: 50%;
  border-radius: 5px;
  @media (min-width: ${({ theme }) => theme.desktop}) {
    padding: 3rem;
    padding-bottom: 1rem;
  }
  @media (min-width: ${({ theme }) => theme.balls}) {
    display: flex;
    padding: 2rem;
    width: 900px;
    margin: 0 auto;
    /* align-items: center; */
  }
  @media (min-width: ${({ theme }) => theme.kobe}) {
    display: flex;
    justify-content: space-evenly;
    padding-right: 0.2rem;
    padding-left: 0.2rem;
    /* margin: 0 auto; */
    /* align-items: center; */
  }

  /* .nickname {
    display: flex;
  } */
  .lebron-text {
    margin-top: 1rem;
  }
  .logo {
    width: 50%;
    @media (min-width: ${({ theme }) => theme.min}) {
      width: 30%;
    }
  }
  .lebron-image {
    width: 80%;
    @media (min-width: ${({ theme }) => theme.balls}) {
      /* margin-left: 6rem; */
      width: 30%;
    }
  }
`;
