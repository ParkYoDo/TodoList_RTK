import styled from 'styled-components';

export const HomeBlock = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding-top: 44px;
`;

export const HomeDiv = styled.div`
  width: 320px;
  height: 540px;
  background-color: white;
  border-radius: 12px;
  box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.1);
  border: 1px solid #e9ecef;
  display: flex;
  flex-direction: column;
  position: relative;
  @media screen and (min-width: 768px) and (max-width: 1024px) {
    width: 500px;
    height: 640px;
  }
  @media screen and (min-width: 1024px) {
    width: 600px;
    height: 680px;
  }
`;
