import styled from "styled-components";
export const FooterStyled = styled.section`
  .footer-con {
    display: flex;
    justify-content: space-between;
    max-width: 900px;
    margin: 0 auto;
    @media (max-width: ${({ theme }) => theme.make}) {
      display: block;
    }
  }
  .footer-left {
    display: none;
    @media (min-width: ${({ theme }) => theme.dont}) {
      display: block;
      margin-left: 3.2rem;
    }
    @media (max-width: ${({ theme }) => theme.make}) {
      display: block;
      max-width: 200px;
      margin: 0 auto;
      margin-bottom: 1rem;
      /* margin-left: 4rem; */
    }
    img {
      border-radius: 1.5rem;
    }
  }
  .logo-con {
    max-width: 400px;
    margin: 0 auto;
    @media (min-width: ${({ theme }) => theme.desktop}) {
      max-width: 500px;
      margin: 0 auto;
    }
    @media (min-width: ${({ theme }) => theme.dont}) {
      margin: 0;
    }
  }
  .logo-items {
    .logo-main {
      display: none;
      @media (min-width: ${({ theme }) => theme.desktop}) {
        width: 80%;
        display: block;
      }
    }
    .logo-form {
      .input {
        margin-top: 1rem;
        padding: 0.55rem 0.4rem;
        border: 1px solid rgb(184, 196, 194);
        border-radius: 4px;
        font-size: 14px;
        outline: none;
        transition: all 150ms ease-in-out 0s;
        background: #fff;
        width: 50%;
        margin-bottom: 0.4rem;
        @media (max-width: ${({ theme }) => theme.foot}) {
          width: 100%;
        }
      }
    }
    display: flex;
    align-items: center;
    justify-content: space-between;
    h1 {
      font-size: 1.5rem;
      @media (min-width: ${({ theme }) => theme.desktop}) {
        font-size: 2rem;
      }
    }
  }
`;
