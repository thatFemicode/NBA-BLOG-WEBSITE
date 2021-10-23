import styled from "styled-components";
export const CommentStyled = styled.div`
  display: flex;
  justify-content: space-between;
  @media (max-width: ${({ theme }) => theme.desktop}) {
    flex-direction: column;
  }
  .comments-container {
    height: 300px;
    overflow: auto;
    margin-right: 30px;
    @media (max-width: ${({ theme }) => theme.desktop}) {
      height: 200px;
    }
  }
  .comments-box {
    width: 80%;
    h6 {
      margin-bottom: 1rem;
    }
    &-input {
      textarea {
        width: 90%;
        background: transparent;
        /* border: none; */
        outline: none;
        border-radius: 1rem;
        margin-bottom: 1rem;
      }
    }
  }
`;
