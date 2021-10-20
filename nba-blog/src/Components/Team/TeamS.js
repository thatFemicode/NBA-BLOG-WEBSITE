import styled from "styled-components";

export const TeamStyled = styled.div`
  height: 100%;
  width: 100%;

  .team {
    &-hero {
      @media (min-width: ${({ theme }) => theme.desktop}) {
        display: flex;
        align-items: center;
        height: 100%;
        /* margin: auto 0; */
        /* margin-top: 4rem;
        margin-bottom: 4rem; */
      }
      @media (min-width: ${({ theme }) => theme.dont}) {
        display: flex;

        height: 100vh;
        /* margin: auto 0; */
        margin-top: 4rem;
        margin-bottom: 4rem;
        align-items: unset;
      }
      @media (min-width: ${({ theme }) => theme.team}) {
        display: flex;
        height: 100%;
        /* margin: auto 0; */
      }

      &-text {
        @media (min-width: ${({ theme }) => theme.kobe}) {
          width: 60%;
        }
        h2 {
          font-size: 2rem;
          @media (max-width: ${({ theme }) => theme.min}) {
            font-size: 1.7rem;
          }
          @media (min-width: ${({ theme }) => theme.kobe}) {
            font-size: 3.5rem;
          }
          @media (max-width: ${({ theme }) => theme.teams}) {
            font-size: 1rem;
          }
        }
        p {
          line-height: 1.6;
          font-size: 1.1rem;
          max-width: 400px;
          @media (max-width: ${({ theme }) => theme.min}) {
            font-size: 1rem;
          }
          @media (max-width: ${({ theme }) => theme.teams}) {
            font-size: 0.6rem;
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
      &-img {
        max-width: 70%;
        margin: 0 auto;
        @media (min-width: ${({ theme }) => theme.min}) {
          max-width: 60%;
        }
        @media (min-width: ${({ theme }) => theme.kobe}) {
          max-width: 100%;
        }
      }
    }
  }
  .teams {
    @media (min-width: ${({ theme }) => theme.dont}) {
      margin-top: -10rem;
    }
    @media (min-width: ${({ theme }) => theme.min}) {
      margin-top: 6rem;
    }
    @media (max-width: ${({ theme }) => theme.foot}) {
      margin-top: 6rem;
    }

    h2 {
      font-size: 1.5rem;
      max-width: 700px;
      margin-bottom: 1rem;
      @media (min-width: ${({ theme }) => theme.desktop}) {
        font-size: 2.5rem;
      }
      @media (min-width: ${({ theme }) => theme.dont}) {
        font-size: 3rem;
      }
    }

    .teams-img {
      display: grid;
      grid-template-columns: repeat(2, minmax(0px, 1fr));
      @media (min-width: ${({ theme }) => theme.min}) {
        grid-template-columns: repeat(4, minmax(0, 1fr));
      }
      @media (min-width: ${({ theme }) => theme.desktop}) {
        grid-template-columns: repeat(6, minmax(0, 1fr));
        gap: 1rem;
      }
    }
  }
  .nba {
    text-align: center;
    margin-top: 1rem;
    margin-top: 2rem;
    h2 {
      @media (min-width: ${({ theme }) => theme.desktop}) {
        font-size: 2rem;
      }
      @media (min-width: ${({ theme }) => theme.dont}) {
        font-size: 3rem;
      }
    }
    p {
      @media (min-width: ${({ theme }) => theme.desktop}) {
        font-size: 1.4rem;
      }
      @media (min-width: ${({ theme }) => theme.desktop}) {
        font-size: 1.6rem;
      }
    }
    .input {
      margin-top: 1rem;
      padding: 0.55rem 0.4rem;
      border: 1px solid rgb(184, 196, 194);
      border-radius: 4px;
      font-size: 14px;
      outline: none;
      transition: all 150ms ease-in-out 0s;
      background: #fff;
      width: 30%;
      margin-bottom: 0.4rem;
      @media (max-width: ${({ theme }) => theme.foot}) {
        width: 100%;
      }
    }
  }
`;
