import styled from "styled-components";

export const AuthStyled = styled.main`
  height: 100vh;
  display: flex;
  flex-direction: row;
  @media screen and (max-width: 800px) {
    flex-direction: column;
  }
  .auth {
    &-form-container-fields {
      flex: 2;
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding: 2rem;
      position: relative;
      @media screen and (max-width: 800px) {
        justify-content: flex-start;
      }
      @media screen and (max-width: 375px) {
        padding: 2rem 0.5rem;
      }
      /* background: #005fff; */
      /* .ball {
        width: 10%;
        position: absolute;
        top: 90px;
      } */
      /* .balls {
        width: 10%;
        position: absolute;
        bottom: 0px;
        right: 30px;
      } */
      &-content {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        padding: 2rem;
        box-shadow: 0px 1px 5px rgb(0 0 0 / 10%);
        border-radius: 5px;
        transition: 0.8s ease;
        background: #fff;
        p {
          font-size: 1.5rem;
          /* font-family: Arial, Helvetica, sans-serif; */
          color: #05245a;
          font-weight: 900;
        }
        &-input {
          display: flex;
          flex-direction: column;
          position: relative;
          margin: 1rem 0rem;
          i {
            position: absolute;
            top: 50%;
            right: 16%;
          }
          i:hover {
            color: #00fcb6;
            cursor: pointer;
          }
          label {
            margin-bottom: 0.45rem;
            color: rgb(61, 79, 88);
            font-size: 12px;
            /* font-family: Arial, Helvetica, sans-serif; */
            letter-spacing: 0.7px;
            line-height: 1.3;
          }
          input {
            padding: 0.55rem 0.4rem;
            border: 1px solid rgb(184, 196, 194);
            border-radius: 4px;
            font-size: 14px;
            outline: none;
            transition: all 150ms ease-in-out 0s;
            width: 85%;
            background: #fff;
            @media screen and (max-width: 375px) {
              width: 95%;
            }
            &::placeholder {
              color: #b1b1b1;
              width: 100%;
              font-weight: unset;
              /* font-family: Arial, Helvetica, sans-serif; */
            }
            &:active,
            &:focus {
              box-shadow: 0px 0px 0px 1.5px #1d428a;
              border-color: #1d428a;
            }
          }
        }
        &-button {
          margin-top: 2rem;
          display: flex;
          justify-content: flex-start;
          align-items: center;

          .btn-home {
            border-radius: 4px;
            background: #1d428a;
            border: 1px solid #1d428a;
            color: #fff;
            font-size: 0.9rem;
            text-align: center;
            /* font-family: Arial, Helvetica, sans-serif; */
            font-weight: 500;
            padding: 0.65rem 1.2rem;
            outline: none;
            cursor: pointer;
            transition: 0.3s ease;
            margin-left: 1rem;
          }
          button {
            border-radius: 4px;
            background: #1d428a;
            border: 1px solid #1d428a;
            color: #fff;
            /* font-family: Arial, Helvetica, sans-serif; */
            font-weight: 500;
            padding: 0.7rem 1.2rem;
            outline: none;
            cursor: pointer;
            transition: 0.3s ease;

            &:hover {
              background: #fff;
              color: #1d428a;
              border: 1px solid #fff;
            }
          }
        }
      }
      &-account {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        margin-top: 0.6rem;
        p {
          font-size: 14px;
          color: #000;
          font-weight: 500;
          display: flex;

          span {
            color: #05245a;
            cursor: pointer;
            font-weight: 700;
            margin-left: 0.4rem;
          }
        }
      }
    }
    &-img {
      flex: 3;
      height: 100vh;
      display: flex;
      @media screen and (max-width: 800px) {
        height: 100px;
        flex: none;
        box-shadow: none;
      }
      img {
        width: 200%;
        height: 100%;
        object-fit: cover;
        @media screen and (max-width: 800px) {
          /* width: 100%;
          height: 100%; */
          /* object-fit: contain; */
        }
      }
    }
  }
`;
