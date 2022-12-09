import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
import { TfiWrite } from 'react-icons/tfi';
import { useSelector, useDispatch } from 'react-redux';
import { isLoginFalse } from './TodoStore';

const Navbar = styled.div`
  background-color: #546e7a;
  padding: 8px 12px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  z-index: 1;
  width: 100%;
  a {
    text-decoration: none;
    color: white;
    border-radius: 8px;
    / &:hover {
      background-color: #607d8b;
    }
    &:active {
      background-color: #455a64;
    }
  }
`;

const NavLogo = styled.div`
  button {
    font-size: 1.5vh;
    font-weight: 600;
  }
`;
const NavMenu = styled.div`
  display: flex;
  flex-direction: row;
  button {
    font-size: 1vh;
  }
`;

function TodoNav() {
  const isLogin = useSelector((state) => state.isLogin);
  const loginUser = useSelector((state) => state.loginUser);
  const dispatch = useDispatch();

  const onLogout = () => dispatch(isLoginFalse());

  return (
    <>
      <Navbar>
        <NavLogo>
          <Link to="/">
            <Button color="inherit">
              <TfiWrite style={{ fontSize: '12px', marginRight: '3px' }} />
              ToDo-List
            </Button>
          </Link>
        </NavLogo>
        <NavMenu>
          {isLogin ? (
            <>
              <Link to="/mypage">
                <Button color="inherit">{loginUser.name}</Button>
              </Link>
              <Link to="/" onClick={onLogout}>
                <Button color="inherit">Logout</Button>
              </Link>
            </>
          ) : (
            <>
              <Link to="/login">
                <Button color="inherit">Login</Button>
              </Link>
              <Link to="/signup">
                <Button color="inherit">Sign up</Button>
              </Link>
            </>
          )}
        </NavMenu>
      </Navbar>
    </>
  );
}

export default TodoNav;
