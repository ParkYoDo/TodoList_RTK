import React, { useState, useRef, useEffect } from 'react';
import * as S from 'components/TodoCreate/TodoCreateStyle';
import { MdAdd } from 'react-icons/md';
import { useSelector, useDispatch } from 'react-redux';
import { todoCreate } from 'store/todos';
import { RootState } from 'store/store';

function TodoCreate() {
  const isLogin = useSelector((state: RootState) => state.isLogin);
  const loginUser = useSelector((state: RootState) => state.loginUser);
  const todos = useSelector((state: RootState) => state.todos);
  const dispatch = useDispatch();

  const nextTodoId = useRef(todos.length + 1);
  const titleInput = useRef() as React.RefObject<HTMLInputElement>;

  const [open, setOpen] = useState(false);
  const [input, setInput] = useState({
    title: '',
    content: '',
  });

  const { title, content } = input;

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  };

  const createTodo = () => {
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
      titleInput.current?.focus();
    }
  };

  const openInput = () => {
    setOpen(!open);
  };

  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    e.key === 'Enter' && createTodo();
    e.keyCode === 27 && setOpen(false);
  };

  useEffect(() => {
    setInput({ title: '', content: '' });
    open && titleInput.current?.focus();
  }, [open]);

  return (
    <>
      {open && (
        <S.InsertForm onSubmit={createTodo}>
          <S.Input
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
          <S.Input
            type="text"
            name="content"
            value={content}
            placeholder="Content"
            onChange={onChange}
            onKeyDown={onKeyDown}
            style={{ width: '65%' }}
          />
        </S.InsertForm>
      )}
      <S.AddButton onClick={openInput} open={open} isLogin={isLogin}>
        <MdAdd />
      </S.AddButton>
    </>
  );
}

export default TodoCreate;
