import React from 'react';
import * as S from 'components/TodoItem/TodoItemStyle';
import { Col } from 'react-bootstrap';
import { BiCircle, BiCheckCircle, BiXCircle } from 'react-icons/bi';
import { useDispatch } from 'react-redux';
import { todoRemove, todoToggle } from 'store/todos';

interface Props {
  id: number;
  title: string;
  content: string;
  done: boolean;
}

function TodoItem({ id, title, content, done }: Props) {
  const dispatch = useDispatch();
  const removeTodo = (e: React.MouseEvent<HTMLElement> | React.MouseEvent<SVGElement>) => {
    dispatch(todoRemove(e.currentTarget.dataset.id));
  };
  const toggleTodo = (e: React.MouseEvent<SVGElement>) => {
    dispatch(todoToggle(e.currentTarget.dataset.id));
  };
  return (
    <Col xs="6">
      <S.TodoItemBlock>
        <S.PostIt done={done}>
          <S.Icons>
            <S.CheckBtn>
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
