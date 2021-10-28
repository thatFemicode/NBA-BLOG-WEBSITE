import styled from 'styled-components';

export const BlogSearchStyled = styled.div`
  /* padding-top: 1.3rem; */
  /* margin-top: -12.5rem; */
  @media screen and (max-width: 520px) {
    margin-left: -3rem;
  }
  @media screen and (min-width: 768px) {
    /* margin-top: -12.5rem; */
  }
  .blog-search-container-fields-content-input {
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
      width: 85%;
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
`;
