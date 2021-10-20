import styled from "styled-components";

export const OuterLayout = styled.section`
  width: 90%;
  margin: 0 auto;
  padding: 1rem 1rem;
  overflow-x: hidden;
`;
export const InnerLayout = styled.section`
  padding: 2rem 2rem;
  @media (max-width: ${({ theme }) => theme.max}) {
    padding: 2rem 1rem;
  }
`;
