import styled, { css } from 'styled-components';

export const Input = styled.input`
  border-radius: 4px;
  border: 1px solid #cecece;
  font-size: 12px;
  text-align: center;
  margin: 4px;
  padding: 4px;
  outline: none;
`;

export const InsertForm = styled.form`
  padding: 24px 8px;
  border-radius: 12px;
  border: 1px solid #e4e4e4;
  bottom: 0;
  width: 100%;
  position: absolute;
  display: flex;
  justify-content: center;
  background-color: #f8f9fa;
`;

export const AddButton = styled.button<{ isLogin: boolean; open: boolean }>`
  background-color: #38d9a9;
  &:hover {
    background: #63e6be;
  }
  &:active {
    background: #20c997;
  }
  cursor: pointer;
  width: 44px;
  height: 44px;
  font-size: 32px;
  position: absolute;
  left: 50%;
  bottom: 0;
  transform: translate(-50%, 50%);
  color: white;
  border-radius: 50%;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;

  transition: 0.125s all ease-in;
  ${(props) =>
    !props.isLogin &&
    css`
      display: none;
    `}

  ${(props) =>
    props.open &&
    css`
      background: #ff6b6b;
      &:hover {
        background: #ff8787;
      }
      &:active {
        background: #fa5252;
      }
      transform: translate(-50%, 50%) rotate(45deg);
    `}
`;
