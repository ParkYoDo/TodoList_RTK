import React from 'react';
import styled, { css } from 'styled-components';
import { Col } from 'react-bootstrap';
import { BiCircle, BiCheckCircle, BiXCircle } from 'react-icons/bi';
import { useDispatch } from 'react-redux';
import { todoRemove, todoToggle } from './TodoStore';

const RemoveBtn = styled.div`
  color: #ced4da;
  &:hover {
    color: #ff6b6b;
  }
  &:active {
    color: #fa5252;
  }
`;

const CheckBtn = styled.div`
  color: #ced4da;
  &:hover {
    color: #38d9a9;
  }
  &:active {
    color: #20c997;
  }
`;

const Icons = styled.div`
  position: absolute;
  font-size: 3vw;
  right: 1vw;
  top: 0.1vw;
  cursor: pointer;
  display: none;
`;

const TodoItemBlock = styled.div`
  padding: 1vw 0px;
`;

const PostIt = styled.div`
  background-color: #fef3bf;
  padding: 1.2vw;
  border-radius: 8px;
  position: relative;
  box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.2);
  &:hover {
    ${Icons} {
      display: flex;
    }
  }
  .title {
    text-align: center;
    margin: 8px 0px;
    border-bottom: 1px solid red;
    font-size: 2.5vw;
    font-weight: 600;
  }
  .content {
    text-align: center;
    margin: 8px 0px;
    border-bottom: 1px solid red;
    font-size: 2vw;
  }
  ${(props) =>
    props.done &&
    css`
      background-color: #ced4da;
      color: black;
      text-decoration: line-through 1px solid red;
      .title,
      .content {
        border-bottom: 1px solid black;
      }
    `}
`;

function TodoItem({ id, title, content, done }) {
  const dispatch = useDispatch();
  const removeTodo = (e) => {
    dispatch(todoRemove(e.target.dataset.id));
  };
  const toggleTodo = (e) => {
    dispatch(todoToggle(e.target.dataset.id));
  };
  return (
    <>
      <Col xs="6">
        <TodoItemBlock>
          <PostIt done={done}>
            <Icons>
              <CheckBtn done={done}>
                {done ? (
                  <BiCheckCircle onClick={toggleTodo} data-id={id} />
                ) : (
                  <BiCircle onClick={toggleTodo} data-id={id} />
                )}
              </CheckBtn>
              <RemoveBtn>
                <BiXCircle onClick={removeTodo} data-id={id} />
              </RemoveBtn>
            </Icons>
            <div className="title">{title}</div>
            <div className="content">{content}</div>
          </PostIt>
        </TodoItemBlock>
      </Col>
    </>
  );
}

export default TodoItem;
