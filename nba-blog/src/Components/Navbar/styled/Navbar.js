import styled from "styled-components";

export const NavbarStyled = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 5rem;
  .nav-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .nav-logo {
      max-width: 10%;
      @media (min-width: ${({ theme }) => theme.desktop}) {
        max-width: 15%;
      }
      @media (min-width: ${({ theme }) => theme.min}) {
        max-width: 10%;
      }
      @media (max-width: ${({ theme }) => theme.adapt}) {
        max-width: 15%;
      }
    }
    .btn {
      background: var(--clr-primary-3);
      padding: 0.5rem 0.5rem;
      &.toggle-btn {
        @media (min-width: ${({ theme }) => theme.desktop}) {
          display: none;
        }
      }
    }
  }
  .nav {
    &-links {
      width: 120%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      @media (max-width: ${({ theme }) => theme.desktop}) {
        display: none;
      }

      @media (min-width: ${({ theme }) => theme.min}) {
        width: 50%;
      }
      @media (min-width: ${({ theme }) => theme.desktop}) {
        width: 120%;
      }
      @media (min-width: ${({ theme }) => theme.mins}) {
        width: 40%;
      }
      @media (min-width: ${({ theme }) => theme.minss}) {
        width: 30%;
      }
      .link-btn {
        padding: 0.4rem 0.4rem;
        border-radius: 1rem;
        font-size: 1rem;
        text-transform: Capitalize;
        @media (min-width: ${({ theme }) => theme.desktop}) {
        }
      }
    }
  }
`;
