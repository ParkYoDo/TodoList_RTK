import React from 'react';
import * as S from 'components/TodoHeader/TodoHeaderStyle';
import { useSelector } from 'react-redux';
import { RootState } from 'store/store';

function TodoHeader() {
  const todos = useSelector((state: RootState) => state.todos);
  const loginUser = useSelector((state: RootState) => state.loginUser);
  const isLogin = useSelector((state: RootState) => state.isLogin);

  const today = new Date();
  const dateString = today.toLocaleDateString('ko-KR', {
    year: 'numeric',
    month: 'long',
    day: '2-digit',
  });
  const dayName = today.toLocaleDateString('ko-KR', {
    weekday: 'long',
  });
  return (
    <>
      <S.TodoHeadBlock>
        <h1>{dateString}</h1>
        <div className="flex-row">
          {isLogin ? (
            <div className="tasks-left">
              할 일{' '}
              {todos.filter((todo) => todo.writer === loginUser.name).filter((todo) => todo.done === false).length}개
              남음
            </div>
          ) : (
            <div className="tasks-left" style={{ color: 'red' }}>
              로그인하세요!
            </div>
          )}

          <div className="day">{dayName}</div>
        </div>
      </S.TodoHeadBlock>
    </>
  );
}

export default TodoHeader;
