import styled, { css } from 'styled-components';

export const RemoveBtn = styled.div`
  color: #ced4da;
  &:hover {
    color: #ff6b6b;
  }
  &:active {
    color: #fa5252;
  }
`;

export const CheckBtn = styled.div`
  color: #ced4da;
  &:hover {
    color: #38d9a9;
  }
  &:active {
    color: #20c997;
  }
`;

export const Icons = styled.div`
  position: absolute;
  font-size: 18px;
  right: 0;
  top: 0;
  cursor: pointer;
  display: none;
  @media screen and (min-width: 768px) and (max-width: 1024px) {
    font-size: 20px;
  }
  @media screen and (min-width: 1024px) {
    font-size: 22px;
  }
`;

export const TodoItemBlock = styled.div`
  padding: 7px 0;
`;

export const PostIt = styled.div`
  background-color: #fef3bf;
  padding: 4px;
  border-radius: 12px;
  position: relative;
  box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.2);
  &:hover {
    ${Icons} {
      display: flex;
    }
  }
  .title {
    text-align: center;
    margin: 12px 4px;
    border-bottom: 1px solid red;
    font-size: 14px;
    font-weight: 600;
  }
  .content {
    text-align: center;
    margin: 12px 4px;
    border-bottom: 1px solid red;
    font-size: 12px;
  }
  ${(props) =>
    props.done &&
    css`
      background-color: #ced4da;
      color: #757575;
      text-decoration: line-through 1px solid red;
      .title,
      .content {
        border-bottom: 1px solid black;
      }
    `}

  @media screen and (min-width: 768px) and (max-width: 1024px) {
    .title,
    .content {
      margin: 16px 8px;
      font-size: 16px;
    }
  }
  @media screen and (min-width: 1024px) {
    .title,
    .content {
      margin: 16px;
      font-size: 18px;
    }
  }
`;
