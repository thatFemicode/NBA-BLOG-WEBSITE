import styled from "styled-components";

export const PlayerHeroStyled = styled.section`
  height: 90vh;
  @media (min-width: ${({ theme }) => theme.min}) {
    height: 100vh;
  }
  @media (min-width: ${({ theme }) => theme.desktop}) {
    display: flex;
    /* align-items: stretch;
    height: 100vh; */
    align-items: center;
    height: 100%;
    width: 90%;
    margin: 0 auto;
    /* margin-top: -15rem; */
  }

  @media (min-width: ${({ theme }) => theme.dont}) {
    /* height: 100vh; */
    /* margin-top: -12rem; */
    /* height: 10; */
  }
  @media (max-width: ${({ theme }) => theme.se}) {
    margin-top: -3rem;
    height: 100vh;
  }
  @media (min-width: ${({ theme }) => theme.kobe}) {
    /* margin-top: -10rem; */
    /* height: 10; */
  }
  @media (min-width: ${({ theme }) => theme.minsx}) {
    height: 100%;
    margin-top: 0;
  }
  .ph-text {
    width: 100%;
    position: relative;
    @media (min-width: ${({ theme }) => theme.min}) {
      max-width: 420px;
      min-width: 17rem;
    }
    @media (min-width: ${({ theme }) => theme.desktop}) {
      /* max-width: 500px; */
      margin-right: 3rem;
      flex: 2 0 0;
    }
    @media (min-width: ${({ theme }) => theme.dont}) {
      /* max-width: 27.75rem; */
      min-width: 0;
      /* width: 60%; */
      /* margin-right: 4rem; */
      margin: auto 0;

      /* width: 50%; */
    }
    @media (min-width: ${({ theme }) => theme.mins}) {
      /* max-width: 500px; */
      max-width: 100%;

      /* margin-right: 3rem;
      flex: 2 0 0; */
    }
    h2 {
      font-size: 2rem;
      max-width: 320px;
      /* line-height: 2.5rem; */
      font-weight: 700;
      @media (min-width: ${({ theme }) => theme.min}) {
        max-width: 100%;
        font-size: 2.5rem;
      }
      @media (min-width: ${({ theme }) => theme.desktop}) {
        /* max-width: 100%; */
        font-size: 2rem;
      }
      @media (min-width: ${({ theme }) => theme.dont}) {
        max-width: 100%;
        font-size: 3rem;
      }

      @media (min-width: ${({ theme }) => theme.mins}) {
        /* max-width: 500px; */
        font-size: 4rem;

        /* margin-right: 3rem;
      flex: 2 0 0; */
      }
    }
    p {
      color: rgba(0, 0, 0, 1);
      max-width: 350px;
      margin-top: 1.25rem;
      line-height: 1.375 !important;
      @media (min-width: ${({ theme }) => theme.min}) {
        max-width: 23rem;
        white-space: pre-line;
      }
    }
    &-button {
      margin-top: 1.5rem;
      display: flex;
      flex-wrap: wrap;
      @media (min-width: ${({ theme }) => theme.min}) {
        margin-top: 2rem;
      }

      .button-1 {
        transition-property: all;
        transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
        transition-duration: 0.15s;
        outline: 2px solid transparent;
        outline-offset: 2px;
        color: rgba(255, 255, 255, 1);
        font-weight: 500;
        font-size: 0.875rem;
        line-height: 1.25rem;
        padding-left: 0.9375rem;
        padding-right: 0.9375rem;
        padding-top: 0.45rem;
        padding-bottom: 0.45rem;
        background-color: #1d428a;
        border-radius: 0.625rem;
        justify-content: center;
        align-items: center;
        flex-shrink: 0;
        display: inline-flex;
        margin-right: 0.9375rem;
        margin-top: 0.5rem;
        margin-bottom: 0.5rem;
        @media (min-width: ${({ theme }) => theme.min}) {
          font-size: 0.9375rem;
          padding-left: 1.25rem;
          padding-right: 1.25rem;
          padding-top: 0.65rem;
          padding-bottom: 0.65rem;
        }
      }
      .button-2 {
        transition-property: all;
        transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
        transition-duration: 0.15s;
        outline: 2px solid transparent;
        outline-offset: 2px;
        color: rgba(255, 255, 255, 1);
        font-weight: 500;
        font-size: 0.875rem;
        line-height: 1.25rem;
        padding-left: 0.9375rem;
        padding-right: 0.9375rem;
        padding-top: 0.45rem;
        padding-bottom: 0.45rem;
        background-color: #ce1141;
        border-radius: 0.625rem;
        justify-content: center;
        align-items: center;
        flex-shrink: 0;
        display: inline-flex;
        margin-top: 0.5rem;
        margin-bottom: 0.5rem;
        @media (min-width: ${({ theme }) => theme.min}) {
          font-size: 0.9375rem;
          padding-left: 1.25rem;
          padding-right: 1.25rem;
          padding-top: 0.65rem;
          padding-bottom: 0.65rem;
        }
      }
    }
  }
  .ph-image {
    position: relative;
    width: 90%;
    @media (min-width: ${({ theme }) => theme.min}) {
      width: 80%;
    }
    @media (min-width: ${({ theme }) => theme.player}) {
      width: 40%;
    }
    @media (max-width: ${({ theme }) => theme.adapt}) {
      width: 100%;
    }
    @media (min-width: ${({ theme }) => theme.desktop}) {
      /* width: 50%; */
      flex: 1 1 10%;
    }
    img {
      @media (min-width: ${({ theme }) => theme.dont}) {
        max-width: 60%;
        margin-left: 6rem;
      }
    }
    .ball {
      position: absolute;
      width: 15%;
      bottom: 0;
      left: 0;
      @media (min-width: ${({ theme }) => theme.dont}) {
        width: 10%;
      }
    }
  }
`;
