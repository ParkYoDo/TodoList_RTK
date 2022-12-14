import React, { useEffect, useState, useRef } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import { useSelector, useDispatch } from 'react-redux';
import { userAdd } from '../components/TodoStore';

const DarkBackground = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LoginBlock = styled.div`
  width: 70%;
  max-width: 700px;
  padding: 30px;

  background-color: white;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;

  h1 {
    font-size: 4vw;
  }

  Button {
    margin: 1vw;
    padding: 1vw;
    margin-top: 2vw;
    font-size: 1.5vw;
  }
`;

const Input = styled.input`
  margin: 10px;
  padding: 1vw;
  width: 100%;

  text-align: center;
  font-size: 1vw;
  border-radius: 5px;
  border: 2px solid skyblue;
`;

const RowBlock = styled.div`
  display: flex;
  flex-direction: row;
`;

function TodoSignUp() {
  const users = useSelector((state) => state.users);
  const dispatch = useDispatch();

  const nextUserId = useRef(2);
  const nameInput = useRef();

  const navigate = useNavigate();

  const [input, setInput] = useState({
    name: '',
    email: '',
    password: '',
    checkPassword: '',
    phone: '',
  });

  const { name, email, password, checkPassword, phone } = input;

  const onChange = (e) => {
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
        [name]: value
          .replace(/-/g, '')
          .replace(/(\d{3})(\d{4})(\d{4})/, '$1-$2-$3'),
      });
    }
  };

  const onSignUp = (e) => {
    const emailRegex =
      /^[A-Za-z0-9]([-_.]?[A-Za-z0-9])*@[A-Za-z0-9]([-_.]?[A-Za-z0-9])*\.[A-Za-z]{2,3}$/;
    const passwordRegex =
      /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d~`!@#$%^&*()-_=+]{8,20}$/;
    const phoneRegex = /^[0-9\b -]{13}$/;

    if (!name) {
      alert('????????? ???????????????!');
      e.preventDefault();
    } else if (name.length < 2) {
      alert('????????? 2?????? ?????? ???????????????!');
      e.preventDefault();
    } else if (users.find((user) => user.name === name)) {
      alert('?????? ???????????? ???????????????!');
      e.preventDefault();
    } else if (!email) {
      alert('???????????? ???????????????!');
      e.preventDefault();
    } else if (!emailRegex.test(email)) {
      alert('????????? ????????? ???????????????!');
      e.preventDefault();
    } else if (users.find((user) => user.email === email)) {
      alert('?????? ???????????? ??????????????????!');
      e.preventDefault();
    } else if (!password) {
      alert('??????????????? ???????????????!');
      e.preventDefault();
    } else if (!passwordRegex.test(password)) {
      alert('??????????????? ???????????????!');
      e.preventDefault();
    } else if (!checkPassword) {
      alert('??????????????? ??????????????????!');
      e.preventDefault();
    } else if (checkPassword && !(password === checkPassword)) {
      alert('??????????????? ???????????? ????????????!');
      e.preventDefault();
    } else if (!phone) {
      alert('????????? ????????? ???????????????!');
      e.preventDefault();
    } else if (!phoneRegex.test(phone)) {
      alert('????????? ????????? ???????????????!');
      e.preventDefault();
    } else if (users.find((user) => user.phone === phone)) {
      alert('?????? ???????????? ????????? ???????????????!');
      e.preventDefault();
    } else {
      dispatch(userAdd({ id: nextUserId.current, ...input }));
      alert('??????????????? ?????????????????????!');
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

  const onMoveHome = (e) => {
    setInput({
      name: '',
      email: '',
      password: '',
      checkPassword: '',
      phone: '',
    });
    navigate('/');
  };

  const onKeyDown = (e) => {
    e.key === 'Enter' && onSignUp();
    e.keyCode === 27 && onMoveHome();
  };

  useEffect(() => {
    nameInput.current.focus();
  }, []);

  return (
    <>
      <DarkBackground>
        <LoginBlock>
          <h1>SIGN UP</h1>
          <Input
            type="text"
            name="name"
            placeholder="Name (2?????? ??????)"
            value={name}
            onChange={onChange}
            onKeyDown={onKeyDown}
            ref={nameInput}
          />
          <Input
            type="text"
            name="email"
            placeholder="E-Mail (abc@abc.abc)"
            value={email}
            onChange={onChange}
            onKeyDown={onKeyDown}
          />
          <Input
            type="password"
            name="password"
            placeholder="Password (??????,?????? ?????? 8~20???)"
            value={password}
            onChange={onChange}
            onKeyDown={onKeyDown}
          />
          <Input
            type="password"
            name="checkPassword"
            placeholder="Confirm Password"
            value={checkPassword}
            onChange={onChange}
            onKeyDown={onKeyDown}
          />
          {checkPassword && !(password === checkPassword) && (
            <span style={{ color: 'red' }}>Mismatched Password!</span>
          )}
          <Input
            type="text"
            name="phone"
            placeholder="Phone Number ( - ??????)"
            value={phone}
            onChange={onChange}
            onKeyDown={onKeyDown}
            maxLength="13"
          />
          <RowBlock>
            <Button
              size="large"
              variant="contained"
              color="primary"
              onClick={onSignUp}
            >
              Confirm
            </Button>
            <Button
              size="large"
              variant="contained"
              color="primary"
              onClick={onMoveHome}
            >
              Cancel
            </Button>
          </RowBlock>
        </LoginBlock>
      </DarkBackground>
    </>
  );
}

export default TodoSignUp;
