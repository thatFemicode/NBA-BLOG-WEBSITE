import styled from "styled-components";

export const GreatStyled = styled.div`
  img {
    width: 1000%;
    height: 400px;
    @media (min-width: ${({ theme }) => theme.desktop}) {
      width: 60%;
    }
  }
  p {
    font-size: 1.2rem;
    font-family: inherit;
    font-weight: 800;
    /* margin-top: -4rem; */
  }
  &:nth-child(4) {
    img {
      width: 100%;
      @media (min-width: ${({ theme }) => theme.desktop}) {
        width: 60%;
      }
    }
  }
  &:nth-child(6) {
    img {
      width: 100%;
      @media (min-width: ${({ theme }) => theme.desktop}) {
        width: 80%;
      }
    }
    p {
      margin-top: -1rem;
    }
  }
`;
