import React, { useState, useRef, useEffect } from 'react';
import styled, { css } from 'styled-components';
import { MdAdd } from 'react-icons/md';
import { useSelector, useDispatch } from 'react-redux';
import { todoCreate } from './TodoStore';

const Input = styled.input`
  border-radius: 4px;
  border: 1px solid #1cb1f5;
  font-size: 1vh;
  text-align: center;
  margin: 0 1vh;
  padding: 0.5vh;
`;

const InsertForm = styled.form`
  padding: 5vh;
  border-radius: 16px;
  bottom: 0;
  left: 0;
  width: 100%;
  position: absolute;
  display: flex;
  justify-content: center;
  background-color: #f8f9fa;
`;

const AddButton = styled.button`
  background-color: #38d9a9;
  &:hover {
    background: #63e6be;
  }
  &:active {
    background: #20c997;
  }
  cursor: pointer;
  width: 8vh;
  height: 8vh;
  font-size: 6vh;
  position: absolute;
  left: 50%;
  bottom: 0;
  transform: translate(-50%, 50%);
  color: white;
  border-radius: 50%;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;

  transition: 0.125s all ease-in;
  ${(props) =>
    !props.isLogin &&
    css`
      display: none;
    `}

  ${(props) =>
    props.open &&
    css`
      background: #ff6b6b;
      &:hover {
        background: #ff8787;
      }
      &:active {
        background: #fa5252;
      }
      transform: translate(-50%, 50%) rotate(45deg);
    `}
`;

function TodoCreate() {
  const isLogin = useSelector((state) => state.isLogin);
  const loginUser = useSelector((state) => state.loginUser);
  const dispatch = useDispatch();

  const nextTodoId = useRef(6);
  const titleInput = useRef();

  const [open, setOpen] = useState(false);
  const [input, setInput] = useState({
    title: '',
    content: '',
  });

  const { title, content } = input;

  const onChange = (e) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  };

  const createTodo = (e) => {
    if (!title) {
      alert('title을 입력하세요!');
    } else if (!content) {
      alert('content를 입력하세요!');
    } else {
      dispatch(
        todoCreate({
          id: nextTodoId.current,
          writer: loginUser.name,
          ...input,
          done: false,
        }),
      );
      setInput({
        title: '',
        content: '',
      });
      setOpen(false);
      nextTodoId.current += 1;
      e.preventDefault();
      titleInput.current.focus();
    }
  };

  const openInput = () => {
    setOpen(!open);
  };

  const onKeyDown = (e) => {
    e.key === 'Enter' && createTodo();
    e.keyCode === 27 && setOpen(false);
  };

  useEffect(() => {
    setInput({ title: '', content: '' });
    open && titleInput.current.focus();
  }, [open]);

  return (
    <>
      {open && (
        <InsertForm onSubmit={createTodo}>
          <Input
            // autoFocus
            type="text"
            name="title"
            value={title}
            placeholder="Title"
            onChange={onChange}
            ref={titleInput}
            onKeyDown={onKeyDown}
            style={{ width: '35%' }}
          />
          <Input
            type="text"
            name="content"
            value={content}
            placeholder="Content"
            onChange={onChange}
            onKeyDown={onKeyDown}
            style={{ width: '65%' }}
          />
        </InsertForm>
      )}
      <AddButton onClick={openInput} open={open} isLogin={isLogin}>
        <MdAdd />
      </AddButton>
    </>
  );
}

export default TodoCreate;
