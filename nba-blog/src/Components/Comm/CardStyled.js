import styled from "styled-components";

export const StyledCard = styled.div`
  width: 100%;
  /* display: flex; */
  padding: ${({ padding }) => padding || "null"};
  padding-top: ${({ paddingT }) => paddingT || "5rem"};
  padding-right: ${({ paddingRl }) => paddingRl || "null"};
  padding-left: ${({ paddingRl }) => paddingRl || "null"};
  padding-bottom: ${({ paddingB }) => paddingB || "8rem"};
  border-radius: 1rem;
  grid-column: ${({ column }) => column || null};
  background-color: ${({ bgColor, bgColor3 }) =>
    bgColor || bgColor3 || "#c8102e"};
  @media (min-width: ${({ theme }) => theme.min}) {
    padding: ${({ paddingD }) => paddingD || "null"};
    padding-top: ${({ paddingTm }) => paddingTm || "5rem"};
    padding-right: ${({ paddingRlm }) => paddingRlm || "5rem"};
    padding-left: ${({ paddingRlm }) => paddingRlm || "5rem"};
    padding-bottom: ${({ paddingBm }) => paddingBm || "10rem"};
  }
  @media (min-width: ${({ theme }) => theme.desktop}) {
    padding-bottom: ${({ paddingBd }) => paddingBd || "5rem"} !important;
  }
  @media (min-width: ${({ theme }) => theme.dont}) {
    padding: ${({ paddingH }) => paddingH || "null"};
    padding-top: ${({ paddingTh }) => paddingTh || "5rem"};
    padding-right: ${({ paddingRlh }) => paddingRlh || "5rem"};
    padding-left: ${({ paddingRlh }) => paddingRlh || "5rem"};
    padding-bottom: ${({ paddingBd }) => paddingBd || "7rem"} !important;
  }
  &:nth-child(1) {
    .card {
      display: flex;
      justify-content: space-between;
      align-items: center;
      &-main {
      }
      &-img {
        display: none;
        /* justify-self: start; */
        @media (min-width: ${({ theme }) => theme.balls}) {
          margin-right: 15rem;
          position: relative;
          display: flex;
          .balls {
            width: 100%;
            margin-left: 1rem;
            transition: all 0.5s ease-in-out;
            &:hover {
              animation: anim-loading-pill 750ms ease-in infinite alternate;

              &:not(:last-child) {
                margin-right: 25px;
              }
            }
          }
        }
        @media (min-width: ${({ theme }) => theme.mind}) {
          margin-right: 20rem;
        }
        @media (min-width: ${({ theme }) => theme.mins}) {
          margin-right: 25rem;
        }
      }
    }
  }
  .card {
    &-main {
    }
    &-image {
    }
    &-text {
      h1 {
        color: ${({ color }) => color || "#fff"};
        font-size: 2.2rem;
        margin-bottom: 1rem;
      }
      p {
        color: ${({ color }) => color || "#fff"};
        font-size: 1.3rem;
        max-width: 400px;
        margin-bottom: 1rem;
      }
    }
    &-img {
      width: 10%;
      position: relative;
    }
  }
  /* Keyframe */
  @keyframes anim-loading-pill {
    0% {
      transform: translateY(-25%);
      opacity: 1;
    }

    100% {
      transform: translateY(25%) scale(0.9);
      opacity: 0.9;
    }
  }
`;
