import React from 'react';
import * as S from './TodoHomeStyle';
import TodoHeader from '../../components/TodoHeader/TodoHeader';
import TodoList from '../../components/TodoList/TodoList';
import TodoCreate from '../../components/TodoCreate/TodoCreate';

function TodoHome() {
  return (
    <S.HomeBlock>
      <S.HomeDiv>
        <TodoHeader />
        <TodoList />
        <TodoCreate />
      </S.HomeDiv>
    </S.HomeBlock>
  );
}

export default TodoHome;
