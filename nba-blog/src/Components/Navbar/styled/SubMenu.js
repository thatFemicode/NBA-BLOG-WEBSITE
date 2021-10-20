import styled from "styled-components";
export const SubMenuStyled = styled.aside`
  &.submenu {
    background: var(--clr-white);
    box-shadow: var(--dark-shadow);
    position: absolute;
    /* top: 4rem; */
    margin-top: 0.6rem;
    left: 50%;
    transform: translateX(-50%);
    z-index: 3;
    display: none;
    padding: 2rem;
    border-radius: 1rem;
    transition: var(--transition);

    &::before {
      content: "";
      display: block;
      width: 0;
      height: 0;
      border-left: 5px solid transparent;
      border-right: 5px solid transparent;
      border-bottom: 5px solid var(--clr-white);
      position: absolute;
      top: -5px;
      left: 50%;
      transform: translateX(-50%);
    }
    &.show {
      display: block;
      @media (max-width: ${({ theme }) => theme.desktop}) {
        display: none;
      }
    }
  }
  .submenu-center {
    display: grid;
    gap: 0.25rem 2rem;
  }
  .col-2 {
    grid-template-columns: repeat(1, 1fr);
  }
  .col-3 {
    grid-template-columns: repeat(3, 1fr);
  }
  .col-4 {
    grid-template-columns: repeat(4, 1fr);
  }
  /* .submenu h4 {
 
  } */
  h4 {
    margin-bottom: 1.5rem;
    text-transform: Capitalize;
  }
  .submenu-center a {
    width: 9rem;
    display: block;
    color: var(--clr-grey-1);
    text-transform: capitalize;
    display: flex;
    align-items: center;
  }
  .submenu-center svg {
    color: var(--clr-grey-5);
    margin-right: 1rem;
  }
`;
