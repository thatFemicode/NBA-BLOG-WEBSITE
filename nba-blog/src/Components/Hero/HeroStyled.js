import styled from "styled-components";
export const HeroStyled = styled.section`
  padding-top: 1rem;
  /* height: 100vh; */
  @media (min-width: ${({ theme }) => theme.dont}) {
    padding-top: 4rem;
    /* height: 100vh; */
    /* display: flex;
    justify-content: center;
    align-items: center; */
    /* justify-content: center; */
    /* align-content: center; */
    /* justify-items: center; */
  }
  @media (min-width: ${({ theme }) => theme.minss}) {
    /* padding-top: 4rem; */
    height: 100vh;
    /* display: flex;
    justify-content: center;
    align-items: center; */
    /* justify-content: center; */
    /* align-content: center; */
    /* justify-items: center; */
  }
  @media (min-width: ${({ theme }) => theme.min}) {
    padding-top: 2rem;
  }
  @media (max-width: ${({ theme }) => theme.adapt}) {
    /* padding-top: 0rem; */
    margin-top: -2rem;
  }
  @media (max-width: ${({ theme }) => theme.adapt}) {
    /* padding-top: 0rem; */
    margin-top: 2rem;
  }
  .hero {
    text-align: center;
    @media (min-width: ${({ theme }) => theme.dont}) {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      text-align: justify;
      /* justify-content: center; */
      /* align-content: center; */
      /* justify-items: center; */
    }

    /* display: flex;
    justify-content: space-between;
    align-items: center; */

    &-text {
      h1 {
        font-size: 2rem;
        margin-bottom: 1rem;
        line-height: 1.4;
        @media (min-width: ${({ theme }) => theme.dont}) {
          font-size: 2vw;
          width: 100%;
        }
        @media (max-width: ${({ theme }) => theme.min}) {
          font-size: 1.5rem;
        }
      }
      p {
        font-size: 1.1rem;
        margin-bottom: 1rem;
        text-align: justify;
        line-height: 1.4;
        @media (min-width: ${({ theme }) => theme.dont}) {
          font-size: 1rem;
        }
        @media (max-width: ${({ theme }) => theme.min}) {
          font-size: 0.9rem;
        }
      }
    }
    &-form {
      .input {
        padding: 0.55rem 0.4rem;
        border: 1px solid rgb(184, 196, 194);
        border-radius: 4px;
        font-size: 14px;
        outline: none;
        transition: all 150ms ease-in-out 0s;
        background: #fff;
        width: 60%;
        margin-bottom: 0.4rem;
      }
    }
    &-image {
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;
      margin-top: -3rem;
      @media (max-width: ${({ theme }) => theme.dont}) {
        display: none;
      }
      &-img {
        width: 50%;
        /* transform: rotate(-10deg);
        animation: move 8s infinite;
        animation-delay: 0.5s; */
        transition: all 0.4s ease-in-out;
      }
      &-ball {
        position: absolute;
        width: 10%;
        bottom: 0;
        right: 70px;
        @media screen and (min-width: 1000px) {
          right: 50px;
        }
        @media screen and (min-width: 1400px) {
          right: 70px;
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
