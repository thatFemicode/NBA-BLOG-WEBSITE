import styled from 'styled-components';
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
    h6 {
      margin-bottom: 1rem;
    }
    .comment-name {
      text-transform: capitalize;
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
        padding: 1rem;
      }
    }
  }
  button {
    font-size: 1rem;
    padding: 0.25rem 0.75rem;
    border-radius: 1rem;
    border-color: transparent;
    color: white;
    background-color: #1d428a;
    cursor: pointer;
  }
`;
