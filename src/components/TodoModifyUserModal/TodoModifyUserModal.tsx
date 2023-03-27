import React, { useState } from 'react';
import * as S from 'components/TodoModifyUserModal/TodoModifyUserModalStyle';
import Modal from 'react-bootstrap/Modal';
import { Button } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { loginUserModify } from 'store/loginUser';
import { todoModify } from 'store/todos';
import { userModify } from 'store/users';
import { RootState } from 'store/store';

interface Props {
  show: {
    open: boolean;
    name: string;
  };
  setShow: React.Dispatch<
    React.SetStateAction<{
      open: boolean;
      name: string;
    }>
  >;
}

function TodoModifyUserModal({ show, setShow }: Props) {
  const users = useSelector((state: RootState) => state.users);
  const loginUser = useSelector((state: RootState) => state.loginUser);
  const dispatch = useDispatch();

  const [input, setInput] = useState('');

  const closeModal = () => {
    setShow({ open: false, name: '' });
    setInput('');
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    const { name } = show;
    setInput(value);
    if (name === 'phone' && value.length === 11) {
      setInput(value.replace(/(\d{3})(\d{4})(\d{4})/, '$1-$2-$3'));
    } else if (name === 'phone' && value.length === 13) {
      setInput(value.replace(/-/g, '').replace(/(\d{3})(\d{4})(\d{4})/, '$1-$2-$3'));
    }
  };

  const modifyUser = (e: React.FormEvent<HTMLFormElement>) => {
    const emailRegex = /^[A-Za-z0-9]([-_.]?[A-Za-z0-9])*@[A-Za-z0-9]([-_.]?[A-Za-z0-9])*\.[A-Za-z]{2,3}$/;
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d~`!@#$%^&*()-_=+]{8,20}$/;
    const phoneRegex = /^[0-9\b -]{13}$/;
    e.preventDefault();

    if (!input) {
      alert(`${show.name}을 입력하세요!`);
    } else if (show.name === 'name' && input.length < 2) {
      alert('이름을 2글자 이상 입력하세요!');
    } else if (show.name === 'name' && users.find((user) => user.name === input)) {
      alert('이미 사용 중인 이름입니다!');
    } else if (show.name === 'email' && !emailRegex.test(input)) {
      alert('이메일 형식을 확인하세요!');
    } else if (show.name === 'email' && users.find((user) => user.email === input)) {
      alert('이미 사용 중인 이메일입니다!');
    } else if (show.name === 'password' && !passwordRegex.test(input)) {
      alert('비밀번호를 숫자, 문자를 포함하여 8~20자로 입력해주세요!');
    } else if (show.name === 'phone' && !phoneRegex.test(input)) {
      alert('휴대폰 번호를 확인하세요!');
    } else if (show.name === 'phone' && users.find((user) => user.phone === input)) {
      alert('이미 사용 중인 휴대폰 번호입니다!');
    } else {
      show.name === 'name' && dispatch(todoModify({ writer: input, loginUser: loginUser }));
      dispatch(userModify({ key: show.name, value: input, loginUser: loginUser }));
      dispatch(loginUserModify({ key: show.name, value: input }));
      closeModal();
    }
  };

  return (
    <>
      <Modal show={show.open} onHide={closeModal} centered>
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter" style={{ fontSize: '2.5vh' }}>
            변경 할 {show.name} 입력하세요!
          </Modal.Title>
        </Modal.Header>
        <S.ModifyForm onSubmit={modifyUser}>
          <Modal.Body>
            <S.ModifyInput
              type="text"
              placeholder="Enter Name"
              autoFocus
              value={input}
              onChange={onChange}
              style={{ fontSize: '2vh' }}
              maxLength={show.name === 'phone' ? 13 : 30}
            />
          </Modal.Body>
          <Modal.Footer>
            <Button type="button" style={{ fontSize: '2vh' }} variant="secondary" onClick={closeModal}>
              Close
            </Button>
            <Button type="submit" style={{ fontSize: '2vh' }} variant="primary">
              Save Change
            </Button>
          </Modal.Footer>
        </S.ModifyForm>
      </Modal>
    </>
  );
}

export default TodoModifyUserModal;
