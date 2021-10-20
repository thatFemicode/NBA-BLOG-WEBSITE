import styled from "styled-components";
export const SidebarStyled = styled.aside`
  &.sidebar-wrapper {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: grid;
    place-items: center;
    visibility: hidden;
    z-index: -1;
    transition: var(--transition);
    transform: translateX(-400px);
    background: rgba(0, 0, 0, 0.5);
    &.show {
      visibility: visible;
      z-index: 2;
      /* transform: scale(1); */
      transform: translateX(0px);
      @media (min-width: ${({ theme }) => theme.desktop}) {
        display: none;
      }
    }
    .sidebar {
      width: 80vw;
      height: 90vh;
      /* max-width: var(--fixed-width); */
      background: var(--clr-white);
      border-radius: var(--radius);
      box-shadow: var(--dark-shadow);
      position: relative;
      padding: 4rem 2rem;
      &-h4 {
        text-transform: Capitalize;
      }
      .close-btn {
        font-size: 2rem;
        background: transparent;
        border-color: transparent;
        color: var(--clr-grey-5);
        position: absolute;
        top: 1rem;
        right: 1rem;
        cursor: pointer;
      }
      &-article {
        margin-bottom: 1.3rem;
      }
      &-sublinks {
        display: grid;
        /* justify-content: space-between; */
        width: 60%;
        grid-template-columns: 1fr 1fr;
        row-gap: 0.25rem;

        svg {
          margin-right: 0.4rem;
        }
      }
      &-link {
        display: block;
        text-transform: capitalize;
        display: flex;
        align-items: center;
      }
      &-image {
        width: 30%;
        height: 50%;
        /* padding-right: 1rem; */
        margin-left: 7rem;
        animation: move 8s infinite;
        animation-delay: 0.5s;
        transition: all 0.4s ease-in-out;
        @media (max-width: ${({ theme }) => theme.mobile}) {
          margin-left: 3rem;
          width: 30%;
        }
      }
    }
  }
  @keyframes move {
    0% {
      transform: translateY(0) rotate(0) scale(1) translateX(0);
    }
    50% {
      transform: translateY(-10px) rotate(20deg) scale(1.1) translateX(10px);
    }
    100% {
      transform: translateY(0) rotate(0deg) scale(1) translateX(0);
    }
  }
  @keyframes move2 {
    0% {
      transform: translateY(0) rotate(0) scale(1) translateX(0);
    }
    50% {
      transform: translateY(-10px) rotate(60deg) scale(1.1) translateX(10px);
    }
    100% {
      transform: translateY(0) rotate(0deg) scale(1) translateX(0);
    }
  }
`;
