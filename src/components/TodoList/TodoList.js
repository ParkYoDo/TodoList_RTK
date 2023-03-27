import React from 'react';
import * as S from './TodoListStyle';
import TodoItem from '../TodoItem/TodoItem';
import { Container, Row } from 'react-bootstrap';
import { useSelector } from 'react-redux';

function TodoList() {
  const todos = useSelector((state) => state.todos);
  const isLogin = useSelector((state) => state.isLogin);
  const loginUser = useSelector((state) => state.loginUser);

  return (
    <S.TodoListBlock isLogin={isLogin}>
      <Container>
        <Row>
          {isLogin ? (
            todos
              .filter((todo) => todo.writer === loginUser.name)
              .map((todo) => (
                <TodoItem id={todo.id} title={todo.title} content={todo.content} done={todo.done} key={todo.id} />
              ))
          ) : (
            <div className="mainText">Todo-List</div>
          )}
        </Row>
      </Container>
    </S.TodoListBlock>
  );
}

export default TodoList;
