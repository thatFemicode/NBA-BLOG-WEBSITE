import styled from "styled-components";

export const BlogNavStyled = styled.nav`
  max-width: 75rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
  padding-left: 1.25rem;
  padding-right: 1.25rem;

  .logo {
    @media (max-width: ${({ theme }) => theme.desktop}) {
      width: 60%;
    }
  }
  .items {
    justify-content: space-evenly;
    display: flex;
    align-items: center;
    width: 50%;
    @media (min-width: ${({ theme }) => theme.blogNav}) {
      width: 70%;
    }
    @media (min-width: ${({ theme }) => theme.desktop}) {
      width: 400px;
    }

    &-image {
      display: flex;
      color: #fff;
      background-color: #ce1141;
      width: 30px;
      height: 30px;
      overflow: hidden;
      font-size: 1.25rem;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
    }
    h3 {
      text-transform: Capitalize;
      display: none;
      @media (min-width: ${({ theme }) => theme.blogNav}) {
        display: block;
      }
    }
  }
`;
