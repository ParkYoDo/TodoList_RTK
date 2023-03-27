import React from 'react';
import TodoHeader from 'components/TodoHeader/TodoHeader';
import TodoList from 'components/TodoList/TodoList';
import TodoCreate from 'components/TodoCreate/TodoCreate';
import * as S from 'pages/TodoHome/TodoHomeStyle';

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
