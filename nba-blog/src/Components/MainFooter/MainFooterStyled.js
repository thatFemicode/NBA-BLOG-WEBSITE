import styled from "styled-components";
export const FootStyled = styled.footer`
  background-color: #1d428a;
  border-top-left-radius: 1rem;
  border-top-right-radius: 1rem;
  @media (min-width: ${({ theme }) => theme.desktop}) {
    border-radius: 0;
  }
  /* @media screen and (max-width: 1347px) {
    padding: 5rem 14rem;
  }
  @media screen and (max-width: 1186px) {
    padding: 5rem 8rem;
  }
  @media screen and (max-width: 990px) {
    padding: 5rem 4rem;
  } */
  .footer-con {
    width: 50%;
    margin: 0 auto;
    display: grid;
    margin-left: 7rem;
    /* grid-template-columns: repeat(auto-fit, minmax(100px, 1fr)); */
    gap: 1rem;
    grid-template-columns: 1fr;
    @media (min-width: ${({ theme }) => theme.desktop}) {
      grid-template-columns: 1fr 1fr;
      width: 80%;
    }
    @media (min-width: ${({ theme }) => theme.min}) {
      margin-left: 10rem;
    }
    @media screen and (min-width: 600px) {
      /* margin-left: 8rem; */
      width: 70%;
    }
    @media (min-width: ${({ theme }) => theme.dont}) {
      margin-left: 14rem;
    }
  }
  .logo-con {
    img {
      width: 120px;
    }
  }
  .bottom-nav {
    /* grid-template-columns: repeat(auto-fit, minmax(120px, 1fr)); */
    @media (min-width: ${({ theme }) => theme.desktop}) {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 1rem;
      margin-left: -3rem;
    }
    @media (min-width: ${({ theme }) => theme.balls}) {
      margin: 0;
    }
    .links1 {
      margin-bottom: 2rem;
      @media (min-width: ${({ theme }) => theme.dont}) {
        margin-left: -6rem;
      }
      /* margin-top: 1rem; */
    }
    li {
      margin-bottom: 0.5rem;
      color: #fff;
    }
    .link-btn {
      color: #fff;
      opacity: 0.5;
    }
  }
`;
