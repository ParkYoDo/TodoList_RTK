import React from 'react';
import styled from 'styled-components';

const TodoTemplateBlock = styled.div`
  width: 70vw;
  max-width: 700px;
  height: 70vh;
  min-height: 300px;
  margin: 10vh auto;

  background-color: white;
  border-radius: 16px;
  box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.1);
  border: 1px solid #e9ecef;

  display: flex;
  flex-direction: column;

  position: relative;
`;

function TodoTemplate({ children }) {
  return <TodoTemplateBlock>{children}</TodoTemplateBlock>;
}

export default TodoTemplate;
