import React from 'react';
import * as S from './TodoItemStyle';
import { Col } from 'react-bootstrap';
import { BiCircle, BiCheckCircle, BiXCircle } from 'react-icons/bi';
import { useDispatch } from 'react-redux';
import { todoRemove, todoToggle } from '../../store/todos';

function TodoItem({ id, title, content, done }) {
  const dispatch = useDispatch();
  const removeTodo = (e) => {
    dispatch(todoRemove(e.target.dataset.id));
  };
  const toggleTodo = (e) => {
    dispatch(todoToggle(e.target.dataset.id));
  };
  return (
    <Col xs="6">
      <S.TodoItemBlock>
        <S.PostIt done={done}>
          <S.Icons>
            <S.CheckBtn done={done}>
              {done ? (
                <BiCheckCircle onClick={toggleTodo} data-id={id} />
              ) : (
                <BiCircle onClick={toggleTodo} data-id={id} />
              )}
            </S.CheckBtn>
            <S.RemoveBtn onClick={removeTodo} data-id={id}>
              <BiXCircle onClick={removeTodo} data-id={id} />
            </S.RemoveBtn>
          </S.Icons>
          <div className="title">{title}</div>
          <div className="content">{content}</div>
        </S.PostIt>
      </S.TodoItemBlock>
    </Col>
  );
}

export default TodoItem;
