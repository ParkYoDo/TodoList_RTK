import styled from 'styled-components';

export const Navbar = styled.div`
  position: fixed;
  background-color: #646f75;
  padding: 4px 12px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  z-index: 1;
  width: 100%;
  a {
    text-decoration: none;
    color: white;
  }
`;

export const NavLogo = styled.div`
  button {
    font-size: 14px;
  }
`;

export const NavMenu = styled.div`
  button {
    font-size: 12px;
  }
`;
