import styled from "styled-components";

export const MainGalleryStyled = styled.section`
  padding: 0 1rem;
  h2 {
    font-size: 1.8rem;
    font-weight: 700;
    margin-top: 2rem;
    @media (min-width: ${({ theme }) => theme.min}) {
      font-size: 2.5rem;
    }
  }
  .team-p {
    font-size: 1rem;
    font-weight: 600;

    @media (min-width: ${({ theme }) => theme.min}) {
      font-size: 1.4rem;
    }
    @media (min-width: ${({ theme }) => theme.desktop}) {
      width: 40%;
      text-align: justify;
    }
  }
  .great-players {
    margin-top: -1rem;
    display: grid;
    justify-content: center;
    /* align-content: center; */
    @media (min-width: ${({ theme }) => theme.desktop}) {
      padding-top: 2rem;
    }
  }
  /* background-color: red; */
  .players {
    width: 100%;
    margin: 0 auto;
    margin-top: 1rem;
    /* margin: 0 auto; */
    display: grid;
    gap: 1rem;

    @media (min-width: ${({ theme }) => theme.min}) {
      grid-template-columns: repeat(2, 1fr);
      /* margin-left: 3rem; */
    }
    @media (min-width: ${({ theme }) => theme.desktop}) {
      grid-template-columns: repeat(3, 1fr);
      /* margin-left: 7rem; */
    }
    /* grid-template-columns: repeat(5, 1fr); */
  }
  .great-teams {
    /* padding: 1rem 0; */
  }
`;
