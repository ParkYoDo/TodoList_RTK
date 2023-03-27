import React from 'react';
import * as S from 'components/TodoNav/TodoNavStyle';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
import { TfiWrite } from 'react-icons/tfi';
import { useSelector, useDispatch } from 'react-redux';
import { isLoginFalse } from 'store/isLogin';
import { RootState } from 'store/store';

function TodoNav() {
  const isLogin = useSelector((state: RootState) => state.isLogin);
  const loginUser = useSelector((state: RootState) => state.loginUser);
  const dispatch = useDispatch();

  const onLogout = () => dispatch(isLoginFalse());

  return (
    <>
      <S.Navbar>
        <S.NavLogo>
          <Link to="/">
            <Button color="inherit">
              <TfiWrite style={{ fontSize: '18px', marginRight: '8px' }} />
              ToDo-List
            </Button>
          </Link>
        </S.NavLogo>
        <S.NavMenu>
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
        </S.NavMenu>
      </S.Navbar>
    </>
  );
}

export default TodoNav;
