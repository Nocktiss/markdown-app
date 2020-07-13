import styled from "styled-components";

export const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  ${"" /* justify-content: center; */}
  background: ${({ theme }) => theme.primaryDark};
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(-100%)")};
  height: 100vh;
  ${"" /* text-align: left; */}
  padding: 2rem;
  position: absolute;
  top: 0;
  left: 0;
  transition: transform 0.3s ease-in-out;
  @media (max-width: ${({ theme }) => theme.mobile}) {
    width: 100%;
      box-shadow: none;
  }
  p {
    ${"" /* font-size: 50rem; */}
    text-transform: uppercase;
    padding: 1rem 0;
    font-weight: bold;
    letter-spacing: 0.5rem;
    color: ${({ theme }) => theme.primaryWhite};
    text-decoration: none;
    transition: color 0.3s linear;
    @media (max-width: ${({ theme }) => theme.mobile}) {
      font-size: 0.9rem;
      text-align: left;

    }
    &:hover {
      color: ${({ theme }) => theme.primaryGold};
    }
  }
`;
