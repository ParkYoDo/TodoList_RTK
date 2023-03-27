import React from 'react';
import * as S from 'components/TodoList/TodoListStyle';
import TodoItem from 'components/TodoItem/TodoItem';
import { Container, Row } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { RootState } from 'store/store';

function TodoList() {
  const todos = useSelector((state: RootState) => state.todos);
  const isLogin = useSelector((state: RootState) => state.isLogin);
  const loginUser = useSelector((state: RootState) => state.loginUser);

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
