import React, { useRef, useEffect, useState } from 'react';
import * as S from './TodoLoginStyle';
import { useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { isLoginTrue } from '../../store/isLogin';
import { loginUserSet } from '../../store/loginUser';

function TodoLogin() {
  const users = useSelector((state) => state.users);
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const emailInput = useRef();

  const [login, setLogin] = useState({
    loginEmail: '',
    loginPassword: '',
  });

  const { loginEmail, loginPassword } = login;

  const onChange = (e) => {
    const { name, value } = e.target;
    setLogin({ ...login, [name]: value });
  };

  const onLogin = (e) => {
    const findUser = users.find((user) => user.email === loginEmail && user.password === loginPassword);

    if (!loginEmail) {
      alert('이메일을 입력하세요!');
      e.preventDefatul();
    } else if (!loginPassword) {
      alert('패스워드를 입력하세요!');
      e.preventDefatul();
    } else if (findUser) {
      alert(`${findUser.name}님, 환영합니다!`);
      dispatch(isLoginTrue());
      dispatch(loginUserSet({ ...findUser }));
      navigate('/');
    } else {
      alert('id, password를 확인하세요!');
      setLogin({
        loginEmail: '',
        loginPassword: '',
      });
      e.preventDefatul();
    }
    navigate('/');
  };

  const onMoveHome = (e) => {
    navigate('/');
  };

  const onKeyDown = (e) => {
    e.key === 'Enter' && onLogin();
    e.keyCode === 27 && onMoveHome();
  };

  useEffect(() => {
    emailInput.current.focus();
  }, []);

  return (
    <>
      <S.DarkBackground>
        <S.LoginBlock>
          <h1>Login</h1>
          <S.Input
            type="text"
            name="loginEmail"
            placeholder="E-Mail"
            value={loginEmail}
            onChange={onChange}
            onKeyDown={onKeyDown}
            ref={emailInput}
          />
          <S.Input
            type="password"
            name="loginPassword"
            placeholder="Password"
            value={loginPassword}
            onChange={onChange}
            onKeyDown={onKeyDown}
          />

          <S.RowBlock>
            <Button size="large" variant="contained" color="primary" onClick={onLogin}>
              Login
            </Button>
            <Button size="large" variant="contained" color="primary" onClick={onMoveHome}>
              Cancel
            </Button>
          </S.RowBlock>
        </S.LoginBlock>
      </S.DarkBackground>
    </>
  );
}

export default TodoLogin;
