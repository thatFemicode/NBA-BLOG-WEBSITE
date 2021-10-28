import styled from 'styled-components';

export const BlogFormStyled = styled.div`
  h2 {
    @media screen and (max-width: 330px) {
      font-size: 1.7rem;
    }
  }
  h6 {
    @media screen and (max-width: 330px) {
      font-size: 0.6rem;
    }
  }
  .blog {
    &-form-container-fields {
      display: flex;
      flex-direction: column;
      justify-content: center;
      /* padding: 2rem; */
      position: relative;
      @media screen and (max-width: 375px) {
        padding: 2rem 0.5rem;
      }
      @media screen and (max-width: 330px) {
        padding: 1rem 0.3rem;
      }

      &-content {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        /* padding: 2rem; */
        /* box-shadow: 0px 1px 5px rgb(0 0 0 / 10%); */
        /* border-radius: 5px; */
        /* transition: 0.8s ease; */

        &-input {
          display: flex;
          flex-direction: column;
          position: relative;
          margin: 1rem 0rem;
          label {
            margin-bottom: 0.2rem;
            color: rgb(61, 79, 88);
            font-size: 12px;
            /* font-family: Arial, Helvetica, sans-serif; */
            letter-spacing: 0.7px;
            line-height: 1.3;
          }
          input {
            padding: 0.3rem 0.4rem;
            border: 1px solid rgb(184, 196, 194);
            border-radius: 4px;
            font-size: 14px;
            outline: none;
            transition: all 150ms ease-in-out 0s;
            width: 60%;
            background: #fff;
            @media screen and (max-width: 520px) {
              width: 70%;
            }
            @media screen and (max-width: 330px) {
              width: 50%;
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
          textarea {
            padding: 0.55rem 0.4rem;
            border: 1px solid rgb(184, 196, 194);
            border-radius: 4px;
            font-size: 14px;
            outline: none;
            transition: all 150ms ease-in-out 0s;
            width: 60%;
            background: #fff;
            @media screen and (max-width: 520px) {
              width: 70%;
            }
            @media screen and (max-width: 330px) {
              width: 50%;
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

          button {
            border-radius: 4px;
            background: #1d428a;
            border: 1px solid #1d428a;
            color: #fff;
            /* font-family: Arial, Helvetica, sans-serif; */
            font-weight: 500;
            padding: 0.4rem 1rem;
            outline: none;
            font-size: 0.8rem;
            cursor: pointer;
            transition: 0.3s ease;
            &:hover {
              background: #ce1141;
              border: 1px solid #fff;
            }
            &:nth-child(1) {
              background: #ce1141;
              border: none;
              margin-right: 1rem;
              &:hover {
                background: #1d428a;
              }
            }
          }
        }
      }
    }
  }
  .main-text {
    max-width: 400px;
    margin-right: 2rem;
    p {
      text-align: justify;
      max-width: 300px;
      white-space: break-spaces;
    }
  }
  .authentication-text {
    font-size: 1rem;
    /* display: none; */
  }
`;
