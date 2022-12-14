import React from 'react';
import styled, { css } from 'styled-components';
import TodoItem from './TodoItem';
import { Container, Row } from 'react-bootstrap';
import { useSelector } from 'react-redux';

const TodoListBlock = styled.div`
  padding: 1vh 2vh;
  overflow-y: auto;
  height: 100%;
  ${(props) =>
    !props.isLogin &&
    css`
      display: flex;
      justify-content: center;
      align-items: center;
    `}

  .mainText {
    text-align: center;
    font-size: 4.7vw;
    color: #20c997;
  }
`;

function TodoList() {
  const todos = useSelector((state) => state.todos);
  const isLogin = useSelector((state) => state.isLogin);
  const loginUser = useSelector((state) => state.loginUser);

  return (
    <TodoListBlock isLogin={isLogin}>
      <Container>
        <Row>
          {isLogin ? (
            todos
              .filter((todo) => todo.writer === loginUser.name)
              .map((todo) => (
                <TodoItem
                  id={todo.id}
                  title={todo.title}
                  content={todo.content}
                  done={todo.done}
                  key={todo.id}
                />
              ))
          ) : (
            <div className="mainText">Todo-List</div>
          )}
        </Row>
      </Container>
    </TodoListBlock>
  );
}

export default TodoList;
