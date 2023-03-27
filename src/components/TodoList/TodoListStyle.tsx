import styled, { css } from 'styled-components';

export const TodoListBlock = styled.div<{ isLogin: boolean }>`
  padding: 12px 4px;
  overflow-y: auto;
  height: 100%;
  ${(props) =>
    !props.isLogin &&
    css`
      display: flex;
      justify-content: center;
      align-items: center;
    `}

  .mainText {
    text-align: center;
    font-size: 24px;
    color: #20c997;
  }

  @media screen and (min-width: 768px) and (max-width: 1024px) {
    margin: 30px;
  }
  @media screen and (min-width: 1024px) {
    margin: 30px;
  }
`;
