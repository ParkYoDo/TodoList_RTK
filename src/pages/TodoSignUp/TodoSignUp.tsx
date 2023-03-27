import React, { useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import { useSelector, useDispatch } from 'react-redux';
import { userAdd } from 'store/users';
import { RootState } from 'store/store';
import * as S from 'pages/TodoSignUp/TodoSignUpStyle';

function TodoSignUp() {
  const users = useSelector((state: RootState) => state.users);
  const dispatch = useDispatch();

  const nextUserId = useRef(2);
  const nameInput = useRef() as React.RefObject<HTMLInputElement>;

  const navigate = useNavigate();

  const [input, setInput] = useState({
    name: '',
    email: '',
    password: '',
    checkPassword: '',
    phone: '',
  });

  const { name, email, password, checkPassword, phone } = input;

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
    if (name === 'phone' && value.length === 11) {
      setInput({
        ...input,
        [name]: value.replace(/(\d{3})(\d{4})(\d{4})/, '$1-$2-$3'),
      });
    } else if (name === 'phone' && value.length === 13) {
      setInput({
        ...input,
        [name]: value.replace(/-/g, '').replace(/(\d{3})(\d{4})(\d{4})/, '$1-$2-$3'),
      });
    }
  };

  const onSignUp = (e: React.MouseEvent<HTMLButtonElement>) => {
    const emailRegex = /^[A-Za-z0-9]([-_.]?[A-Za-z0-9])*@[A-Za-z0-9]([-_.]?[A-Za-z0-9])*\.[A-Za-z]{2,3}$/;
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d~`!@#$%^&*()-_=+]{8,20}$/;
    const phoneRegex = /^[0-9\b -]{13}$/;
    e.preventDefault();

    if (!name) {
      alert('이름을 입력하세요!');
    } else if (name.length < 2) {
      alert('이름을 2글자 이상 입력하세요!');
    } else if (users.find((user) => user.name === name)) {
      alert('이미 사용중인 이름입니다!');
    } else if (!email) {
      alert('이메일을 입력하세요!');
    } else if (!emailRegex.test(email)) {
      alert('이메일 형식을 확인하세요!');
    } else if (users.find((user) => user.email === email)) {
      alert('이미 사용중인 이메일입니다!');
    } else if (!password) {
      alert('비밀번호를 입력하세요!');
    } else if (!passwordRegex.test(password)) {
      alert('비밀번호를 확인하세요!');
    } else if (!checkPassword) {
      alert('비밀번호를 재입력하세요!');
    } else if (checkPassword && !(password === checkPassword)) {
      alert('비밀번호가 일치하지 않습니다!');
    } else if (!phone) {
      alert('휴대폰 번호를 입력하세요!');
    } else if (!phoneRegex.test(phone)) {
      alert('휴대폰 번호를 확인하세요!');
    } else if (users.find((user) => user.phone === phone)) {
      alert('이미 사용중인 휴대폰 번호입니다!');
    } else {
      dispatch(userAdd({ id: nextUserId.current, ...input }));
      alert('회원가입이 완료되었습니다!');
      setInput({
        name: '',
        email: '',
        password: '',
        checkPassword: '',
        phone: '',
      });
      nextUserId.current += 1;
      navigate('/');
    }
  };

  const onMoveHome = () => {
    setInput({
      name: '',
      email: '',
      password: '',
      checkPassword: '',
      phone: '',
    });
    navigate('/');
  };

  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement> | React.MouseEvent<HTMLButtonElement>) => {
    (e as React.KeyboardEvent<HTMLInputElement>).key === 'Enter' && onSignUp(e as React.MouseEvent<HTMLButtonElement>);
    (e as React.KeyboardEvent<HTMLInputElement>).keyCode === 27 && onMoveHome();
  };

  useEffect(() => {
    nameInput.current?.focus();
  }, []);

  return (
    <S.DarkBackground>
      <S.LoginBlock>
        <h1>SIGN UP</h1>
        <S.Input
          type="text"
          name="name"
          placeholder="Name (2글자 이상)"
          value={name}
          onChange={onChange}
          onKeyDown={onKeyDown}
          ref={nameInput}
        />
        <S.Input
          type="text"
          name="email"
          placeholder="E-Mail (abc@abc.abc)"
          value={email}
          onChange={onChange}
          onKeyDown={onKeyDown}
        />
        <S.Input
          type="password"
          name="password"
          placeholder="Password (영어,숫자 필수포함 8~20자)"
          value={password}
          onChange={onChange}
          onKeyDown={onKeyDown}
        />
        <S.Input
          type="password"
          name="checkPassword"
          placeholder="Confirm Password"
          value={checkPassword}
          onChange={onChange}
          onKeyDown={onKeyDown}
        />
        {checkPassword && !(password === checkPassword) && <span style={{ color: 'red' }}>Mismatched Password!</span>}
        <S.Input
          type="text"
          name="phone"
          placeholder="Phone Number ( - 포함)"
          value={phone}
          onChange={onChange}
          onKeyDown={onKeyDown}
          maxLength={13}
        />
        <S.RowBlock>
          <Button size="large" variant="contained" color="primary" onClick={onSignUp}>
            Confirm
          </Button>
          <Button size="large" variant="contained" color="primary" onClick={onMoveHome}>
            Cancel
          </Button>
        </S.RowBlock>
      </S.LoginBlock>
    </S.DarkBackground>
  );
}

export default TodoSignUp;
