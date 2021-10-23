import styled from "styled-components";
export const PlayerStyled = styled.section`
  position: relative;
  /* background-color: rgba(245, 245, 245, 1); */
  /* background-color: #ffc0cb; */

  /* background-color: #99b898; */
  .player {
    &-text {
      width: 100%;
      max-width: 36rem;

      h1 {
        font-size: 2.2rem;
        @media (min-width: ${({ theme }) => theme.desktop}) {
          font-size: 3rem;
        }
      }
      p {
        font-size: 1rem;
        @media (min-width: ${({ theme }) => theme.desktop}) {
          font-size: 1.4rem;
        }
      }
    }
    &-prof {
      margin-top: 1rem;
    }
  }

  .tabs-container {
    padding: 0.5rem;
    overflow: hidden;
    margin-top: 3rem;
    padding-bottom: 0 !important;
    @media (min-width: ${({ theme }) => theme.min}) {
      padding: 2.5rem;
    }
    @media (min-width: ${({ theme }) => theme.dont}) {
      padding: 3.75rem;
      margin-top: 1rem;
    }
  }
  .btn-con {
    display: flex;
    align-items: center;
    overflow-x: auto;
    justify-content: center;
    @media (max-width: ${({ theme }) => theme.min}) {
      justify-content: unset;
    }
    .tabs-btn {
      padding-top: 0.4rem;
      padding-bottom: 0.4rem;
      padding-left: 0.875rem;
      padding-right: 0.875rem;
      display: flex;
      flex-shrink: 0;
      white-space: nowrap;
      line-height: 1;
      transition-property: all;
      border-radius: 5px;
      transition-duration: 0.2s;
      transition-timing-function: cubic-bezier(0.4, 0, 1, 1);
      border: none;
      outline: none;
      &:not(:nth-child(1)) {
        margin-right: calc(0.625rem * var(--tw-space-x-reverse));
        margin-left: calc(0.625rem * calc(1 - var(--tw-space-x-reverse)));
      }
      @media (min-width: ${({ theme }) => theme.min}) {
        padding-top: 0.5rem;
        padding-bottom: 0.5rem;
        padding-left: 1rem;
        padding-right: 1rem;
        font-size: 1rem;

        /* display: none; */
      }
      @media (min-width: ${({ theme }) => theme.dont}) {
        padding-top: 0.6rem;
        padding-bottom: 0.6rem;
        padding-left: 1.1rem;
        padding-right: 1.1rem;
      }
      &:nth-child(1) {
        background-color: #552583;
        color: #fff;
      }
      &:nth-child(2) {
        background-color: #fdb927;
        color: #fff;
      }
      &:nth-child(3) {
        background-color: #1d428a;
        color: #fff;
      }
      &:nth-child(4) {
        background-color: #ce1141;
        color: #fff;
      }
      &:nth-child(5) {
        background-color: #000000;
        color: #fff;
      }
    }
  }
`;
