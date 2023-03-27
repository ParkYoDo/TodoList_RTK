import styled from 'styled-components';

export const MyPageBlock = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const MyPageDiv = styled.div`
  width: 320px;
  border-radius: 12px;
  box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.1);
  border: 1px solid #e9ecef;
  padding: 3vh;

  background-color: white;

  h1 {
    font-size: 24px;
    margin-bottom: 24px;
  }
  .badge,
  .text {
    font-size: 12px;
  }
`;
