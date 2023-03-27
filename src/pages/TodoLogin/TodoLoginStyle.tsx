import styled from 'styled-components';

export const DarkBackground = styled.div`
  position: absolute;
  z-index: 2;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LoginBlock = styled.div`
  width: 330px;
  padding: 24px;
  background-color: white;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  overflow: hidden;

  h1 {
    font-size: 24px;
  }

  Button {
    margin: 8px;
    font-size: 12px;
  }

  @media screen and (min-width: 768px) and (max-width: 1024px) {
    width: 500px;
    height: 250px;
  }
  @media screen and (min-width: 1024px) {
    width: 600px;
    height: 250px;
  }
`;

export const RowBlock = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Input = styled.input`
  margin: 8px;
  padding: 8px 12px;
  width: 100%;
  text-align: center;
  font-size: 12px;
  border-radius: 8px;
  border: 2px solid skyblue;
  outline: none;
`;
